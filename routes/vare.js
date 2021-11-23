const express = require('express');
const router = express.Router();
const VareDB = require('../models/vare')

//alle vare//
router.get('/', async (req, res) => {
    res.send('alle vare')
});
//alle vare//


//Nye vare//
router.get('/nye',(req, res) => {
    res.send('nye vare')
});
//Nye vare//


//Opret ny vare//
router.post('/', async (req, res) => {
   res.send('opret vare')
});
//Opret ny vare//


module.exports = router ;