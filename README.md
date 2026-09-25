# FaultMind Free Starter

This is a self-contained static prototype of **FaultMind — Think Like a Troubleshooter**.

Included:
- Landing page
- Technician dashboard
- FM-ELEC-001: Motor Won't Start
- FM-ELEC-002: Contactor Chattering / Motor Fails to Start Reliably
- Natural-language keyword command box
- Fixed scenario truth
- LOTO gating for de-energized tests
- Diagnostic history
- Free-text diagnosis / evidence / repair / verification
- Local rules-based scoring
- Debrief and diagnostic-path feedback
- Browser localStorage for completed-run stats

## Run locally
Open `index.html` in a browser.

## Free hosting options
### GitHub Pages
1. Create a free GitHub account/repository.
2. Upload `index.html`, `style.css`, and `app.js`.
3. In repository Settings > Pages, deploy from the main branch/root.
4. GitHub will give you a public URL.

### Netlify Drop
1. Go to Netlify Drop.
2. Drag the whole folder onto the page.
3. Netlify hosts it and gives you a temporary/public URL.

### Cloudflare Pages
Create a Pages project and upload this folder or connect a GitHub repository.

## Important
This is still a prototype. It intentionally uses local/static scenario data and no external AI API. That makes the technical truth deterministic and avoids hallucinated measurements.
