CGK Handling V41 — Upload Guide

Upload the CONTENTS of this ZIP directly to the root of the GitHub Pages repository.
Required root files include:
- index.html
- style.css
- luxury-v41.css
- manifest.webmanifest
- sync-config.js
- sw.js
- brand-mark.png
- brand-logo.png
- brand-icon.png
- apple-touch-icon.png
- icon-180.png
- icon-192.png
- icon-512.png

Important:
- sync-config.js is unchanged from V40.
- Code-CGK-V40.gs / database sync logic is unchanged.
- The redesign is visual-only plus navigation shortcuts mapped to existing controls.
- If iPhone still shows the old icon, remove the old Home Screen shortcut and add it again after deployment because iOS caches touch icons aggressively.
