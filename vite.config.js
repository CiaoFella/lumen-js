import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MyLibrary',
      fileName: 'main',
      formats: ['es'],
      minify: true
    },
    rollupOptions: {
      output: {
        entryFileNames: 'main.js'
      }
    }
  }
});