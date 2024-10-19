 
 const express = require("express");
const { addUser, getUsers ,getUser, userUpdate,userDelete} = require("../Handlers/userHandler");
 const router = express.Router();

 //user add opration

 router.post("/users", async(req,res)=>{
    console.log("req,body", req.body);
   let  user = await addUser(req.body)
    res.send(user);
  })
  // for read data from data base
  router.get("/users", async(req,res)=>{
    let users= await getUsers();
    res.send(users);
  })

   // for read data from data base
   router.get("/users/:id", async(req,res)=>{
    console.log("id", req.params["id"]);
    let user= await getUser( req.params["id"]);
    res.send(user);
  })


  // update route
  router.put("/users/:id", async(req,res)=>{
    console.log("id", req.params["id"]);
    await userUpdate( req.params["id"],req.body);
    res.send({});
  })
  

  // delete request route
  router.delete("/users/:id", async(req,res)=>{
    console.log("id", req.params["id"]);
    await userDelete( req.params["id"]);
    res.send({});
  })

  module.exports = router;
  