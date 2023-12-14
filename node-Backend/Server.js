const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())

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

app.listen(3000, () => {
    console.log("App is listening at port 3000")
})