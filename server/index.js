const express = require('express')
const cors = require('cors')
const signupRoot = require('./signupRouter')
const app = express()
const port = 4000


app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Welcome to backend')

})

app.use('/', signupRoot)



app.listen(port, ()=>{
    console.log(`Port ${port} listening !!!!`)

})
