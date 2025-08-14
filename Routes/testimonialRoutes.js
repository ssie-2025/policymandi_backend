const express = require("express");
const router = express.Router();

const Testimonial = require("../Models/Testimonial");
    

router.get("/", async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add new testimonial
router.post("/", async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        await newTestimonial.save();
        res.status(201).json(newTestimonial);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
module.exports = router;