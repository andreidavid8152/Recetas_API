/* eslint-env node, jest */
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongo;

beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    mongo = await MongoMemoryServer.create();
    process.env.MONGO_URI = mongo.getUri();
    process.env.PORT = '0';
});

afterEach(async () => {
    if (mongoose.connection.readyState === 1) {
        const collections = await mongoose.connection.db.collections();
        for (const c of collections) await c.deleteMany({});
    }
});

afterAll(async () => {
    try {
        if (mongoose.connection.readyState !== 0) {
            await mongoose.connection.close();
        }
    } catch (_error) {
        console.log(_error)
    }
    if (mongo) {
        await mongo.stop();
    }
});
