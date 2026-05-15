# AGENTS.md

## Cursor Cloud specific instructions

### Project overview
W-Wave is a static HTML/CSS/JS landing page for a Russian-language internet radio station. There is no build step, no package manager, and no backend.

### Running the dev server
Serve the site from the repo root with any static HTTP server:
```
python3 -m http.server 8080
```
Then open `http://localhost:8080/` in a browser.

### Linting
Run HTML validation with:
```
htmlhint index.html
```

### Key details
- The only external JS dependency is `JustValidate`, loaded from `unpkg.com` CDN at runtime. Internet access is required for form validation to work.
- Custom fonts are in `fonts/` (Muller family, `.woff`/`.woff2`). The CSS `@font-face` rules reference `../fonts/` relative to `css/`.
- No automated test suite exists; manual browser testing is the primary verification method.
- Responsive breakpoints: 320px, 576px, 768px, 1024px (defined in `css/media.css`).
