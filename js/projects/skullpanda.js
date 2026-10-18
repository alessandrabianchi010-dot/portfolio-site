
window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 2,
  title: "Skullpanda 3D Model",
  category: "character",
  categoryLabel: "Character Art & 3D",
  software: "ZBrush, Maya, Marmoset Toolbag",

  coverImage: "media/characters/skull-panda/tbrender.webp",

  description:
    "Detailed character sculpt and real-time presentation using Marmoset Viewer.",

  contentBlocks: [
    {
      type: "text",
      tag: "h3",
      content: "Interactive 3D Preview",
      align: "left"
    },
    {
      type: "marmoset",
      url: "media/characters/skull-panda/marmoset-viewer/skullpanda-marmoset-viewer.mview",
      height: "550px"
    },
    {
      type: "text",
      content:
        "Rotate the model above to examine the textures, materials, and lighting.",
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
