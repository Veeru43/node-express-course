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

app.listen(8000,function(){
    console.log("Server is Running")
})