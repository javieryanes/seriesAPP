import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/*.spec.ts'],   // dónde buscar tests
    exclude: ['dist', 'build', 'node_modules', 'coverage'], // carpetas que se ignoran
    globals: true, // opcional: permite usar describe/test sin importar
  },
});
