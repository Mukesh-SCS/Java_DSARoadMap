# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] – 2025-06-02
### Added
- **Separation of concerns**: moved all CSS into `styles.css` and all JavaScript into `script.js`.  
- **Interactive behavior**: clicking a checkbox now shows a pop-in definition banner and an easy Java code snippet for that subtopic.  
- **Visual enhancements**:
  - Light green/yellow color palette for headers, borders, and definition panels.
  - Emoji icons next to each topic title (e.g., 📝 for Java Basics, 📦 for Arrays, 🔄 for Recursion).
  - Hover “lift” effect on each roadmap box to signal interactivity.
  - Pop-in animation (scale + fade) for the `.definition` banner.
- **Responsive styling**: adjusts max-height on content areas for narrow screens.
- **Code snippets**: a `javaExamples` object in `script.js` provides beginner-friendly examples for every subtopic ID.
- **Placeholder images**: references to `roadmap-banner.png` and `vscode-live-server.png` to make header and instructions visually informative.

### Changed
- **HTML structure**:
  - Renamed `dsa-roadmap.html` to `index.html`.
  - Removed inline `<style>` and `<script>` contents, replacing them with external `styles.css` and `script.js`.
  - Added emojis to each `<h3>` title.
  - Simplified example box markup to only include a single `<div class="example-box">` per section.
- **Instructions block**:
  - Condensed and reformatted into a clearer, step-by-step guide in `index.html`.
  - Added a caption under the Live Server screenshot for clarity (“Click ‘Go Live’ at VS Code’s bottom-right.”).
- **Styling**:
  - Updated header background from blue to light green (`#43a047`).
  - Revised scrollbars, font sizes, and color gradients for improved readability.
  - Moved all example and definition animations to `styles.css`.

### Removed
- All inline CSS rules that were previously embedded in `<style>` tags within the HTML.
- All inline JS that manipulated the DOM, moved into `script.js`.

---

## [1.0.0] – 2025-06-01
### Added
- **Single-file implementation**: initial version of `dsa-roadmap.html` containing:
  - Twenty “roadmap boxes,” each covering a DSA topic (Java Basics, OOP, Arrays, etc.).
  - Checkboxes to mark each subtopic; clicking displayed a definition and Java snippet inline.
  - Inline `<style>` definitions for grid layout, box styling, and custom checkbox design.
  - Inline `<script>` with a `javaExamples` object and event listeners for checkbox clicks.
  - Two `<img>` placeholders: `roadmap-banner.png` (banner at the top) and `vscode-live-server.png` (screenshot of VS Code Live Server button).
- **Visual design**: 
  - Blue headers (`#2196F3`), white content areas, custom round checkboxes, scrollbars for long lists.
  - Example boxes inserted under each section upon checkbox selection.
- **Java code examples**: simple, beginner-friendly code snippets for each subtopic (syntax, recursion, sorting algorithms, etc.) stored in a JS object.

### Changed
- n/a (initial release)

### Removed
- n/a (initial release)
