import './App.css'
import NavBar from './Components/NavBar'
import CourseCard from './Components/CouseCard'
function App() {
  const course = [{
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
  return (
    <>
      <nav className='Nav-Bar'>
        <NavBar />
        <h5 style={{ marginTop: "20px", marginLeft: "20px" }}>Available Courses</h5>
        <div className='course-card-container' style={{ display: "flex" }}>
          {
            course.map((course, index) => {
              return (
                <CourseCard key={index} {...course} />
              );
            })
          }
        </div>
      </nav>
    </>
  )
}

export default App
