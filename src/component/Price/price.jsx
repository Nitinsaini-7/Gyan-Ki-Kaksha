import React from "react"
import PriceCard from "./PriceCard"
import "./Price.css"


const Pricing = () => {
  return (
    <>
      <section className='pricing'>
        <div className="pricing-heading">
            <h1>
                Pricing
            </h1>
        </div>
        <div className='pricing-container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
