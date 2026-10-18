Ecco la guida definitiva, completa e dettagliata in formato Markdown (`README.md`). Questo manuale spiega passo dopo passo come gestire l'intero portfolio, aggiungere nuovi progetti, modificare quelli esistenti e personalizzare ogni singolo blocco senza dover scrivere codice HTML avanzato.

---

# 📖 Manuale d'Uso: Gestione e Aggiornamento del Portfolio 3D

**Artista:** Alessandra Bianchi (Concept & 3D Artist)

**Sistema:** Architettura Modulare a Blocchi (Puzzle SPA)

Benvenuta nella guida ufficiale del tuo portfolio. Questo sito è stato progettato per permetterti di **aggiungere, rimuovere o modificare qualsiasi progetto in totale autonomia**, senza rischiare di rompere la grafica e senza bisogno di conoscere l'HTML.

---

## 📁 1. Dove si trovano i file del sito?

Prima di iniziare, ecco una panoramica di come è organizzato il tuo computer:

```text
/Portfolio-Ale/
├── index.html                  # Pagina principale (Menu, Hero, About, Contatti)
├── style.css                   # Stili grafici e cinematografici del sito
├── README.md                   # Questo manuale d'uso
├── js/
│   ├── main.js                 # Il motore del sito (NON va modificato)
│   └── projects/               # 📂 Cartella dei tuoi progetti (QUI AGISCI!)
│       ├── temple.js           # File del progetto Temple
│       ├── creature.js         # File del progetto Creature Design
│       └── skullpanda.js       # File del progetto Skullpanda
└── media/
    ├── me/
    │   └── profile.jpg         # La tua foto per la sezione "About Me"
    └── SkullPanda/
        ├── tbrender_003.webp   # Immagini e render
        ├── tbexport.mview      # File 3D interattivo Marmoset
        └── viewer.html         # Anteprima HTML di Marmoset

```

---

## 🚀 2. Come aggiungere un Nuovo Progetto da zero

Per aggiungere un nuovo lavoro:

1. **Crea una cartella per i file multimediali:** Entra nella cartella `media/` e crea una nuova cartella con il nome del progetto (es. `media/nome-progetto/`). Al suo interno inserisci la foto di copertina e le immagini di dettaglio.
2. **Crea il file JavaScript del progetto:** Entra nella cartella `js/projects/`, crea un nuovo file di testo e chiamalo con il nome del progetto in minuscolo (es. `nome-progetto.js`).
3. **Collega il file al sito:** Apri il file **`index.html`** con un editor di testo, scorri fino in fondo (subito prima di `main.js`) e aggiungi la riga per richiamare il tuo nuovo file:
```html
<script src="js/projects/nome-progetto.js"></script>

```


4. Salva tutto. Il progetto apparirà automaticamente nella griglia principale del sito!

---

## 🧩 3. Come scrivere il file di un Progetto (Il Sistema a Puzzle)

Ogni file dentro `js/projects/` (come `nome-progetto.js`) segue una struttura fissa divisa in due parti: le **informazioni generali** della scheda e la lista dei **blocchi di contenuto (`contentBlocks`)** che formano la pagina di dettaglio quando un utente clicca sul progetto.

Copia e incolla questo modello di base per ogni nuovo progetto:

```javascript
window.projectsData = window.projectsData || [];

window.projectsData.push({
  id: 11, // Un numero unico che non si ripete (es. 10, 11, 12, 13...)
  title: "nome-progetto Street Environment",
  category: "env", // Vedi sotto le categorie ammesse
  categoryLabel: "Environment & Lighting", // L'etichetta visibile sulla card
  software: "Maya, Substance Painter, Unreal Engine 5",
  coverImage: "media/nome-progetto/cover.jpg", // Immagine visibile nella griglia principale
  description: "A detailed nome-progetto street environment focused on moody lighting and storytelling.",
  
  // LA PAGINA DI DETTAGLIO (COSTRUISCI IL TUO PUZZLE QUI SOTTO):
  contentBlocks: [
    {
      type: "text",
      tag: "h3",
      content: "Overview & Concept",
      align: "left"
    },
    {
      type: "text",
      content: "This project explores advanced hard-surface modeling and modular asset creation for games.",
      align: "left"
    }
  ]
});

```

### 🏷️ Categorie ammesse per il filtro della griglia:

Nella proprietà `category` puoi inserire **solo una** di queste parole chiave esatte:

* `"env"` → Per Environment Design
* `"creature"` → Per Creature Design
* `"character"` → Per Character Design
* `"game"` → Per Game & UI

---

## 🧱 4. Tutti i Tipi di Blocchi Disponibili (`contentBlocks`)

Puoi inserire tutti i blocchi che vuoi dentro `contentBlocks`, mescolandoli e ordinandoli liberamente. Ecco la guida dettagliata per ciascuno:

### A. Blocco Testo (`type: "text"`)

Per inserire paragrafi descrittivi, introduzioni o titoletti di sezione.

* **Opzioni personalizzabili:**
* `tag`: `"p"` (paragrafo normale) oppure `"h3"` (titolo di sezione grande).
* `content`: Il testo. Puoi usare tag HTML di formattazione come `<b>grassetto</b>`, `<i>corsivo</i>` o `<strong>evidenziato</strong>`.
* `align`: Allineamento (`"left"`, `"center"`, `"right"`).
* `size`: Dimensione (`"normal"`, `"large"`, `"small"`).
* `italic`: `true` o `false` (mette tutto il blocco in corsivo).
* `bold`: `true` o `false` (mette tutto il blocco in grassetto).


* **Esempio:**
```javascript
{
  type: "text",
  tag: "h3",
  content: "Lighting & Shading Breakdown",
  align: "left"
},
{
  type: "text",
  content: "The materials were created in <b>Substance Painter</b> using custom smart masks.",
  align: "left",
  size: "normal"
}

```



