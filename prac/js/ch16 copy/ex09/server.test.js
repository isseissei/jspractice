import request from 'supertest';
import app from './server.js';

describe('Expressテスト', () => {
    it('正常系: test/mirrorのとき', async () => {
        const response = await request(app)
            .get('/test/mirror')

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('text/plain');
    });

    it('正常系: ファイルを見つける', async () => {
        const response = await request(app)
            .get('/test.txt'); 

        expect(response.status).toBe(200);
    });

    it('異常系: ファイルが存在しない', async () => {
        const response = await request(app)
            .get('/あああああ.txt');

        expect(response.status).toBe(404);
    });
});
