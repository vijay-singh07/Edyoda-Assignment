import React, { useState } from 'react';
import '../Styles/Payment.style.css';

const Paymentform = () => {
  const [selectedOption, setSelectedOption] = useState('179')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <form className='paymentform'>
      <p className='form-heading'>Select your subcription plan</p>
      <label className='disabled'>
        <input
          type="radio"
          value="99"
          checked
          onChange={handleOptionChange}
        />
        <span>
          <span className='tag'>
            <b>12 Months Subscription</b>
            <button className='tag-expired'>Offer Expired</button>
          </span>
          <span className='total'>
            Total &nbsp; <b>&#8377;99</b>
            <span className='plan-month'>&nbsp;&#8377;8/mon</span>
          </span>
        </span>
        
      </label>

      <label className={selectedOption==='179'?'checked':''}>
        <input
          type="radio"
          value="179"
          checked={selectedOption === '179'}
          onChange={handleOptionChange}
        />
        <span className='tag' >
          <b>12 Months Subscription</b>
          <button className='tag-Recommended'>Recommended</button>
        </span>
        <span className='total'>
          Total &nbsp;<b>&#8377;179</b>
          <span className='plan-month'>&nbsp;&#8377;15/mon</span>
        </span>
      </label>
      <label className={selectedOption==='149'?'checked':''}>
        <input
          type="radio"
          value="149"
          checked={selectedOption === '149'}
          onChange={handleOptionChange}
        />
        <span><b>6 Months Subscription</b></span>
        <span className='total'>
          Total &nbsp; <b>&#8377;149</b>
          <span className='plan-month'>&nbsp;&#8377;25/mon</span>
        </span>
      </label>
      <label className={selectedOption==='99'?'checked':''}>
        <input
          type="radio"
          value="99"
          checked={selectedOption === '99'}
          onChange={handleOptionChange}
        />
        <span className=''><b>3 Months Subscription</b></span>
        <span className='total'>
          Total &nbsp; <b>&#8377;99</b>
          <span className='plan-month'>&nbsp;&#8377;33/mon</span>
        </span>
      </label>

      <br></br>
      <hr></hr>

      {/* ststic */}

      <div className='boxes two-col'>
        <span className='col'>Subscription Fee:</span>
        <span className='col right'><b>&#8377;18500</b></span>
      </div>

      {/* discount */}
      <div className='discount'>
        <div className='two-col'>
          <span className='col'>
            <b>Limited Time offer</b>
          </span>
          <span className='col right'><b>-&#8377;{18500-selectedOption}</b></span>
        </div>
        <div className='offer'>
          <img src="./Icon Clock.svg" alt='Clock'></img>
          Offer Valid Till 24 march 2023
        </div>
      </div>

      <div className='boxes two-col'>
        <span className='col'><b>Total</b>(inc. of 18% GST):</span>
        <span className='right col boldtext'>&#8377;{selectedOption}</span>
      </div>

      <div className='buttons'>
      <input type="reset" value="Cancel"></input>
      &nbsp; &nbsp;
      <input type="submit" value="Proceed to Pay"></input>
      </div> 
      <br></br>
      <img src="Razorpay Icon.png" alt='payment logo'></img>
    </form>
  )
}

export default Paymentform;
