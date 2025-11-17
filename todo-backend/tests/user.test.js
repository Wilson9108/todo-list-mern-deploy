const request = require('supertest')
const app = require('../app')

describe('USER ROUTES',  () => {

    describe('Todo user api',()=>{
        it('should signup a user', async () => {
            const res = await request(app)
                .post('/api/user/create')
                .send({
                    taskName: 'Test User',
                    taskDescription: 'This is a test user'
                })
            expect(res.statusCode).toBe(201)
        })
       it('fetch all users',async()=>{
        const res = await request(app)
        .get('/api/user')
        console.log("res",res.body)
       })  
    })

})

