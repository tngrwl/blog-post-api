const express = require("express");
const JSONData = require("../database/blogData.json");
const CrudRouter = express();
const {getBlogData, insertBlogData, updateBlogData,deleteBlogData } = require("./../service/crudService")
// import  from "./../service/crudService";

CrudRouter.get("/blog",async (req,res)=>{
    const data = await getBlogData();
    res.send({data:data,message: "SUCCESS"});
})

CrudRouter.post("/blog-insert", async (req,res)=>{
    const data = req.body;
    const rest = await insertBlogData(data) ;
    res.send({data:rest,message: "SUCCESS"});
})
CrudRouter.post("/blog-update",async (req,res)=>{
    const data = req.body;
    const rest = await updateBlogData(data) ;
    res.send({data:rest,message: "SUCCESS"});
})
CrudRouter.get("/blog-delete/:id",async (req,res)=>{
    const id = req.params.id;
    const data = await deleteBlogData();
    res.send({data:data,message: "SUCCESS"});
})

module.exports = CrudRouter;