const express = require("express");
const CrudRouter = require("./Routes/crudRoutes");
const app = express();
const PORT = 3001;
const cors = require('cors');
var bodyParser = require('body-parser')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use("/api/",CrudRouter)

app.use("/*", (req,res)=>{
    
  res.send("Hello there server started");
})



app.listen(PORT,()=>{
    console.log("Server Listening on port ", PORT);
})
