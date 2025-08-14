const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    age: {
        type: Number, 
        required: true
    },
    sumAssured: {
        type: Number,
        require: true,
    },
    policyTerm: {
        type: Number,
        required: true,
    },
    paymentMode: {
        type: String,
        enum: [
            "Yearly",
            "Half-yearly",
            "Quaterly",
            "Monthly"
        ],
        default: "Yearly",
    },
    calculated: {
        annualPremium: Number,
        modalPremium: Number,
        baseRate: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Quote", quoteSchema);