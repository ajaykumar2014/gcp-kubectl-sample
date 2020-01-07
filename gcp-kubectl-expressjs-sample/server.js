const express = require("express")

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Welcome to NodeJS Application")
    res.status(200).json("Welcome to nodejs application");
})
app.get('/test',(req,res)=>{
	res.send('OK');
});

app.listen(8080,()=>"Server is up and running..");
