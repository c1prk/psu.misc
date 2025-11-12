## Quick orientation for AI coding agents

This repository contains a small React + Vite frontend located in `frontend/`.
Provide focused, actionable edits only — this is a single-page app powered by Vite and React.

### Architecture & File Organization

**Project structure:**
- Entry: `frontend/src/main.jsx` (renders `<App />` in `#root` using `createRoot` wrapped with `<BrowserRouter>` and `<ShopContextProvider>`)
- Root component: `frontend/src/App.jsx` (routes container + layout grid)
- Pages: `frontend/src/pages/` (Home, Products, About, Contact, Product, Cart, PlaceOrder, Orders)
- Components: `frontend/src/components/` (Navbar, Hero, Footer, LatestProducts, Title — reusable UI)
- State: `frontend/src/context/ShopContext.jsx` (products array, currency, delivery_fee; no external API)
- Assets: `frontend/src/assets/assets.js` (product data, image/icon URLs)
- Styles: `frontend/src/index.css` (Tailwind CSS v4 global styles)

**Key principle:** Separate concerns — components for UI, pages for routes, context for state, assets for data.

### Build & dev workflow

From the `frontend/` folder:
```bash
cd frontend
npm install
npm run dev      # Vite dev server with HMR
npm run build    # produces dist/ (validated with this codebase)
npm run lint     # ESLint (all passing)
npm run preview
```

### Conventions & Patterns to Follow

**React & Fast Refresh**
- React 19 with Hooks (`useState`, `useContext`)
- ESM imports/exports only (`import`/`export`)
- **Critical:** Export only components from component files; non-component values (functions, constants, contexts) break fast refresh
- If exporting a context from a component file, add `// eslint-disable-next-line react-refresh/only-export-components` above it
- Always use default exports for components: `export default MyComponent`

**Routing with react-router-dom v7**
- Router setup in `main.jsx` (wraps entire app with `<BrowserRouter>`)
- Routes defined in `App.jsx` using `<Routes>` and `<Route>` components
- Page components in `frontend/src/pages/` are simple functional components that render route content
- Use `<NavLink>` in Navbar for active-state styling; use `<Link>` elsewhere
- Dynamic route example: `<Route path="/product/:productID" element={<Product />} />` (access param with `useParams()`)

**State Management (ShopContext)**
```jsx
// In any component:
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const MyComponent = () => {
  const { products, currency, delivery_fee } = useContext(ShopContext);
  // products: [{ _id, name, description, price, image }, ...]
  // currency: '$'
  // delivery_fee: 10
};
```
- Context wraps app in `main.jsx` (not in App.jsx) via `<ShopContextProvider>`
- Products are static; no backend API

**Styling (Tailwind CSS v4 + dark theme)**
- Dark backgrounds: `bg-gradient-to-b from-slate-950 to-indigo-950`
- Text: `text-white`, `text-slate-300` (secondary), `text-blue-400` (accents)
- Glass-morphism cards: `.bg-slate-900/50 .backdrop-blur-xl .border .border-white/10 .shadow-lg`
- Hover effects: `hover:shadow-xl hover:border-white/20 transition-all duration-300`
- Responsive: `hidden sm:flex` (hide on mobile, show on small+), `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` (grid scaling)

**Assets & Product Data**
- All images/icons live in `frontend/src/assets/assets.js` (export { assets, products })
- Product structure: `{ _id: number, name: string, description: string, price: number, image: string (URL) }`
- Images can be from `public/` folder or external URLs (placeholders used in this codebase)
- Never hardcode product data in components; always pull from context

**ESLint Rules**
- Unused variables → error (unless matching `^[A-Z_]` like `React`, `_unused`)
- Fast-refresh compliance → error if non-components exported from component files
- Config: `frontend/eslint.config.js` — modify only if instructed

### Common Tasks & Examples

**Add a new page:**
1. Create `frontend/src/pages/MyNewPage.jsx`
2. Export as: `export default function MyNewPage() { return (...) }`
3. Add route in `App.jsx`: `<Route path="/mypage" element={<MyNewPage />} />`
4. (Optional) Add NavLink in Navbar.jsx if user-facing

**Create a reusable component:**
1. Create `frontend/src/components/MyComponent.jsx`
2. Use hooks as needed (`useState`, `useContext`)
3. Export as default: `export default MyComponent`
4. Import in App.jsx, pages, or other components

**Access product data:**
```jsx
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ productId }) => {
  const { products, currency } = useContext(ShopContext);
  const product = products.find(p => p._id === productId);
  
  return (
    <div className="rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-semibold">{product.name}</h3>
        <p className="text-blue-400 font-bold">{currency}{product.price}</p>
      </div>
    </div>
  );
};
```

### Critical Files & Their Purposes

| File | Purpose |
|------|---------|
| `frontend/src/main.jsx` | App entry; sets up BrowserRouter + ShopContextProvider |
| `frontend/src/App.jsx` | Route definitions + main layout grid/styling |
| `frontend/src/context/ShopContext.jsx` | Global state (products, currency, delivery_fee) |
| `frontend/src/assets/assets.js` | Product data + asset URLs (static) |
| `frontend/vite.config.js` | Vite build config + Tailwind plugin |
| `frontend/eslint.config.js` | Lint rules |
| `frontend/package.json` | Dependencies, scripts |

### Testing & Validation

- No test framework installed; rely on linting + local build validation
- **Before committing:**
  1. Run `npm run lint` → must pass with 0 errors
  2. Run `npm run build` → must succeed without warnings
- React StrictMode is enabled in main.jsx (helps catch issues in development)

### Pitfalls to Avoid

❌ **Don't:**
- Export non-component values from component files (breaks fast refresh)
- Import images directly in components; use URLs from `assets.js`
- Use `<BrowserRouter>` in App.jsx; it's already in main.jsx
- Forget `useContext` import when accessing ShopContext
- Leave old code when refactoring large files; clean it up completely
- Hardcode product data; always pull from context

✅ **Do:**
- Keep component files focused on JSX + hooks
- Separate data (assets.js), state (context), and UI (components/pages)
- Use default exports for components
- Test locally with `npm run lint` and `npm run build` before pushing
- Use Tailwind classes for styling; avoid inline styles

---

**Updated:** November 12, 2025 | **Status:** ✅ All linting passing, build valid
