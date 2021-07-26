const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is required"],
        maxLength: [100, "Keep it simple"],
        minLength: [3, "Name must be at least 3 characters long"],
    },
    type:{
        type: String,
        required: [true, "Type is required"],
        maxLength: [100, "Keep it simple"],
        minLength: [3, "Type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Tells us what it is mane"],
        maxLength: [100, "Keep it simple"],
        minLength: [3, "Description must be at least 3 characters long"]
    },
    skill1: {
        type: String,
        maxLength: [100, "Keep it simple"],
    },
    skill2: {
        type: String,
        maxLength: [100, "Keep it simple"],
    },
    skill3: {
        type: String,
        maxLength: [100, "Keep it simple"],
    }
}, {timestamps:true} )

const Pets = mongoose.model("Pets", PetsSchema );

module.exports = Pets;