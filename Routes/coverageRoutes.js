const express = require('express');
const router = express.Router();
const Coverage = require('../Models/Coverage');


router.post('/', async (req, res) => {
  try {
    const { name, email, income, liabilities, multiplier, coverageAmount } = req.body;
    const data = new Coverage({ name, email, income, liabilities, multiplier, coverageAmount });
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
    try {
        const records = await Coverage.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({error: "Server Error"});
    }
});

module.exports = router;