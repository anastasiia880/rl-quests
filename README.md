# rl-quests

A Vue 3 single-page app scaffolded with Vite and TypeScript.

## Requirements

- Node.js `^22.18.0 || >=24.12.0`
- pnpm

## Setup

```sh
pnpm install
```

## Development

```sh
pnpm dev          # start the dev server at http://localhost:3000
pnpm build        # type-check and build for production into dist/
pnpm preview      # preview the production build locally
pnpm type-check   # run vue-tsc without emitting output
```

## Testing

```sh
pnpm test:unit    # unit tests with Vitest
pnpm test:e2e:dev # end-to-end tests with Cypress against the dev server
```

For end-to-end tests against a production build (as in CI):

```sh
pnpm build
pnpm test:e2e
```

## Linting and formatting

```sh
pnpm lint         # ESLint with --fix
pnpm format       # Prettier over src/
```

## Project structure

```
src/
├── App.vue                  # root component
├── main.ts                  # app entry; installs Pinia and the router
├── components/
│   └── HelloVue.vue         # greeting component, accepts an optional `msg` prop
├── router/index.ts          # Vue Router instance (no routes defined yet)
├── stores/counter.ts        # example Pinia store
└── __tests__/App.spec.ts    # unit test for App.vue
```

Editor settings are shared via `.editorconfig`; install the EditorConfig extension for VS Code (see `.vscode/extensions.json` for recommended extensions).
