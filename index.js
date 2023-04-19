const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const catacory = require('./data/catacory.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('heelow world')
})

app.get('/catacory',(req,res)=>{
    res.send(catacory)
})
app.listen(port,()=>{
    console.log(`daragon is a projceet ${port}`)
})