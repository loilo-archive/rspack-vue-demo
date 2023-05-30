# Rspack Vue Demo

This is a demo of [Rspack](https://rspack.dev) bundling a Vue project using [vue-loader](https://vue-loader.vuejs.org/),[unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import) and [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components).

## Setup

1. Clone this repository (with the `--recursive` flag to get the forked dependencies which are included as submodules in the `plugins/` folder).

   ```sh
   git clone --recursive https://github.com/loilo/rspack-vue-demo.git
   ```

2. Install dependencies:

   ```sh
   npm ci
   ```

3. Verify that the project is working as expected (i.e. displaying a barebones incrementable counter) by running the dev server:

   ```sh
   npm run serve
   ```

   Alternatively, test by building the project...

   ```sh
   npm run build
   ```

   ...and serving the created `dist` folder:

   ```sh
   npm run preview
   ```
