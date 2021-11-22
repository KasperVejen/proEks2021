const { render } = require('ejs');
const express = require('express');
const router = express.Router();

//alle brugere//
router.get('/', (req, res)=>{
    res.render('brugere/index')
});
//alle brugere//

//Nye bruger//
router.get('/ny',(req, res) =>{
    res.render('brugere/new')
});
//Nye bruger//

//Opret ny bruger//
router.post('/',(req, res)=>{
    res.send('Create')
})



module.exports = router 