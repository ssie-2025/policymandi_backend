const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const testimonialRoutes = require("./Routes/testimonialRoutes");
const quotesRouter = require("./Routes/quotes");
const coverageRoutes = require('./Routes/coverageRoutes');
const maturityRoutes = require('./Routes/maturityRoutes');


require('dotenv').config({ quiet: true });
require('./Models/db')

const PORT = process.env.PORT || 4000;

app.get('/ping' , (req, res) => {
    res.send("pong");
})

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use("/api/testimonials", testimonialRoutes);
app.use('/api/quotes', quotesRouter);
app.use('/api/coverage', coverageRoutes);
app.use('/api/maturity', maturityRoutes);

app.listen(PORT, () => {
    console.log(`Server is listning on ${PORT}`);
})