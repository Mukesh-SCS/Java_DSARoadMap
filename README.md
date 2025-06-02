
---

## Prerequisites

1. **A modern browser** (Chrome, Firefox, Edge, Safari)  
2. **Visual Studio Code** (or any code editor)  
3. (Optional, but recommended) the **“Live Server”** extension for VS Code

---

## Installation & Usage

1. **Clone or download** this repository into a folder (e.g. `/DSA-Roadmap/`).  
2. **Add the two image files**:
   - Place a banner image named exactly `roadmap-banner.png`.  
   - Place a VS Code Live Server screenshot named exactly `vscode-live-server.png`.  
   If you don’t have your own images yet, you can use any PNG placeholders and name them accordingly.

3. **Open the folder in VS Code**:
   1. Launch VS Code.  
   2. Go to **File → Open Folder…**, select `/DSA-Roadmap/`, and click **Open**.  

4. **Install “Live Server”** (if you haven’t already):
   1. In VS Code, press `Ctrl+Shift+X` (or `Cmd+Shift+X` on macOS) to open the Extensions pane.  
   2. Search for **Live Server** (by Ritwick Dey) and click **Install**.  

5. **Open `index.html` with Live Server**:
   1. In the Explorer sidebar, right-click `index.html`.  
   2. Choose **“Open with Live Server”**.  
   3. A new browser tab will open at `http://127.0.0.1:5500/index.html` (or a similar local address).  
   4. Each time you save changes in VS Code, the page will auto-reload.  

6. **(Alternative)** If you don’t want to use Live Server, simply double-click `index.html` in your file manager. When you make edits, switch to the browser and press “Refresh”.

---

## How It Works

- **`index.html`** lays out 20 “roadmap boxes,” one for each major DSA topic (Java Basics, OOP, Arrays, etc.).  
  - Each topic header has an emoji for visual cue (e.g., “📦” for Arrays).  
  - Under each header, a list of subtopics appears.  
  - Each subtopic is a single checkbox with a `data-definition="…"`. That attribute contains a short, plain-English definition.

- **`styles.css`** controls all colors, fonts, spacing, and hover/animation effects:
  - A **light green/yellow** palette for headers, borders, and definition banners.  
  - Subtle **hover lift** effect on each box.  
  - A **pop-in animation** whenever a definition box appears.  
  - Scrollbars, code blocks, responsive tweaks—all handled here.

- **`script.js`** binds an event listener to every checkbox:
  1. When you ▶ check a subtopic box, it unchecks any sibling box in that same section (so only one example can appear at a time).  
  2. It then reads:
     - the subtopic’s `data-definition` text (shown in a colored banner), and  
     - a prewritten Java code snippet from a `javaExamples` object keyed by that checkbox’s `id`.  
  3. It inserts both the definition banner and a `<pre>`‐formatted code snippet into the `<div class="example-box">` below the list.  
  4. If you uncheck it, the definition box hides again.

In this way, each checkbox click lets the user:
1. Read a clear, beginner-friendly definition.  
2. See a short, easy Java code snippet illustrating the concept.

---

## Topics & Sample Subtopic

1. **Java Basics 📝**  
   - Syntax & Variables  
   - Data Types  
   - Loops & Conditionals  
   - Methods & Scope  

2. **Object-Oriented Programming 🏷️**  
   - Classes & Objects  
   - Inheritance  
   - Polymorphism  
   - Abstraction & Interfaces  

3. **Arrays 📦**  
   - Declaration & Initialization  
   - Iteration & Updates  
   - Sorting Techniques  
   - Two Pointer Method  

⋯ up through “20. Backtracking” 🔙.

---

## Customizing

- **Change colors**: edit `styles.css` (e.g., switch the green/yellow palette to your own brand).  
- **Modify or add examples**: open `script.js` and adjust the string under the corresponding `javaExamples["checkbox-id"]`.  
- **Add more topics**: copy one `.roadmap-box` block in `index.html`, give it a new `id`, add checkbox `id`s, and supply snippets in `javaExamples`.

---

## License & Attribution

Feel free to use or modify this for your own learning or teaching. There is no license file—consider it public domain or adapt as you see fit.  

If you find this helpful, you’re welcome to give a shout-out, but attribution is not required.  

---

That’s it! Open `index.html`, start clicking through the checkboxes, and enjoy an interactive, visual guide to core DSA concepts in Java. If you run into any issues, double-check that:

1. All five files are in the same folder.  
2. The image filenames match exactly (`roadmap-banner.png`, `vscode-live-server.png`).  
3. You opened the folder (not just a single file) in VS Code before launching Live Server.  

Happy learning! 🚀
