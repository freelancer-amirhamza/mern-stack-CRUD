const express =  require("express");
const app = express();
const cors = require("cors");
const Users = require("./models/userSchema");
require("./config/database");



app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// get users
app.get("/",async (req, res)=>{
    try {
        await Users.find()
        .then((users)=> res.json(users))
        .catch((err)=> res.json(err));
    } catch (error) {
        console.log(error)
    }
})

// create users
app.post("/createUser", async (req, res)=>{
    try {
        const {name, email, age} = req.body;
        const newUsers = new Users({name, email, age})
        await newUsers.save()
        .then((users)=> res.json(users))
        .catch(err => res.json(err.message));
    } catch (error) {
        res.status(404).json(error.message)
    }
});

// Update users
app.put("/updateUser/:id",async (req, res)=>{
    try {
        const id = req.params.id;
        const {email, name, age} = req.body;
        await Users.findByIdAndUpdate({_id:id}, {name, email, age})
        .then((users)=> res.status(200).json(users))
        .catch((err)=> res.status(404).json(err.message));
    } catch (error) {
        console.log(error)
    }
});

app.get("/getUsers/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        await Users.findById({_id:id})
        .then(users => res.status(200).json(users))
        .catch(err => res.status(404).json(err.message))
    } catch (error) {
        console.log(error)
    }
})

app.delete("/deleteUser/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        await Users.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully." });
      } catch (error) {
        res.status(500).json({ errorMessage: error.message });
      }
})



module.exports = app;