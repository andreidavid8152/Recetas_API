/* eslint-env node, jest */
const request = require('supertest');

// Importa la app exportada desde server.js
const app = require('../server');

describe('App básica', () => {
    it('la app existe', () => {
        expect(app).toBeDefined();
    });

    it('responde 404 en rutas inexistentes', async () => {
        await request(app).get('/__nonexistent__').expect(404);
    });

    it('GET /api/recetas lista recetas', async () => {
        const res = await request(app).get('/api/recetas').expect(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
