const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors())


const users = [{
    id: 1,
    username: "sid",
    password: "sid",
    email: "siddheshwaje@gmail.com"
},
{
    id: 2,
    username: "johndoe",
    password: "doe123",
    email: "johndoe@example.com"
}
    , {
    id: 3,
    username: "alice_smith",
    password: "p@ssw0rd",
    email: "alice.smith@email.com"
}
    , {
    id: 4,
    username: "maximus",
    password: "gladiator",
    email: "maximus@rome.com"
}
    , {
    id: 5,
    username: "sarah_87",
    password: "sarah123",
    email: "sarah87@gmail.com"
}
    , {
    id: 6,
    username: "bob_jenkins",
    password: "p@55w0rd",
    email: "bob.jenkins@email.com"
}
];

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



app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});




app.get('/courses', (req, res) => {
    res.json(courses)
})


let a = 2; // Use let or var to ensure it can be modified globally
app.post("/signup", (req, res) => {
    const formData = req.body;
    if (formData.password !== formData.confirmedPassword) {
        res.status(400).send('Passwords don\'t match');
        return; // Add return to prevent further execution
    }
    formData.id = a;
    a++; // Increment 'a' after assigning it to formData.id
    users.push(formData);
    console.log("Received form data", formData);
    res.status(200).send('Received form data successfully');
});


app.get("/users", (req, res) => {
    res.send(users)
})

app.post('/login', (req, res) => {
    const loginDetails = req.body;
    console.log("hi");
    const foundUser = users.find(user => user.username === loginDetails.username)
    if (foundUser) {
        if (foundUser.password === loginDetails.password) {
            res.status(200).send(`${foundUser.id}`)
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