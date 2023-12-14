const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors())


const users = [];

app.use(express.json())
const courses = [{
    index: "1",
    name: 'Course Name',
    price: '$99',
    duration: '4 weeks',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgDIGJ3147t9CBjq34ArVl7OxjKYtj-_jt1pEqChv5hW0c37ixRWzJbG-KSQ5QUY21rzx-ijtBpykqRspuhatM2aR4ihWdrdg-L49Eg5LmQIvhkHBx4MzaxZ2CQTY099d1_iK3PBtSCGufUEmGdK4G6LeTlguWED8BZ54KYRyNWtu6dVgF1El_Y7hgQ=w370-h400',
    instructor: 'Instructor Name',
},
{
    index: "1",
    name: 'Course Name',
    price: '$99',
    duration: '4 weeks',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgDIGJ3147t9CBjq34ArVl7OxjKYtj-_jt1pEqChv5hW0c37ixRWzJbG-KSQ5QUY21rzx-ijtBpykqRspuhatM2aR4ihWdrdg-L49Eg5LmQIvhkHBx4MzaxZ2CQTY099d1_iK3PBtSCGufUEmGdK4G6LeTlguWED8BZ54KYRyNWtu6dVgF1El_Y7hgQ=w370-h400',
    instructor: 'Instructor Name',
},
{
    index: "1",
    name: 'Course Name',
    price: '$99',
    duration: '4 weeks',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgDIGJ3147t9CBjq34ArVl7OxjKYtj-_jt1pEqChv5hW0c37ixRWzJbG-KSQ5QUY21rzx-ijtBpykqRspuhatM2aR4ihWdrdg-L49Eg5LmQIvhkHBx4MzaxZ2CQTY099d1_iK3PBtSCGufUEmGdK4G6LeTlguWED8BZ54KYRyNWtu6dVgF1El_Y7hgQ=w370-h400',
    instructor: 'Instructor Name',
}];



app.get('/courses', (req, res) => {
    res.json(courses)
})



app.post("/signup", (req, res) => {
    const formData = req.body;
    if (formData.password !== formData.confirmedPassword) {
        res.status(400).send('Password dont match')
    }
    users.push(formData);
    console.log("received form data", formData);
    res.status(200).send('Received form data successfully');
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.post('/login', (req, res) => {
    const loginDetails = req.body;
    console.log("hi");
    const foundUser = users.find(user => user.username === loginDetails.username)
    if (foundUser) {
        if (foundUser.password === loginDetails.password) {
            res.status(200).send("Login Successfully")
        }
        else {
            res.status(400).send("Invalid Password");
        }
    }
    else {
        res.status(404).send("user not found");
    }
})


app.listen(3000, () => {
    console.log("App is listening at port 3000")
})