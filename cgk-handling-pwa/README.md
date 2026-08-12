# CGK Handling · Hamdan Tour — PWA

Static HTML/CSS/JS app, ready for HTTPS hosting and iPhone Home Screen installation.

## Fastest hosting: GitHub Pages

1. Create a GitHub repository, for example `cgk-handling`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then **Save**.
6. Wait for deployment. GitHub Pages will provide a URL like:
   `https://USERNAME.github.io/cgk-handling/`

GitHub Pages hosts static HTML/CSS/JavaScript directly from a repository.

## Install on iPhone

1. Open the published URL in **Safari**.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Name it **CGK Handling**.
5. Tap **Add**.

The included manifest, Apple meta tags, icon, and service worker make it behave like a lightweight PWA. HTTPS is required for service-worker functionality on normal hosted sites.

## Important

This app contains operational travel data. GitHub Pages sites are public on the internet, so do not publish sensitive passenger information, credentials, or private documents in the repository.
