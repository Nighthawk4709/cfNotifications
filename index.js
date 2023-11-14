const express = require("express");
const {connectMongoDB} = require("./connections/connectDB");

const app = express();

const PORT = 8000;

const url = "mongodb://127.0.0.1:27017/codeforcesContests";
connectMongoDB(url).then(() => {console.log("MongoDB connected")}).catch((err) => {"MongoDB not connected", err});

app.use(express.urlencoded({extended: false}));

const apiRouter = require("./routers/cfAPIs");
app.use("/cfAPIs", apiRouter);

app.listen(PORT , () =>{
    console.log(`Server Started on PORT: ${PORT}`);
});