# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

<<<<<<< Updated upstream
Currently, two official plugins are available:
=======
> [!IMPORTANT]
> EN DESARROLLO

Este es un paquete creado con la intención de ser lo más fácil de modificar mediate props.

> [!CAUTION]
> Este paquete esta basado en react js y tailwindcss si no son utilizados estas tecnologías
>>>>>>> Stashed changes

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<<<<<<< Updated upstream
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:
=======
```bash
    git clone "https://github.com/nasa14119/remix-icon-picker.git"
```
>>>>>>> Stashed changes

```js
// eslint.config.js
import react from 'eslint-plugin-react'

<<<<<<< Updated upstream
export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
=======
> [!WARNING]
> Esta guía es para utilizarlo con bun, si se gusta utilizar otro run time se debe correr manualmente el archivo en /src/package/lib/update_search_file.js de forma manual.
> node /src/package/lib/update_search_file.js # Ejemplo

```bash
    bun run update-serch
>>>>>>> Stashed changes
```
