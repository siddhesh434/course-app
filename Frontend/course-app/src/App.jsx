import './App.css'
import { useState, useEffect } from "react";
import NavBar from './Components/NavBar'
import CourseCard from './Components/CouseCard'
function App() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const coursePromise = fetch("http://localhost:3000/courses");
    console.log("hi");
    coursePromise.then((res) => {
      return res.json();
    }).then((finalData) => {
      setCourse(finalData);
      setLoading(true);
    }).catch(error => console.error('Error fetching courses:', error));
  }, [])

  if (!loading) {
    return <p>Loading</p>
  }
  return (
    <>
      <nav className='Nav-Bar'>
        <NavBar />
        <h5 style={{ marginTop: "20px", marginLeft: "20px" }}>Available Courses</h5>
        <div className='course-card-container' style={{ display: "flex" }}>
          {
            course.map((courses, index) => {
              return (
                <CourseCard key={index} {...courses} />
              );
            })
          }
        </div>
      </nav>
    </>
  )
}

export default App
