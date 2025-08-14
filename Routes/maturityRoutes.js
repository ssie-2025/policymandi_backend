const express = require("express");
const Maturity = require("../Models/Maturity");
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const { name, principal, rate, years} = req.body;

         const principalNum = Number(principal);
        const rateNum = Number(rate);
        const yearsNum = Number(years);

        if(!name || isNaN(principalNum) || isNaN(rateNum) || isNaN(yearsNum)){
            return res.status(400).json({ error: "Invlid input data "});
        }

        const maturityAmount = principalNum + (principalNum * rateNum * yearsNum)/ 100;

        const newCalc = new Maturity({
            name,
            principal: principalNum,
            rate: rateNum,
            years: yearsNum,
            maturityAmount
        });

        await newCalc.save();
        res.status(201).json(newCalc);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async(req, res) => {
    try {
        const records = await Maturity.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;