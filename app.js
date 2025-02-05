const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose= require("mongoose");
const userRoute = require("./Routes/user-router");
require('dotenv').config();


var cors = require("cors");

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('App is Running')
})


 
async function connectDB() {
  await mongoose.connect("mongodb+srv://shahzaib:shahzaib03@users.j1oc6.mongodb.net/UserDb", 
    {dbName:"UserDb",});
}

app.use(userRoute)
connectDB().catch((err)=>console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})