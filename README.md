# react-template

> A template for dashboards made with React

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Usage

1. Create a new react project using vite

   ```bash
   yarn create vite
   ```

   Select **React** > **TypeScript + SWC**

2. Replace `src` folder with this template

3. Install dependencies

   ```bash
   yarn install
   yarn add antd react-intl react-query react-router-dom
   yarn add --dev @types/node
   ```

4. Create path alias _(optional)_

   - In `tsconfig.json`, add this under `compilerOptions`

   ```json
   "baseUrl": ".",
   "paths": {
     "@/*": ["src/*"]
   }
   ```

   - In `vite.config.ts`

   ```ts
   import path from "path";
   ```

   Add this after `plugins`

   ```ts
   resolve: {
     alias: [
       {
         find: "@",
         replacement: path.resolve(__dirname, "src"),
       },
     ],
   },
   ```

   > Replace `@` with your own alias name

5. Start dev server

   ```bash
   yarn dev
   ```

## Development

### Best Practices

1. Types

   - Use `type` over `interface`.
   - Check [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) for avoiding crowded types.

2. Hooks

   - Do not use `function` keywork, use [_function expressions_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
   - A function a hook only if you use a predefined [react hook](https://react.dev/reference/react) in it.

   ```typescript
   const useHook = () => {
     return useMemo(() => ({}), []);
   };
   ```

3. React

   1. Functions

      - Inside a functional component do not define _function_ or _function expressions_
      - If you need to define function use [`useCallback`](https://react.dev/reference/react/useCallback) hook.
      - Otherwise, it will be rendered constantly (ie. will be created 3 times in a second, huge performance lost)

   2. Variables

      - If you have a heavy calculation use [`useMemo`](https://react.dev/reference/react/useMemo) hook.
      - Otherwise, it will be re-calculated in each render.

### UI Components

> Check Button component for an example

### Import Names

> Do not use plural names for folder, project and import names.
