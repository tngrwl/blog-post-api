const pg = require("./../database/connection") ;

const getBlogData = async () =>{
    const data = await pg.query("select * from blogs");
    return data;
}

const insertBlogData = async (body) =>{
    const data = await pg.query("Insert into blogs(title, Description) Values($1, $2)",[body.title, body.Description]);
    return data;
}

const updateBlogData = async (body) =>{
    const data = await pg.query("Update blogs set title = $1, description = $2 where id = $3",[body.title, body.Description, body.id]);
    return data;
}

const deleteBlogData = async (id) =>{
    const data = await pg.query("delete from blogs where id = $1 ",[id]);
    return data;
}

module.exports = {getBlogData, insertBlogData, updateBlogData,deleteBlogData }
 