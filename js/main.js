// Array globale dei progetti (popolato automaticamente dai file singoli)
window.projectsData = window.projectsData || [];

function renderProjects(categoryFilter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = categoryFilter === 'all' 
    ? window.projectsData 
    : window.projectsData.filter(item => item.category === categoryFilter);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openModal(item.id);
    card.innerHTML = `
      <img src="${item.coverImage}" alt="${item.title}">
      <div class="project-info">
        <span class="project-category">${item.categoryLabel}</span>
        <h3 class="project-title">${item.title}</h3>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openModal(id) {
  const project = window.projectsData.find(p => p.id === id);
  if (!project) return;

  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalCategory').innerText = project.categoryLabel;
  document.getElementById('modalSoftware').innerText = "Software: " + project.software;
  document.getElementById('modalDescription').innerText = project.description;
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = ''; // Pulisce la modale

  // Sistema a blocchi modulari (Puzzle) con supporto stili, allineamenti e Marmoset
  if (project.contentBlocks && Array.isArray(project.contentBlocks)) {
    project.contentBlocks.forEach(block => {
      
      // 1. BLOCCO TESTO (Con supporto per grassetto, corsivo, tag e allineamento)
      if (block.type === 'text') {
        const p = document.createElement(block.tag || 'p'); // Supporta <p> o <h3>
        p.innerHTML = block.content;
        
        let align = block.align || 'left';
        let isItalic = block.italic ? 'font-style: italic;' : '';
        let isBold = block.bold ? 'font-weight: bold;' : '';
        let fontSize = block.size === 'large' ? '1.25rem' : (block.size === 'small' ? '0.9rem' : '1rem');
        
        p.style.cssText = `color: var(--text-dim); font-size: ${fontSize}; line-height: 1.7; margin: 15px 0; text-align: ${align}; ${isItalic} ${isBold}`;
        modalBody.appendChild(p);
      } 
      
      // 2. BLOCCO IMMAGINE (Con stili, allineamento e larghezza personalizzabile)
      else if (block.type === 'image') {
        const container = document.createElement('div');
        let align = block.align || 'center';
        let width = block.width || '100%';
        
        container.style.cssText = `margin: 25px 0; text-align: ${align};`;
        container.innerHTML = `
          <img src="${block.url}" alt="${block.caption || 'Project visual'}" style="width: ${width}; max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); display: inline-block;">
          ${block.caption ? `<p style="font-size: 0.85rem; color: var(--text-dim); margin-top: 8px; font-style: italic; text-align: ${align};">${block.caption}</p>` : ''}
        `;
        modalBody.appendChild(container);
      } 
      
      // 3. BLOCCO GRIGLIA DI IMMAGINI (Per mettere foto affiancate)
      else if (block.type === 'image-grid') {
        const gridDiv = document.createElement('div');
        gridDiv.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0;";
        
        if (block.images && Array.isArray(block.images)) {
          block.images.forEach(imgUrl => {
            const imgBox = document.createElement('div');
            imgBox.innerHTML = `<img src="${imgUrl}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-color); display: block;">`;
            gridDiv.appendChild(imgBox);
          });
        }
        modalBody.appendChild(gridDiv);
      }

      // 4. BLOCCO EMBED WEB (Sketchfab, YouTube, ecc.)
      else if (block.type === 'embed') {
        const embedContainer = document.createElement('div');
        let height = block.height || '500px';
        embedContainer.style.cssText = `width: 100%; height: ${height}; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); background: #000; margin: 25px 0;`;
        embedContainer.innerHTML = `<iframe src="${block.url}" allowfullscreen style="width: 100%; height: 100%; border: none;"></iframe>`;
        modalBody.appendChild(embedContainer);
      }

      // 5. BLOCCO MARMOSET VIEWER (.mview)
      else if (block.type === 'marmoset') {
        const container = document.createElement('div');
        let height = block.height || '500px';
        container.style.cssText = `width: 100%; height: ${height}; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); background: #000; margin: 25px 0; position: relative;`;
        modalBody.appendChild(container);

        setTimeout(() => {
          if (typeof marmoset !== 'undefined') {
            try {
              const width = container.clientWidth > 0 ? container.clientWidth : 800;
              
              // METODO CORRETTO: marmoset.embed (tutto minuscolo, senza 'new')
              marmoset.embed(block.url, {
                width: width,
                height: parseInt(height),
                autoStart: true,
                fullFrame: false,
                pagePreset: false,
                element: container // Inserisce automaticamente il viewer nel box
              });

            } catch (e) {
              console.error("Errore nell'avvio di Marmoset Viewer:", e);
            }
          } else {
            container.innerHTML = `<p style="color: #ff5555; padding: 20px; text-align: center;">Libreria Marmoset non trovata.</p>`;
          }
        }, 300);
      }
    });
  }

  document.getElementById('projectModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function filterProjects(category, event) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderProjects(category);
}

// Inizializza la griglia all'avvio
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});