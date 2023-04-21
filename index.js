const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const catacory = require('./data/catacory.json')
const news = require('./data/news.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('heelow world')
})

app.get('/catacory',(req,res)=>{
    res.send(catacory)
})

app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const selected = news.find(n => n._id === id)
    res.send(selected)
})

app.get('/catacory/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    if(id === 0){
        res.send(news)
    }
    else {
        const catacoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(catacoryNews)
    }
})
app.listen(port,()=>{
    console.log(`daragon is a projceet ${port}`)
})