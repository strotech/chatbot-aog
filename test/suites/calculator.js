const app=require('src/app')
const supertest = require('supertest')
const request = supertest(app)

const addRequest=require('test/resources/calculator/request/addition.json')
const subtractionRequest=require('test/resources/calculator/request/subtraction.json')

const addResponse=require('test/resources/calculator/response/addition.json')
const subtractionResponse=require('test/resources/calculator/response/subtraction.json')


describe("Calculator chat API", () => {
    test('Gets the server endpoint', async done => {
        const res = await request.get('/')
        expect(res.status).toBe(200)
        expect(res.text).toBe('Server is up and running')
        done()
    })
    test('Post addition request',async done =>{
        const res = await request.post('/calculator')
            .send(addRequest)
        expect(res.status).toBe(200)
        expect(res.body).toEqual(addResponse)
        done()
    })
    test('Post subtraction request',async done =>{
        const res = await request.post('/calculator')
            .send(subtractionRequest)
        expect(res.status).toBe(200)
        expect(res.body).toEqual(subtractionResponse)
        done()
    })

    describe("Demo test block", () => {
        const x=1
        expect(x).toBe(1)
    })
});



