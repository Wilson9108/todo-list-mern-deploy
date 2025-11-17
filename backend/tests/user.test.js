const request = require('supertest')
const app = require('../app')
const {user} = require('../models/userModel')

describe('USER ROUTES',  () => {
    beforeEach(async () => {
        await user.create({ taskName: 'jest', taskDescription: "learning" })
    })

    it('GET /api/user should fetch all tasks',async()=>{
        const res = await request(app).get('/api/user')
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        console.log(res._body)
    })
    afterEach(async ()=>{
        // await user.deleteMany({})
    })
    it('Delete todo list task by id ',async()=>{
        let taskId = ''
        // const res = await request(app).delete('/api/user/delete/task/6910cd4cb8f0c89cbdee296a')
        // expect(res.statusCode).toBe(200)
    })
    test('update todo list task by id ',async()=>{
        // const res = await
        // request(app).put('/api/user/update/task/6910d25fc4826bd65d1e07f9')
        // .send({
        //     taskName:'updated task',
        //     taskDescription:'update description'
        // })
        // expect(res.statusCode).toBe(200)
    })
})

