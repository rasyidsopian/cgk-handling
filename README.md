# CGK Handling PWA v26

V26 updates the report generator without changing `sync-config.js`.

Changes:
- Compact one-page-oriented PDF attendance report layout for normal 5–10 event reports.
- Compact daily incentive table.
- Higher-contrast professional dark-green table headers with subtle alternating rows.
- Safer route rendering in PDF (`CGK - DOH`) to avoid broken arrow glyphs.
- Smaller PDF fonts and tighter spacing to prevent text overlap.
- Safer report modal lifecycle and initial hidden state.
- Report modal uses a dedicated z-index layer and clean focus/lock cleanup.
- Existing realtime sync configuration is preserved unchanged.

Upload the contents of this folder directly to the GitHub Pages repository root.
