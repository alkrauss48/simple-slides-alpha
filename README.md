# Simple Slides

[Simple Slides](https://simpleslides.dev) is a small Vue app built with Vite and
TypeScript that allows for simple and content-friendly rendering of presentation
slides via Markdown.

Simple Slides follows the [Takahashi Method]() of presenting slides, which
focuses on:

* Prioritizing text-content
* Low amount of content per slide
* Many slides, and changing through slides quickly

## To Install
```sh
npm install
```

## To Run
```sh
npm run dev # Navigate to http://localhost:5173

# Alternatively, you can run with Docker, but that will generate
# a release build without hot reloading or volume binding,
# which is not ideal for developing.

docker compose up
```

## To Run the Tests
```sh
npm test

# Alternatively, for test coverage, run:
npm run test-coverage
```

## To Compile with Typescript
```sh
# I mostly use this for linting

npx vue-tsc
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
