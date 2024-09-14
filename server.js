const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Welcome To Blood Bank App"
    })
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Node Server IS Runnning");
});
