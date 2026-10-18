window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 1,
  title: "Ancient Abandoned Temple",
  category: "env",
  categoryLabel: "Environment Design",
  software: "Maya, Unreal Engine 5.6, Ultra Dynamic Sky",
  coverImage: "media/enviroments/temple/HighresScreenshot00000 copia.webp",
  description: "A personal project developing a realistic beauty corner within an abandoned temple setting, focusing on water shaders, volumetric fog, and lighting in Unreal Engine 5.6.",
  
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
      type: "image",
      url: "media/enviroments/temple/HighresScreenshot00000 copia.webp",
      caption: "Final beauty shot showcasing the temple atmosphere and lighting composition.",
      width: "100%",
      align: "center"
    },
    {
      type: "text",
      tag: "h3",
      content: "Water Shader & Volumetric Atmosphere",
      align: "left"
    },
    {
      type: "text",
      content: "For the water material, I aimed to create a realistic shader that would blend seamlessly with the terrain texture while producing strong light reflections. By incorporating custom volumetric fog, I achieved the effect of gentle mist rising from the pond and catching the incoming rays of light.",
      align: "left"
    },
    {
      type: "image",
      url: "media/enviroments/temple/water.webp",
      caption: "Close-up view focusing on water shader blending and light scattering.",
      width: "90%",
      align: "center"
    },
    {
      type: "text",
      tag: "h3",
      content: "Technical Breakdown & Visualizations",
      align: "left"
    },
    {
      type: "text",
      content: "Analysis of light complexity and world normal maps to ensure optimal game performance.",
      align: "left",
      italic: true
    },
    {
      type: "image-grid",
      images: [
        "media/enviroments/temple/HighresScreenshot00008.webp",
        "media/enviroments/temple/HighresScreenshot00009.webp"
      ]
    }
  ]
});