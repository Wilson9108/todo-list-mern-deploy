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

})

