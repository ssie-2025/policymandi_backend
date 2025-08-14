const mongoose = require('mongoose')

const coverageSchema = new mongoose.Schema({
    name: String,
    age: Number,
    income: Number,
    liabilities: Number,
    existingCoverage: Number,
    coverageYears: Number,
    recommandedCoverage: Number,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Coverage', coverageSchema);