## Quick orientation for AI coding agents

This repository contains a small React + Vite frontend located in `frontend/`.
Provide focused, actionable edits only — this is a single-page app powered by Vite and React.

Key facts (use these to make changes and suggest fixes):

- Entry / app shape
  - App entry: `frontend/src/main.jsx` (renders `App` in `#root` using `createRoot`).
  - Root component: `frontend/src/App.jsx` (simple functional component; expand here for routing or features).
  - Global styles: `frontend/src/index.css`.

- Build & dev workflow
  - Install and run from the `frontend` folder:

    ```bash
    cd frontend
    npm install
    npm run dev    # starts Vite dev server with HMR
    npm run build  # produces `dist/`
    npm run preview
    npm run lint
    ```

- Tooling & conventions
  - Uses Vite (`frontend/vite.config.js`) with `@vitejs/plugin-react` — prefer ESM imports.
  - `package.json` sets `"type": "module"` so use ESM syntax (import/export) throughout JS/JSX files.
  - ESLint config is in `frontend/eslint.config.js`. Respect its rule: unused vars are an error unless they match `^[A-Z_]`.
  - Project is JS/JSX (not TypeScript), though type packages are present — do not convert files to TS without instruction.

- Dependencies & integration points
  - React 19, React Router (`react-router-dom`), and `react-toastify` are installed; look for routing and toast patterns when adding features.
  - Static assets: `frontend/public/` is served at `/` by Vite; import source assets from `frontend/src/assets/` when bundling is needed.
  - No backend code is present in this workspace; if a backend integration is required, document HTTP endpoints and expected payloads in PRs.

- Common patterns to follow
  - Keep components as default-exported functional components (the current code uses this pattern in `App.jsx`).
  - Use `StrictMode` as the root wrapper (`main.jsx`).
  - For routing, add route definitions inside `App.jsx` or create `frontend/src/routes/` and import from `App.jsx`.

- Tests & CI
  - There are no tests or CI configs in the repo. Avoid adding heavy CI changes unless asked. Prefer small, local validations (lint, build).

Examples (how to make minimal, safe edits)

- To add a new page: create `frontend/src/pages/MyPage.jsx`, export a default component, and wire it into `App.jsx` via `react-router-dom` `Route`/`Routes`.
- To add a toast notification: import and use `react-toastify` and add the `<ToastContainer />` near `App` root.

When to ask for clarification

- If a change touches cross-cutting concerns (build scripts, package.json, or adding TypeScript), ask before changing—they affect the whole frontend.
- If you need a backend contract (endpoints/payloads), request the API spec — none is present here.

Files to reference when editing

- `frontend/src/main.jsx`, `frontend/src/App.jsx`, `frontend/index.html`
- `frontend/package.json`, `frontend/vite.config.js`, `frontend/eslint.config.js`

If anything here is unclear or you need examples for specific edits (routing, toasts, asset imports, or adding tests), tell me which change you want and I will update this guidance or implement the change.
