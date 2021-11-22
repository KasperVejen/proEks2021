const express = require('express');
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
router.post('/', async (req, res) => {
    const bruger = new Bruger({ //hvorfor virker dette ikke?
        name: req.body.name
    })
    try{
        const nyBruger = await bruger.save()
        //res.redirect(`brugere/${nyBruger.id}`)
        res.redirect('brugere')

    } catch{
        res.render('brugere/nye',{
            bruger: bruger,
            errorMessage: 'Fejl i oprettelsen af bruger'
        })
    }
});



module.exports = router ;