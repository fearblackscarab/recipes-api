const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.get('/recipes/:id', (req, res) => {
    const id=req.params.id;
    const url = `https://api.sampleapis.com/recipes/recipes/${id}`;
    fetch(url).then(res => res.json()).then(data => {
        res.render('pages/single', {
            title: `${data.title}`,
            name: `${data.title}`,
            data
        })
    })
})

module.exports=router;