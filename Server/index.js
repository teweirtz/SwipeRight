const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.json('Hello World')
})
app.listen(PORT, () => console.log('Server running on port' + port))