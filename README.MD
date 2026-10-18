md
````
# 📖 Istruzioni per la cliente (Come aggiornare il sito in autonomia)

Mandale queste brevi istruzioni. Le spiegano esattamente dove mettere le mani per aggiungere o modificare i suoi lavori futuri senza rischiare di rompere il codice.

## Come aggiungere un nuovo progetto

1. **Apri il file `index.html`** con un qualsiasi editor di testo (anche Blocco Note o TextEdit va benissimo).

2. **Scorri verso il basso** fino alla sezione racchiusa tra i tag `<script>` dove trovi la lista:

   ```js
   const projectsData = [
     ...
   ];
````

3. Ogni progetto è racchiuso tra parentesi graffe `{ ... }`. Per aggiungerne uno nuovo, ti basta copiare un blocco esistente e incollarlo in cima o in fondo alla lista, modificando queste parti tra virgolette:

- `title`: il titolo del progetto (es. `"Cyberpunk Street"`).
- `category`: la categoria a cui appartiene. Puoi usare solo una di queste parole chiave:
  - `"env"` (per Environment)
  - `"creature"` (per Creature Design)
  - `"character"` (per Character Design)
  - `"game"` (per Game & UI)
- `categoryLabel`: il sottotitolo o l'etichetta visibile (es. `"Environment & Lighting"`).
- `software`: i programmi utilizzati (es. `"Maya, Substance Painter, UE5"`).
- `coverImage`: il nome o il percorso del file dell'immagine di copertina che appare nella griglia principale (es. `"copertina.jpg"`).
- `description`: la descrizione dettagliata del progetto in inglese.
- `gallery`: la lista di tutte le foto di dettaglio che si apriranno quando qualcuno clicca sul progetto. Inserisci i nomi dei file separati da virgole, come nell'esempio:
  js
  ```
  gallery: ["foto1.jpg", "foto2.jpg"]
  ```

## Come modificare un progetto esistente

1. Apri `index.html`.
2. Cerca il progetto che vuoi modificare all'interno di `projectsData`.
3. Modifica solo i valori dei campi desiderati, senza cambiare i nomi delle proprietà.
4. Salva il file e aggiorna la pagina del sito per verificare le modifiche.

## Come aggiungere le immagini

1. Inserisci le nuove immagini nella cartella utilizzata dal sito.
2. Usa il nome corretto del file, rispettando maiuscole, minuscole ed estensione.
3. Aggiorna il campo `coverImage` per la copertina e `gallery` per le immagini di dettaglio.
4. Verifica che tutti i percorsi siano corretti.

## Attenzione al codice

- Non eliminare le parentesi graffe `{ }` che racchiudono ogni progetto.
- Non eliminare le parentesi quadre `[ ]` che racchiudono la lista dei progetti o della galleria.
- Ogni progetto deve essere separato dal successivo con una virgola.
- Le virgole all'interno dei campi e le virgolette devono essere mantenute correttamente.
- Non modificare il codice al di fuori della sezione `projectsData` se non sai a cosa serve.

## Esempio di un nuovo progetto

js
```
{
  title: "Cyberpunk Street",
  category: "env",
  categoryLabel: "Environment & Lighting",
  software: "Maya, Substance Painter, UE5",
  coverImage: "copertina.jpg",
  description: "A cyberpunk street environment focused on lighting and atmosphere.",
  gallery: ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
}
```

Consiglio: prima di modificare il sito, fai sempre una copia di sicurezza del file `index.html`. In questo modo potrai ripristinare la versione precedente se qualcosa dovesse andare storto.

```

```