const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
    },
    message:{
        type: String,
        required: true,
    },
}, 
{ timestamps: true});

module.exports = mongoose.model("Testimonial", testimonialSchema);