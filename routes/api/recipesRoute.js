const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/recipes',(req,res)=>{
    const url='https://api.sampleapis.com/recipes/recipes';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/recipes',{
            title:'Recipes',
            name:'All Recipes',
            data
        })
    })
});

module.exports=router;