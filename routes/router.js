const express=require('express');
const router=express.Router();

router.use(express.static('public'));

const recipesRoute=require('./api/recipesRoute');
const nutritionalRoute=require('./api/nutritionalRoute');
const singleRoute=require('./api/singleRoute');

router.get('/recipes',recipesRoute);
router.get('/nutritional',nutritionalRoute);
router.get('/recipes/:id',singleRoute);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Recipe Home Page',
        name:'Recipe Home page'
    })
});


module.exports=router;