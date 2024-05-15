const express = require("express");
const CrudRouter = require("./Routes/crudRoutes");
const app = express();
const PORT = 3001;

app.use("/api/",CrudRouter)

app.use("/*", (req,res)=>{
    
  res.send("Hello there server started");
})



app.listen(PORT,()=>{
    console.log("Server Listening on port ", PORT);
})
