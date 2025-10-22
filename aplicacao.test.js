const request = require('supertest');
const app = require('./aplicacao'); //importa o aplicacao.js

describe('Testando as API´s de operações matemáticas', () => {

    test('Verificar a soma de dois números', async() => {
        const response = await request (app).get('/adicao?n1=2&n2=5');
        expect(response.text).toBe('Resultado: 7');
    });

    test('Verificar a subtração de dois números', async() => {
        const response = await request (app).get('/subtracao?n1=5&n2=2');
        expect(response.text).toBe('Resultado: 3');
    });

    test('Verificar a divisão de dois números', async() => {
        const response = await request (app).get('/divisao?n1=10&n2=5');
        expect(response.text).toBe('Resultado: 2');
    });

    test('Verificar a multiplicação de dois números', async() => {
        const response = await request (app).get('/multiplicacao?n1=2&n2=5');
        expect(response.text).toBe('Resultado: 10');
    });


});