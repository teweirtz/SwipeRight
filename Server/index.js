const express = require('express')
const app = express()
const port = 8000
const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://teweirtz:Ammo,dawg1@cluster0.tkes3cu.mongodb.net/Cluster0?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.json('Hello World')
})

app.post('/register', (req, res) => {
    res.json('Hello World')
})
app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } finally {
        await client.close()
    }
})
app.listen(port, () => console.log('Server running on port' + port))