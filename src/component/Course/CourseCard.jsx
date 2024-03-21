import React from "react";
import { coursesCard } from "../../dummy";
import './Course.css'

function CourseCard(){
    return (
        <>
          <section className='courses-card'>
            <div className='courses-card-container'>
              {coursesCard.map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                    </div>
                  <button className='enroll-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </section>
        </>
      )
}

export default CourseCard;