const express = require('express')
const port = 8000
const { MongoClient } = require('mongodb')
const { v4:uuid4 } = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const uri = 'mongodb+srv://teweirtz:Ammo,dawg1@cluster0.tkes3cu.mongodb.net/Cluster0?retryWrites=true&w=majority'
const bcrypt = require('bcrypt')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json('Hello World')
})

app.post('/register', async (req, res) => {
    const client = new MongoClient(uri)
    console.log(req.body)
    const { email, password } = req.body
    const generateduserId = uuid4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({email})

        if (existingUser) {
            return res.status(409).send('user already exists')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generateduserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        }
        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 *24,
        })
        res.status(201).json({token})
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
})

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    const {email, password} = req.body

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const user = await users.findOne({email})

        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({token, userId: user.user_id})
        }

        res.status(400).json('Invalid Credentials')

    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
})

app.put('/addmatch', async (req, res) => {
    const client = new MongoClient(uri)
    const {userId, matchedUserId} = req.body

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const query = {user_id: userId}
        const updateDocument = {
            $push: {matches: {user_id: matchedUserId}}
        }
        const user = await users.updateOne(query, updateDocument)
        res.send(user)
    } finally {
        await client.close()
    }
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