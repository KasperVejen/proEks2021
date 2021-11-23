const express = require('express');
const router = express.Router();
const VarerDB = require('../models/vare')

//alle varer//
router.get('/', async (req, res) => {
    res.send('alle varer')
});
//alle varer//


//Nye varer//
router.get('/nye',(req, res) => {
    res.send('nye varer')
});
//Nye varer//


//Opret ny vare//
router.post('/', async (req, res) => {
   res.send('opret vare')
});
//Opret ny vare//


module.exports = router ;