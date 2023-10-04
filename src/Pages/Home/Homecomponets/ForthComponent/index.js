import React from 'react'
import CARD from '../../../../Componets/Assests/2.png'
import'./Style.css'
function ForthComponent() {
  return (
    <div className="card3" >
    <div className='container ThirdCon '>


    <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0 main5">
    <div class="card5 crd1">
      <div class="card-body">
      <h1 className="card-title tile33">
                    Generate
                  </h1>
      <h1 className="card-title tile3">
                    Email Signature
                  </h1>
        <p class="card-text pra">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>

        <p className="card-text pra" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
                  </p>
        <a href="#" className="btn btn-dark pra btn1 ">Go somewhere</a>
      </div>
    </div>
  </div>

  <div class="col-sm-8">
    <div class="card5 crd2">

        <img 
        src={CARD}
        className='img3' 
        />
 
    </div>
  </div>
</div>


  </div>
</div>



  )
}

export default ForthComponent
