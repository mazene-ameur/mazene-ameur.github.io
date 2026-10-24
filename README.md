# Mazene Ameur, personal website

A static portfolio site: plain HTML, CSS and JavaScript, no build step.
It is hosted for free on GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | Layout, styles and behaviour. You rarely need to touch it. |
| `content.js` | **All the content.** Edit this to add papers, demos, projects. |
| `assets/cv.pdf` | The CV behind every "Download CV" button. Replace it to update. |
| `assets/photo.jpg` | Optional portrait (square, about 600x600). Initials show if missing. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Publish on GitHub Pages (free, about 5 minutes)

1. Sign in to GitHub and create a **new public repository** named exactly
   `YOUR-USERNAME.github.io` (for example `mazeneameur.github.io`).
2. On the new repository page, click **uploading an existing file**, drag in
   everything from this folder (including the `assets` folder and `.nojekyll`),
   then click **Commit changes**.
   - `.nojekyll` is hidden on macOS. Press `Cmd + Shift + .` in Finder to show it.
     The site also works without it.
3. Open **Settings > Pages**. Under *Build and deployment*, choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io`.

Using the command line instead:

```bash
cd site
git init && git add . && git commit -m "Personal website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

## Updating the site

- **New paper**: open `content.js`, copy an entry in `publications`, edit it.
  `type` is `journal`, `conference` or `demo`. `threads` uses the ids from the
  `threads` list (`drift`, `agentic`, `nwdaf`, `compliance`, `drl`).
- **New demo video**: add a `video: "https://www.youtube.com/watch?v=..."` field
  to the demo in `demos`. The first demo with a video becomes the main player.
- **Photo**: add `assets/photo.jpg`.
- You can edit files directly on github.com (pencil icon). The site updates
  within a minute of each commit.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Optional: a custom domain

Buy a domain (for example `mazeneameur.com`, around 10 EUR a year), add it under
**Settings > Pages > Custom domain**, and follow GitHub's DNS instructions.
HTTPS is free.
