const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const bruger = require('../models/bruger')

//alle brugere//
router.get('/', (req, res)=>{
    res.render('brugere/index')
});
//alle brugere//

//Nye bruger//
router.get('/nye',(req, res) =>{
    res.render('brugere/nye', {bruger: new bruger() })
});
//Nye bruger//

//Opret ny bruger//
router.post('/',(req, res)=>{
    res.send('Create')
});



module.exports = router ;