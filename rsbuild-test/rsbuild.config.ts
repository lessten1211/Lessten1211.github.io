import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './src/index.html',
    // title: '123'
  },
  source:{
    entry: {
      index: './src/123.tsx',
    }
  }
});
