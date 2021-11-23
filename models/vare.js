const mongoose = require('mongoose');

const brugerSkema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('bruger', brugerSkema);
