import React from "react";
import "./Home.css"
import About from "../About/About";
import Contact from "../Contact/Contact";
import TrendingCourses from "../Trending Courses/TrendingCourses";
import QuoteSlide from "../Quote/Quote";

function Home(){
    return(
        <div>
        <section className="home">
            <div className="home-container">
            <div className="home-text">
                <h3>WELCOME TO</h3>
                <h1>GYAN KI KAKSHA</h1>
                <h3>Best Online Education Platform</h3>
                <p>A learning community dedicated to building respectful and responsible citizens and empowering all learners.</p>
                <p> Learning Today . . . Leading Tomorrow.</p>
                
                <div className="home-btns-box">
                <div className="home-btns">
                    <button className="start-btn">Get Start Now</button>
                    <button className="course-btn">View Course</button>
                </div>
                </div>
            </div>
            </div>
        </section>

        <About></About>
        <TrendingCourses></TrendingCourses>
        <QuoteSlide></QuoteSlide>
        <Contact></Contact>
        </div>
    )
}

export default Home;