---

### B. Blocco Immagine Singola (`type: "image"`)

Per mostrare render in primo piano, concept art o schermate di sculpting.

* **Opzioni personalizzabili:**
* `url`: Percorso del file immagine.
* `caption`: Didascalia opzionale in corsivo sotto l'immagine.
* `width`: Larghezza del render (es. `"100%"` per schermo intero, `"80%"` o `"70%"` per rimpicciolirlo).
* `align`: Allineamento nel riquadro (`"center"`, `"left"`, `"right"`).


* **Esempio:**
```javascript
{
  type: "image",
  url: "media/nome-progetto/render_01.jpg",
  caption: "Final composite render rendered in real-time.",
  width: "90%",
  align: "center"
}

```



---

### C. Blocco Griglia di Immagini (`type: "image-grid"`)

Per affiancare automaticamente 2 o più immagini in una griglia pulita ed elegante.

* **Esempio:**
```javascript
{
  type: "image-grid",
  images: [
    "media/nome-progetto/wireframe_01.jpg",
    "media/nome-progetto/texture_02.jpg",
    "media/nome-progetto/clay_03.jpg"
  ]
}

```



---

### D. Blocco Visore 3D Marmoset (`type: "embed"` con viewer.html)

Per inserire un modello 3D interattivo in tempo reale esportato da Marmoset Toolbag (`.mview`).

* **Come fare:** Metti il file `.mview` e il file `viewer.html` nella cartella del progetto, quindi inserisci questo blocco:
```javascript
{
  type: "embed",
  url: "media/nome-progetto/viewer.html",
  height: "550px"
}

```



---

### E. Blocco Sketchfab / YouTube (`type: "embed"`)

Per incorporare modelli da Sketchfab o video dimostrativi da YouTube.

* **Esempio:**
```javascript
{
  type: "embed",
  url: "https://sketchfab.com/models/IL_TUO_LINK_QUI/embed",
  height: "500px"
}

```



---

## ✏️ 5. Come modificare un Progetto Esistente

Se vuoi correggere una descrizione, cambiare un'immagine di copertina o aggiungere un nuovo paragrafo a un progetto già fatto:

1. Apri il file corrispondente nella cartella `js/projects/` (es. `skullpanda.js`).
2. Modifica direttamente i testi o i percorsi delle immagini tra virgolette.
3. Se vuoi aggiungere un nuovo blocco, basta scriverlo dentro `contentBlocks: [ ... ]` separandolo dal precedente con una virgola (`,`).
4. Salva il file e ricarica la pagina del sito.

---

## 👤 6. Come modificare "About Me" e i Contatti

Se desideri aggiornare la tua biografia, la tua laurea in scenografia, le tue skill software, la tua foto profilo o i link social:

1. Apri il file principale **`index.html`** con un editor di testo.
2. Scorri fino alla sezione desiderata:
* **Sezione About:** Cerca `<section class="section" id="about">`. Qui puoi cambiare il testo della biografia e sostituire l'immagine in `media/me/profile.jpg`.
* **Sezione Contatti / Footer:** Cerca `<section class="section" id="contact">` o i tag `<footer>`. Qui puoi aggiornare il tuo indirizzo email (`alessandrabianchi010@gmail.com`), il link al profilo LinkedIn e il link al CV in PDF (`Alessandra_Bianchi_Resume.pdf`).


3. Salva il file `index.html`.

---

## 🐍 7. Installazione di Python (Per il Test Locale)

Per far girare correttamente il sito sul tuo computer (e permettere ai modelli 3D interattivi di Marmoset di caricarsi senza blocchi di sicurezza del browser), utilizzeremo il server integrato di Python.

Se non hai ancora Python installato sul computer, segui questi passaggi rapidi:

### 🪟 Su Windows:

1. Vai sul sito ufficiale: **[python.org/downloads](https://www.python.org/downloads/)**
2. Clicca sul grande pulsante giallo **Download Python** (scaricherà l'ultima versione stabile).
3. Apri il file scaricato per avviare l'installazione.
4. **⚠️ PASSAGGIO FONDAMENTALE:** Nella prima schermata dell'installazione, spunta assolutamente la casella in basso che dice **"Add python.exe to PATH"** (Aggiungi Python a PATH). Senza questa spunta, i comandi da terminale non funzioneranno.
5. Clicca su **Install Now** e attendi il completamento.

---

## 💻 8. Come testare il sito in locale (con Python)

Per visualizzare il sito sul tuo computer prima di pubblicarlo online (indispensabile per far funzionare correttamente i file 3D interattivi ed evitare blocchi di sicurezza del browser):

1. Apri il terminale (o il Prompt dei comandi su Windows) e posizionati nella cartella principale del portfolio.
2. Avvia il server locale digitando il comando:
```bash
python -m http.server

```


3. Apri il tuo browser (Chrome, Firefox, Edge) e vai all'indirizzo:
👉 **`http://localhost:8000`**
4. Per spegnere il server quando hai finito, torna sul terminale e premi la combinazione di tasti **`Ctrl + C`**.

---

## 💡 Regole d'oro per evitare errori

* **Le virgolette (`"` o `'`):** Ogni testo o percorso di file deve essere sempre chiuso tra virgolette.
* **Le virgole (`,`):** Ogni blocco all'interno di `contentBlocks` e ogni proprietà del progetto deve essere separata dalla successiva tramite una virgola. L'ultimo elemento della lista non ha la virgola.
* **Le parentesi `{ }` e `[ ]`:** Non cancellare mai le parentesi graffe o quadre che strutturano i file JavaScript. Fai sempre una copia di sicurezza prima di modifiche importanti!