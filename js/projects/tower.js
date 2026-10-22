window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 4,
  title: "Tower",
  category: "env",
  categoryLabel: "Environment Design",
  software: "Maya, Zbrush, Substance Paint",
  coverImage: "media/enviroments/tower/Screenshot 2026-10-14 124317.png",
  description: "cartoon hand painted environment",
  
  // COSTRUISCI LA PAGINA COME UN PUZZLE:
  contentBlocks: [
    {
      type: "text",
      tag: "h3",
      content: "Project Overview",
      align: "left"
    },
    {
      type: "text",
      content: "For this personal project, I developed a small beauty corner within a realistic setting, focusing on water shader development and lighting using <b>Ultra Dynamic Sky</b> in Unreal Engine 5.6. I started by researching references to select the architecture for the scene, followed by a blockout in Maya and initial camera/lighting tests in UE5.",
      align: "left"
    },
    {
    type: "image-grid",
    images: [
      "media/enviroments/tower/Screenshot 2026-10-14 124317.png",
      "media/enviroments/tower/Screenshot 2026-10-14 124317.png",
      "media/enviroments/tower/Screenshot 2026-10-14 124317.png"
    ]
  }

  ]
});