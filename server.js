const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'mark'},
    {name:'jill'}
]

app.get('/users', function(req,res){
    res.json({
        success:true,
        message: 'successfully got Users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success:true,
        message: 'get one user',
        users: req.params.id
    })
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyThekid";
    const mockPassword="superSecret";
    if(username === mockUsername && password === mockPassword) {
        res.json({
            success:true,
            message:'Password and Username Match!',
            token:"encrypted Token Goes Here"
        })
    }
    else{
        res.json({
            success:false,
            message:"password or Username Does not Match"
        })
    }
})

app.listen(8000,function(){
    console.log("Server is Running")
})