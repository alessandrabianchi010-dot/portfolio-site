window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 1,
  title: "Ancient Abandoned Temple",
  category: "env",
  categoryLabel: "Environment Design",
  software: "Maya, Unreal Engine 5.6, Ultra Dynamic Sky",
  coverImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800",
  description: "A personal project developing a realistic beauty corner within an abandoned temple setting. Focused on water shader materials blending with terrain, volumetric fog catching light rays, blockout in Maya, camera positioning, and lighting in Unreal Engine 5.6.",
  mviewFile: "media/SkullPanda/tbexport.mview", // Percorso al file .mview se presente
  renderContent: function() {
    return `
      <div class="project-layout-temple">
        <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200" alt="Temple Render">
        
        <h3>Water Shader Breakdown</h3>
        <p>The water material blends seamlessly with the terrain texture while producing strong light reflections and volumetric fog effects.</p>
        
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200" alt="Lighting Breakdown">
        
        <h3>Interactive 3D Model</h3>
        <div id="marmoset-viewer-box" style="width: 100%; height: 500px; background: #000; border-radius: 8px;"></div>
      </div>
    `;
  }
});