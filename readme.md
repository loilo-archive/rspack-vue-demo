# Rspack Vue Demo

This is a demo of [Rspack](https://rspack.dev) bundling a Vue project using [vue-loader](https://vue-loader.vuejs.org/), a forked version of and [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import) ([fork](https://github.com/loilo/unplugin-auto-import)) and [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) ([fork](https://github.com/loilo/unplugin-vue-components)).

## Setup

1. Clone this repository (with the `--recursive` flag to get the forked dependencies which are included as submodules in the `plugins/` folder).

   ```sh
   git clone --recursive https://github.com/loilo/rspack-vue-demo.git
   ```

2. Install dependencies with [pnpm](https://pnpm.io/). This will also install forked versions of the auto import/Vue components plugin directly from the local submodules.

   ```sh
   pnpm install
   ```

3. Verify that the project is working as expected (i.e. displaying a barebones incrementable counter) by running the dev server:

   ```sh
   pnpm run serve
   ```

   Alternatively, test by building the project...

   ```sh
   pnpm run build
   ```

   ...and serving the created `dist` folder:

   ```sh
   pnpm run preview
   ```
