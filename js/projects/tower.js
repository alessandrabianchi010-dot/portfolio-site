window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 1,
  title: "Tower",
  category: "env", // SCEGLI FRA  " env, creature, character,  game, B2B, jam " 
  categoryLabel: "Environment Design",
  software: "Maya, Zbrush, Substance Paint",
  coverImage: "media/enviroments/tower/Screenshot 2026-10-14 124317.webp",
  description: "cartoon hand painted environment",
  
  // COSTRUISCI LA PAGINA COME UN PUZZLE:
  contentBlocks: [
    {
    type: "image-grid",
    images: [
      "media/enviroments/tower/Screenshot 2026-10-14 124317.webp",
      "media/enviroments/tower/Screenshot 2026-10-14 124317.webp",
      "media/enviroments/tower/Screenshot 2026-10-14 124317.webp"
    ]
  }

  ]
});