const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Blog =require("./routes/blogroutes")
const express1 = require('express');
const app = express1();

app.use(express1.json());
app.use(cors());
app.use(express1.urlencoded({extended:true}));
app.use("/api",Blog);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB Connection Error:",err))

// app.get("/", (req, res) => {
//     res.send("Welcome to the Blog API");
//   });

  
app.listen(3000,() => {
    console.log("Server is Running on port 3000")
});