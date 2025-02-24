const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");


const user = require ('./router/userRoute');
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);



// console.log('Environment Variables:', process.env);
// console.log('MongoDB URL:', process.env.MONGODB_URL);

app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.json({ message: "Iam in test root" }));

app.use('/',user)


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
  });
});
