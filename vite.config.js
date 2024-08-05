import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs-extra';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MyLibrary',
      fileName: 'main',
      formats: ['es'],
      minify: true,
    },
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
      },
    },
    outDir: 'dist', // Specify the output directory
  },
  plugins: [
    {
      name: 'copy-docs',
      closeBundle: async () => {
        const docsSourceDir = path.resolve(__dirname, 'docs/build');
        const docsDestDir = path.resolve(__dirname, 'dist/docs');

        if (fs.existsSync(docsSourceDir)) {
          await fs.copy(docsSourceDir, docsDestDir);
          console.log('Docusaurus build copied to dist/docs');
        } else {
          console.warn('Docusaurus build not found. Did you run npm run build:docs?');
        }
      },
    },
  ],
});