const express = require("express");
const app = express();
//token name is -> JWT & mechanism -> cookies
//represent -> collection
const cookieParser = require('cookie-parser');
const cors = require("cors");
//jsonwebtoken
// const jwt = require("jsonwebtoken");//npm install jswonwebtoken
// const secrets = require("./secrets");
//tojen name is -> JWT & mechanism -> cookies
//represent -> collection

const vehicleRoutes = require("./routes/VehicleRoutes");


const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    standardHeaders: true, 
    legacyHeaders: false, 
})

// Apply the rate limiting middleware to API calls only
app.use(cors());
app.use('/api', apiLimiter);

//to add post body data to req.body
app.use(express.json());//getting users body data
//add cookies to req.cookies
app.use(cookieParser());

app.use("/api/v1/vehicle", vehicleRoutes);




// localhost:3000 -> express API
app.listen(process.env.PORT || 3000 ,function() {
    console.log("server started at port 3000");
})


