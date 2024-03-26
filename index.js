
const express = require("express");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connection");
const loginRoute = require("./Routes/Login");

var cors = require('cors')

const app = express();
const PORT = 3001;
app.use(cors({
    origin: 'http://localhost:3000'
}));

// connectToMongoDB("mongodb://localhost:27017/shortURL")
//     .then(() => console.log("MongoBD Connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use("/auth", loginRoute);
app.use("/", ()=>{
    res.send("Hello");
});




app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));