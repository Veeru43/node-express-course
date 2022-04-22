const express = require('express');
const app = express();

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

app.listen(8000,function(){
    console.log("Server is Running")
})