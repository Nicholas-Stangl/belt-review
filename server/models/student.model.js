const mongoose = require("mongoose")


const StudentSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:[true, "First name is required!"],
        minLength: [3, "First name must be at least 3 chars"],
        maxLength: [1000, "First name exceeds max length 1000 chars"]
    },

    last_name:{
        type: String,
        required:[true, "Last name is required!"],
        minLength: [3, "Last name must be at least 3 chars"],
        maxLength: [1000, "Last name exceeds max length 1000 chars"]
    },

    graduation_date: {
        type: Date,
        required:[true, "Graduation date is required!"]
    },

    numberOfBelts:{
        type: Number
    },

    isVeteran:{
        type: Boolean
    }


}, {timestamps:true})


const Student = mongoose.model("Student", StudentSchema );

module.exports = Student;