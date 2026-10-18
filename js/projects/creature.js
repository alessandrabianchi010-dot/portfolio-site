window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 2,
  title: "Omen Creature Design",
  category: "creature",
  categoryLabel: "Creature Design",
  software: "ZBrush, Maya, Substance Painter",
  coverImage: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800",
  description: "An original creature designed as a harbinger of a far greater danger.",
  
  // COSTRUISCI LA PAGINA COME UN PUZZLE:
  contentBlocks: [
    {
      type: "text",
      tag: "h3", // Diventa un titoletto di sezione
      content: "1. Real-Time 3D Preview",
      align: "left"
    },
    {
      type: "embed",
      url: "https://sketchfab.com/models/embed",
      height: "450px"
    },
    {
      type: "text",
      content: "This creature is meant to represent the omen of a far greater danger. It is <i>not</i> a towering monster, but slightly bigger than a human.",
      italic: true,
      align: "center"
    },
    {
      type: "text",
      tag: "h3",
      content: "2. Anatomy & Bone Structure Studies",
      align: "left"
    },
    {
      type: "image-grid", // Mette due immagini affiancate in automatico
      images: [
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=600",
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600"
      ]
    },
    {
      type: "text",
      content: "Selection of bones from <b>three different animals</b> and study of their shapes.",
      bold: true
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200",
      width: "80%0", // Immagine centrata e non a pieno schermo
      align: "center",
      caption: "Final sculpt details and feather texturing breakdown."
    }
  ]
});