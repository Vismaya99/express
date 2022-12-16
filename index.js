const express=require('express');
const app=new express();
const data=require('./dataset.json');
app.use(express.json());
const fs=require('fs');
app.get('/hospital',(req,res)=>{
    res.send(data);
})
app.post('/hospital',(req,res)=>{
    data.push(req.body);
    fs.writeFile('dataset.json',JSON.stringify(data),(err,resp)=>{
        if(err){
           res.send('data cannot be written');
        }
        else{
            res.send ("data written successfully");
        }
    })
})

app.listen(6666);
