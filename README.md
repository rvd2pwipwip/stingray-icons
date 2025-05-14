# Stingray Icons

A simple, maintainable React icon library using Vite and Storybook. Each icon is available as:
- A React component (for easy use in React projects)
- A pure SVG export (for use outside React)

## 📦 Project Structure

```
stingray-icons/
├── src/
│   ├── assets/svg/           # SVG icon files
│   ├── components/icons/     # React icon components
│   │   ├── icons/            # Individual icon components (e.g., Add.jsx)
│   │   ├── index.js          # Central export for icons (auto-generated)
│   │   └── IconWrapper.jsx   # (Shared logic/styling)
│   ├── stories/IconGallery.stories.jsx  # Storybook gallery
│   └── ...                   # App, main.jsx, etc.
├── .storybook/               # Storybook config
├── package.json
├── vite.config.js
├── scripts/generate-icon-index.js # (Automation script)
└── ...
```

## 🚀 Getting Started

```sh
npm install
npm run dev           # Start Vite dev server
npm run storybook     # Start Storybook for icon gallery
```

## ➕ Adding a New Icon

Follow these steps to add a new icon to the library:

1. **Add SVG(s):**
   - Place your SVG file(s) in `src/assets/svg/` (e.g., `MyIcon.svg`).

2. **Commit the raw SVG(s):**
   - Stage and commit your new SVG file(s):
     ```sh
     git add src/assets/svg/
     git commit -m "feat(icons): add raw SVG(s) for new icon(s)"
     ```
   - This triggers the pre-commit hook, which will:
     - Clean up all SVGs (replace `fill='black'` with `fill='currentColor'`, remove `width`/`height` attributes)
     - Update the icon export index

3. **Generate the React component(s):**
   - Run the automated script to convert all SVGs to React components:
     ```sh
     node scripts/svg-to-react-icons.cjs
     ```
   - This will generate a `.jsx` file for each SVG in `src/components/icons/icons/`, matching the project's conventions (named export, named import for `IconWrapper`, `size` and `color` props, and `{...props}` on the SVG).

4. **Commit the generated React component(s):**
   - Stage and commit the new/updated `.jsx` files:
     ```sh
     git add src/components/icons/icons/
     git commit -m "feat(icons): generate React components for new icon(s)"
     ```

**Note:**
- You do not need to manually run the SVG cleanup scripts; they are run automatically by the pre-commit hook when you commit SVGs.
- After running the conversion script, check the generated files to ensure they match your expectations.

## 🖼️ Using Icons

- **In React:**
  ```jsx
  import { MyIcon } from 'src/components/icons';
  <MyIcon size={32} color="#333" />
  ```
- **As SVG:**
  - Use the raw SVG from `src/assets/svg/` in any non-React project.

## 📚 Storybook Icon Gallery

- Run `npm run storybook` and visit the gallery at [http://localhost:6006](http://localhost:6006)
- All icons are displayed with size and color controls.

## 📦 Publishing to npm

1. Update `package.json` with your desired name, version, and `main`/`module` fields.
2. Remove `private: true` if present.
3. Login to npm:
   ```sh
   npm login
   ```
4. Publish:
   ```sh
   npm publish --access public
   ```

## 🎨 Designer Contribution Guide

- Add new SVGs to `src/assets/svg/`.
- Keep SVGs clean: no inline styles, no extra metadata, use `currentColor` for fills/strokes.
- Developers will convert SVGs to React components for use in the library.
- For bulk additions, coordinate with a developer to automate conversion.

## 🛠️ Automation

- After adding new icon components, always run:
  ```sh
  node scripts/generate-icon-index.js
  ```
- This keeps the icon exports up to date.

---

For questions or contributions, open an issue or PR!
