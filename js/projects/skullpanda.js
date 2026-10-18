window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 10,
  title: "Skullpanda 3D Model",
  category: "character",
  categoryLabel: "Character Art & 3D",
  software: "ZBrush, Maya, Marmoset Toolbag",
  coverImage: "media/SkullPanda/tbrender_003.webp", // Sostituisci con la tua immagine di copertina
  description: "Detailed character sculpt and real-time presentation using Marmoset Viewer.",
  
  // COSTRUISCI LA PAGINA COME UN PUZZLE:
  contentBlocks: [
    {
      type: "text",
      tag: "h3",
      content: "Interactive 3D Preview (Marmoset Viewer)",
      align: "left"
    },
    {
      type: "marmoset",
      url: "media/SkullPanda/tbexport.mview",
      height: "550px"
    },
    {
      type: "text",
      content: "Rotate the model above to examine the textures, materials, and lighting setup directly in real-time.",
      align: "center",
      italic: true
    },
    {
      type: "text",
      tag: "h3",
      content: "Texture & Material Breakdown",
      align: "left"
    },
    {
      type: "image-grid",
      images: [
        "media/SkullPanda/tbrender_003.webp",
        "media/SkullPanda/tbrender_004.webp"
      ]
    }
  ]
});