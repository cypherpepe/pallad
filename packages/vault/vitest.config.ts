import { defineConfig } from 'vitest/config' // eslint-disable-line import/no-extraneous-dependencies

export default defineConfig({
  test: {
    environment: 'happy-dom',
    testTimeout: 30000,
    globals: true
  }
})