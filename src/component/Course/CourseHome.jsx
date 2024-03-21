import React from "react";
import CourseCard from "./CourseCard";
import CourseOnline from "./CourseOnline";
import './Course.css'
function Course(){
    return (
        <div className="courses">
          <div className="courses-heading">
          <h1>All Courses</h1>
          </div>
          <CourseCard></CourseCard>
          <CourseOnline></CourseOnline>
        </div>
    )
}
export default Course;