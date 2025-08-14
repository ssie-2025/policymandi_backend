const mongoose = require('mongoose');

const MaturitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    principal:{
        type: Number, 
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    years:{
        type: Number,
        required: true,
    },
    maturityAmount: {
        type: Number,
        required: true,
    },
}, { timestamps: true});

module.exports = mongoose.model("Maturity", MaturitySchema);