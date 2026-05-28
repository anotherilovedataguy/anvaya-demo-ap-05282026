# Anvaya OS — Your AI Universe

A polished, mobile-friendly frontend prototype for Anvaya — a personal AI operating system where users manage AI agents, memories, lineage maps, knowledge wikis, and realm energy.

## Pages

| Page | Description |
|------|-------------|
| **Home** | Dashboard with active agents, realm energy, upcoming events, evolution suggestions, and recent activity |
| **Orakai** | Premium master agent chat with routing transparency and energy savings panels |
| **Agents** | Full agent roster with roles, origins, traits, wiki links, and status |
| **Universe** | Visual lineage map showing origins, agents, splits, merges, and dormant entities |
| **Evolutions** | Merge, split, archive, and evolution recommendation cards |
| **Wikis** | Searchable user-managed knowledge base with approval workflow |
| **Energy** | Realm energy balance, weekly usage chart, event log, and efficiency stats |
| **Settings** | Toggles for memory, compilation, energy saver, dormancy, export, and deletion |

## Running Locally

```bash
python3 -m http.server 5173
```

Then open: http://localhost:5173

No build step, no dependencies, no package manager required.

## Deployment

This app is designed for GitHub Pages. Push `index.html`, `styles.css`, and `app.js` to the `main` branch and enable GitHub Pages from repository settings (root directory).

Live at: https://anotherilovedataguy.github.io/anvaya-demo-ap-05282026/

## Technical Notes

- Plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools
- Hash-based SPA routing (`#home`, `#orakai`, `#agents`, etc.)
- Fully responsive: desktop sidebar + mobile bottom navigation + drawer
- iPhone-safe with `env(safe-area-inset-bottom)` padding
- All data is mocked in `app.js` — ready to be replaced by API calls

## Future Backend Integration

This frontend will eventually connect to:

- Anvaya backend API (GraphQL or REST)
- Searchable wiki service
- Memory and knowledge graph service
- Energy ledger
- Agent orchestration layer
- Claude API (agent responses)
- MCP connectors for tool integrations

Mock data in `app.js` mirrors the shape of future API responses to ease the migration.
