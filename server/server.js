const express = require("express");
const cors = require("cors");
const app = express();


const campingRoutes = require("./routes/camping");
const morgan = require("morgan");
// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
// Method GET, POST, PUT, DELETE, PATCH


app.use('/api', campingRoutes);
// app.get("/", (req, res) => {
//   // code body
//   res.json({ message: "Hello World" });
//   // res.send("Hello World");
// });





// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));