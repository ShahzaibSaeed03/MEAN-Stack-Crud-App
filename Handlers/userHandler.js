const User=require("./../DB/user")



    //todo add user in database
async function addUser(userModel){

    let user = new User({
        ...userModel
    })
    await user.save();
    return user.toObject();
}

async function getUsers() {
   const users= await User.find();
   return users.map(x=>x.toObject())
}

//get user by id
async function getUser(id) {
    const users= await User.findById(id);
    return users.toObject();
 }

 //for update-Function to user

 async function userUpdate(id,userModel) {
    const filter={_id:id};
    await User.findByIdAndUpdate(filter, userModel)
    
 }


 //for delete user 

 async function userDelete(id) {
    await User.findByIdAndDelete(id)

    
 }



module.exports={addUser,getUsers, getUser,userUpdate,userDelete};