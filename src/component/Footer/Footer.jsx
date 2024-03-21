import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <div className='footer-box1'>
            <h1>GYAN KI KAKSHA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Learning is the only thing the mind never exhausts, never fears, and never regrets.</p>
            <div className="footer-social-links">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className='footer-box2'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='footer-box3'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='footer-box4'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                  Hapur(Uttar Pradesh), India, 245101
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                +91 XXXXXXXXXX
              </li>
              <li>
              <i class="fa-solid fa-paper-plane"></i>
                xyz@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This website is made with <i class="fa-solid fa-heart"></i> by Nitin Saini
        </p>
      </div>
    </>
  )
}

export default Footer
