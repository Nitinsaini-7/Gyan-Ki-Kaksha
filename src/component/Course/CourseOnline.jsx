import React from "react";
import { online } from "../../dummy";
import './Course.css'

function CourseOnline(){
    return (
        <>
          <section className='online'>
            <div className="online-heading">
              <h1>Online Courses</h1>
            </div>
            <div className='online-course-container'>
              <div className='online-course-box'>
                {online.map((val) => (
                  <div className='box'>
                    <div className='img'>
                      <img src={val.cover} />
                      <img src={val.hoverCover} alt='' className='show' />
                    </div>
                    <h1>{val.courseName}</h1>
                    <span>{val.course}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )
}

export default CourseOnline;