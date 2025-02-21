const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const { readdirSync } = require('fs');
const handleErrors = require("./middlewares/error");
require('dotenv').config()
const { clerkMiddleware } = require('@clerk/express');
// const { createCamping } = require("./controllers/camping");
// const campRoutes = require('./routes/camping')
// const profileRoute = require('./routes/profile')

// Middleware
app.use(cors());
app.use(express.json({limit: "10mb"}))
// กูจะบ้าแก้ตั้งนานลืมกดเรียกใช้แค่นี้
app.use(morgan('dev'))
app.use(clerkMiddleware())
// Method GET, POST, PUT, DELETE, PATCH
// console.log(process.env);
// app.use('/api', campRoutes)
// app.use('/api', profileRoute)

console.log(readdirSync('./routes'))
// loop
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

app.use(handleErrors)

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));