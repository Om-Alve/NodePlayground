const express = require('express');
const jokes = require('./jokes.json')
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended:false}));

app.get('/joke',(req,res)=>{
    const index = Math.floor((Math.random() * jokes.length ));
    res.json(jokes[index]); 
})

app.get('/joke/:type',(req,res)=>{
    const relatedjokes = jokes.filter((element)=>element.type===req.params.type);
    const index = Math.floor((Math.random() * (relatedjokes.length)));
    res.json(relatedjokes[index]); 
})

app.post('/addjoke',(req,res)=>{
    const data = req.body;
    const newJoke = {id:jokes.length + 1,...data};
    jokes.push(newJoke);
    fs.writeFile('./jokes.json',JSON.stringify(jokes),()=>{
        try{
            res.json({'status':'successful','id':`${jokes.length.toString()}`});
        }
        catch(error){
            res.json({'error':error});
        }
    })
})

app.listen(8000,()=>console.log(`Server has started on port 8000.`))