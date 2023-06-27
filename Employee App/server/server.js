const bodyParser = require('body-parser')
const express = require('express')
const RegRouter = require('./src/router/RegRouter')
const multer = require("multer")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
    next();
  });

app.use('/register',RegRouter)

app.listen(8080,()=>{
    console.log("server started at http://localhost:8080");
})
