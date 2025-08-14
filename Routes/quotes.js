const express = require("express");
const router = express.Router();
const Quote = require('../Models/Quote')

function getBaseRate(age) {
    if (age < 30) return 2.5;
    if (age <= 40) return 3.0;
    if (age <= 50) return 4.0;
    return 5.0;
}
function modalFactor(mode) {
    switch (mode) {
        case "Monthly": return 0.09;
        case "Quarterly": return 0.265;
        case "Half-yearly": return 0.52;
        default: return 1;
    }
}

router.post("/", async (req, res) => {
    try {
        const { name, email, phone, age, sumAssured, policyTerm, paymentMode } = req.body;

        if (!age || !sumAssured || !policyTerm) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const baseRate = getBaseRate(Number(age));
        const annualPremium = (Number(sumAssured) / 1000) * baseRate;
        const modal = modalFactor(paymentMode);
        const modalPremium = +(annualPremium * modal).toFixed(2);

        const quote = new Quote({
            name, email, phone, age, sumAssured, policyTerm, paymentMode,
            calculated: { baseRate, annualPremium: +annualPremium.toFixed(2), modalPremium }
        });

        await quote.save();
        res.status(201).json({ message: "Quote saved", quote });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const quote = await Quote.find().sort({ createdAt: -1 });
        res.json(quote);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;