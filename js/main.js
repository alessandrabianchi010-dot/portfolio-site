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
  document.getElementById('modalSoftware').innerText =
    "Software: " + project.software;
  document.getElementById('modalDescription').innerText =
    project.description;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = '';

  if (project.contentBlocks && Array.isArray(project.contentBlocks)) {
    project.contentBlocks.forEach(block => {

      // 1. TESTO
      if (block.type === 'text') {
        const p = document.createElement(block.tag || 'p');
        p.innerHTML = block.content;

        const align = block.align || 'left';
        const isItalic = block.italic ? 'font-style: italic;' : '';
        const isBold = block.bold ? 'font-weight: bold;' : '';
        const fontSize =
          block.size === 'large' ? '1.25rem' :
          block.size === 'small' ? '0.9rem' : '1rem';

        p.style.cssText =
          `color: var(--text-dim); font-size: ${fontSize};
          line-height: 1.7; margin: 15px 0; text-align: ${align};
          ${isItalic} ${isBold}`;

        modalBody.appendChild(p);
      }

      // 2. IMMAGINE
      else if (block.type === 'image') {
        const container = document.createElement('div');
        const align = block.align || 'center';
        const width = block.width || '100%';

        container.style.cssText = `margin: 25px 0; text-align: ${align};`;
        container.innerHTML = `
          <img src="${block.url}"
               alt="${block.caption || 'Project visual'}"
               style="width:${width};max-width:100%;border-radius:8px;">
          ${block.caption ? `<p>${block.caption}</p>` : ''}
        `;

        modalBody.appendChild(container);
      }

      // 3. GRIGLIA IMMAGINI
      else if (block.type === 'image-grid') {
        const gridDiv = document.createElement('div');

        gridDiv.style.cssText =
          'display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:25px 0;';

        if (Array.isArray(block.images)) {
          block.images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = 'Project detail';
            img.style.cssText =
              'width:100%;height:260px;object-fit:cover;border-radius:8px;';

            gridDiv.appendChild(img);
          });
        }

        modalBody.appendChild(gridDiv);
      }

      // 4. EMBED HTML / IFRAME
      else if (block.type === 'embed') {
        const container = document.createElement('div');
        const height = block.height || '500px';

        container.style.cssText =
          `width:100%;height:${height};overflow:hidden;background:#000;margin:25px 0;`;

        const iframe = document.createElement('iframe');
        iframe.src = block.url;
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'width:100%;height:100%;border:0;';

        container.appendChild(iframe);
        modalBody.appendChild(container);
      }

      // 5. MARMOSET VIEWER
      else if (block.type === 'marmoset') {
        const container = document.createElement('div');
        const height = parseInt(block.height, 10) || 550;

        container.style.cssText = `
          width: 100%;
          height: ${height}px;
          overflow: hidden;
          background: #000;
          margin: 25px 0;
          position: relative;
        `;

        modalBody.appendChild(container);

        requestAnimationFrame(() => {
          if (typeof marmoset === 'undefined') {
            container.innerHTML =
              '<p style="color:white;padding:20px;">Marmoset Viewer non caricato.</p>';
            return;
          }

          try {
            // Inizializza il viewer dopo aver aperto la modale.
            // Il percorso deve essere relativo a index.html.
            const viewer = marmoset.embed(block.url, {
              width: container.clientWidth || 800,
              height: height,
              autoStart: true,
              fullFrame: false,
              pagePreset: false
            });

            // Alcune versioni restituiscono domRoot.
            // Non tutte le versioni espongono questa proprietà.
            if (viewer && viewer.domRoot) {
              container.appendChild(viewer.domRoot);
              viewer.domRoot.style.width = '100%';
              viewer.domRoot.style.height = '100%';
            }
          } catch (error) {
            console.error('Errore Marmoset:', error);
            container.innerHTML =
              '<p style="color:white;padding:20px;">Errore nel caricamento del modello 3D.</p>';
          }
        });
      }

    }); // Fine forEach
  } // Fine contentBlocks

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