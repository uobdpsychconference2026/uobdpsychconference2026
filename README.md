# UoBD Psychology Conference 2026 website

Static, dependency-free conference website for GitHub Pages.

## Publish on GitHub Pages
1. Create a new public GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. GitHub will provide the public site URL.

## QR code
Once the final GitHub Pages URL exists, generate the conference QR code from that final URL. Do not generate it from a temporary repository URL.

## Site structure
- `index.html` — home / general information
- `programme.html` — at-a-glance and detailed oral programme
- `abstracts.html` — searchable, clickable abstract collection
- `keynote.html` — keynote profile, abstract and biography
- `venue.html` — directions and practical venue information
- `assets/downloads/UoBD-Psychology-Conference-2026-Abstracts.pdf` — abstract booklet

## Editing
All pages use relative links, so the site works on GitHub Pages project URLs. No build step is required.
