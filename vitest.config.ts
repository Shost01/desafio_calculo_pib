import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // Ativa o uso de `vi` e outros globais
        environment: 'jsdom',
    },
});
