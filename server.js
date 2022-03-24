const express=require('express');
const server=express();
const port=process.env.PORT || 3000;
const router=require('./routes/router');

server.set('view engine','ejs');
server.use('/',router);

server.listen(port,(req,res)=>{
    console.log(`at port: ${port}`)
});