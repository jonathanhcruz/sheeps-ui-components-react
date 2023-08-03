import path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import sass from 'sass'


export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, '/src/index.ts'),
      name: 'My Component',
      fileName: (format) => `sheep-ui-components.${format}.ts`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      lines: 80,
      functions: 80,
      statements: 80,
      branches: 80,
      exclude: ['**/node_modules/**']
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})