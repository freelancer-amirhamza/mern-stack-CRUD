const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
            name:{
                type:String,
                required:[true, "The name must be required"],
            },
            email:{
                type:String,
                required:[true, "The email must be required"],
            },
            age:{
                type:Number,
                required:[true, "The name must be required"],
            }
        })

const Users = mongoose.model("users", userSchema);

module.exports = Users;