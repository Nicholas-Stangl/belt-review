const StudentController = require("../controllers/student.controller");


module.exports = app =>{
    app.get("/api/students", StudentController.findAllStudents)
    app.post("/api/students/create", StudentController.createStudent)
    app.get("/api/students/:id", StudentController.findOneStudent)
    app.put("/api/students/update/:id", StudentController.updateOneStudent)
    app.delete("/api/students/delete/:id", StudentController.deleteStudent)

}





