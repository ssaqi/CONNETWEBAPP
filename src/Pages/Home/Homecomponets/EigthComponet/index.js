import React from 'react'
import './Style.css'

function EightComponent() {
  return (
    <div className="card11" >
      <div className='container'>
            <center>
              <h1 className="card-title tile6">
              Frequently Asked <span style={{color:"#D9617B"}}> Questions </span>
              </h1>
            </center>


<div className="accordion faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={{ backgroundColor: "#f4f4f4", height: "90px",fontWeight:"600",fontSize:19 }}
      >
        How to create a free digital business card ?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      <strong>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        style={{ backgroundColor: "#f4f4f4", height: "90px",fontWeight:"600",fontSize:19 }}
      >
         How to update my details ?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </strong> 
    
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        style={{ backgroundColor: "#f4f4f4", height: "90px",fontWeight:"600",fontSize:19 }}
      >
       Can i create more than 1 digital business card
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
      <strong>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book
        Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </strong>
      </div>
    </div>
  </div>
</div>





            
</div>
    </div>
  )
}

export default EightComponent
