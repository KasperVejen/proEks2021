const mongoose = require('mongoose');

const vareSkema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    beskrivelse: {
        type: String
    },

    oprettelsesDato: {
        type: Date,
        required: true,
        default: Date.now
    },

    pris: {
        type: Number,
        required: true
    },
    vareBiled: {
        type: String,
        required: true
    },
    bruger: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'bruger'
    },

})

module.exports = mongoose.model('vare', vareSkema);
