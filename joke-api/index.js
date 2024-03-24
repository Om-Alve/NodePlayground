const express = require('express');
const jokes = require('./jokes.json')
const app = express();


app.get('/joke',(req,res)=>{
    const index = Math.floor((Math.random() * jokes.length ));
    res.json(jokes[index]); 
})

app.get('/joke/:type',(req,res)=>{
    const relatedjokes = jokes.filter((element)=>element.type===req.params.type);
    const index = Math.floor((Math.random() * (relatedjokes.length)));
    res.json(relatedjokes[index]); 
})


app.listen(8000,()=>console.log(`Server has started on port 8000.`))