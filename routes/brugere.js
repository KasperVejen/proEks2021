const { render } = require('ejs');
const express = require('express');
const bruger = require('../models/bruger');
const router = express.Router();
const Bruger = require('../models/bruger')

//alle brugere//
router.get('/', (req, res) => {
    res.render('brugere/index')
});
//alle brugere//

//Nye bruger//
router.get('/nye',(req, res) => {
    res.render('brugere/nye', { bruger: new Bruger() })
});
//Nye bruger//

//Opret ny bruger//
router.post('/',(req, res) => {
    const bruger = new Bruger({ //hvorfor virker dette ikke?
        name: req.body.name
    })
    bruger.save((err, nyBruger) => {
        if (err){
            res.render('brugere/nye',{
                bruger: bruger,
                fejlMeddelse: 'Fejl i oprettelsen af bruger'
            })
        } else {
            //res.redirect(`brugere/${nyBruger.id}`)
            res.redirect('brugere')
        }
    })
});



module.exports = router ;