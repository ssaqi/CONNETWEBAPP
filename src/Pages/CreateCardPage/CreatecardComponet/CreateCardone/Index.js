import React from 'react'
import CARD from '../../../../Componets/Assests/Group 103.png'
import './Style.css'
function Createcardone() {
  return (
    <div>
    <div className='container ThirdCon '>


<div class="row">
    
<div class="col-sm-3 mb-3 mb-sm-0 main6">
<div class="card5 crd1">
   <div className='container cnt'>  
  <div class="card-body">
  <h1 className="card-title tile36" style={{color:"blue",fontWeight:"bold"}}>
  Digital 
              </h1>
  <h1 className="card-title tile37" style={{color:"black"}}>
  Business Card
              </h1>
    <p class="card-text pra121">
    Create and customize stylish digital business cards and share them with anyone, near or far.
    </p>
    <a href="#" className="btn btn-outline-danger btn2 ">get Started</a>
  </div>
  <div className='bnDiv'>
            <button type="button" className="btn btn-dark btnn2">App store</button>
            <button type="button" className="btn btn-dark btnn4">Play store</button>
          </div>
          </div>
</div>
</div>

<div class="col-sm-8">
<div class="card5 crd2">

    <img 
    src={CARD}
    className='img7' 
    />

</div>
</div>
</div>


</div>
    </div>
  )
}

export default Createcardone
//  import React from 'react';
//  import CARD from '../../../../Componets/Assests/Group 103.png';
//  import './Style.css';

//  function Createcardone() {
//      return (
//      <div>
//        <div className="container ThirdCon">
//          <div className="row">
//            <div className="col-md-12 col-lg-3 mb-3 mb-sm-0 main6">
//              <div className="card5 crd1">
//                <div className="container cnt">
//                  <div className="card-body">
//                    <h1
//                      className="card-title tile33"
//                     style={{ color: 'blue', fontWeight: 'bold' }}
//                    >
//                      Digital
//                    </h1>
//                   <h1 className="card-title tile3" style={{ color: 'black' }}>
//                      Business Card
//                    </h1>
//                <p className="card-text pra">
//                      Create and customize stylish digital business cards and share
//                      them with anyone, near or far.
//                    </p>
//                    <a href="#" className="btn btn-dark pra btn1">
//                      Get Started
//                    </a>
//                  </div>
//                  <div className="bnDiv">
//                    <button type="button" className="btn btn-dark btnn2">
//                      App store
//                    </button>
//                    <button type="button" className="btn btn-dark btnn4">
//                      Play store
//                    </button>
//                 </div>
//                </div>
//              </div>
//            </div>

//            <div className="col-md-12 col-lg-8">
//              <div className="card5 crd2">
//              <img src={CARD} className="img7" alt="Business Card" />
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
//  }

//  export default Createcardone;


