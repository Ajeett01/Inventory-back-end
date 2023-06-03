const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoute = require("./routes/productsRoutes")
const path = require("path")

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes Middleware 
app.use("/api/products", productRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Routes
app.get('/',(req,res)=>{
    res.send("Home Page");
});

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));