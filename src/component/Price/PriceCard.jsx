import React from "react"
import { price } from "../../dummy"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='price-items'>
          <h4>{val.name}</h4>
          <h1>
            <span>₹</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <div className="pricing-btn">
            <button>GET STARTED</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default PriceCard
