const Student = require('../models/student.model');


module.exports.findAllStudents = (req, res)=>{
    Student.find()
        .then(allstudents =>{
            res.json({results: allstudents})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.createStudent = (req, res)=>{

    console.log("SHOW MY REQUEST.BODY HERE--->", req.body)
    Student.create(req.body)
        .then(newStudent=>{
            res.json({results: newStudent})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.findOneStudent = (req, res)=>{
    Student.findOne({_id: req.params.id })
        .then(oneStudent=>{
            res.json({results: oneStudent})
        })
        .catch(err=>res.json(err))
}

module.exports.updateOneStudent = (req, res)=>{
    Student.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedStudent =>{
            res.json({results: updatedStudent})
        })
        .catch(err=> res.json(err))
}

module.exports.deleteStudent = (req,res)=>{
    Student.deleteOne({_id: req.params.id})
        .then(deletedStudent =>{
            res.json({results: deletedStudent})
        })
        .catch(err=> res.json(err))
}