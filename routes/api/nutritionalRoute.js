const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const propertyArr=[];

router.get('/nutritional', (req, res) => {
    const url = 'https://api.sampleapis.com/recipes/recipes';
    fetch(url).then(res => res.json()).then(data => {
        data.forEach(item => {
            let nutArr = {
                calories: item.calories,
                fat:item.fat,
                cholesterol:item.cholesterol,
                sodium:item.sodium,
                sugar:item.sugar,
                carbohydrate:item.carbohydrate,
                fiber:item.fiber,
                protein:item.protein
            }
            propertyArr.push(nutArr)
            item.propertyArr=propertyArr;
        })
            res.render('pages/nutritional', {
                title: 'Recipes',
                name: 'All Recipes',
                propertyArr,
                data
            })
    })
});

module.exports = router;