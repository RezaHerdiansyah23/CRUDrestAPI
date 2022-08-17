const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.json({
        info: 'Hello World'
    });
})

app.get("/students", db.getStudents);
app.get("/students/:id", db.getStudentById);
app.put("/students/:id", db.updateStudent);
app.post("/students", db.createStudent);
app.delete("/students/:id", db.deleteStudent);