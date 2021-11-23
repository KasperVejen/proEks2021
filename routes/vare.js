const express = require('express');
const router = express.Router();
const VareDB = require('../models/vare')

//alle vare//
router.get('/', async (req, res) => {
    
});
//alle vare//


//Nye vare//
router.get('/nye',(req, res) => {

});
//Nye vare//


//Opret ny vare//
router.post('/', async (req, res) => {
   
});
//Opret ny vare//


module.exports = router ;