// import React from 'react'
// import CARD from '../../../../Componets/Assests/108.png'
// import './Style.css'
// function cardCom5() {
//   return (
//     <div >
//      <div className='container ThirdCon '>


// <div class="row">
// <div class="col-sm-3 mb-3 mb-sm-0 main5">
//     <div className='container cnt2'>
// <div class="card5 crd1">
//   <div class="card-body">
//   <h1 className="card-title tile34">
//   Share Your Card 
//               </h1>
//   <h1 className="card-title tile32">
//   With Anyone, Anyway
//               </h1>
//     <p class="card-text pra2">
//     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
//                 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
//     </p>

//     <p className="card-text pra2" >
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
//               </p>
//     <a href="#" className="btn btn-dark pra btn23  ">Create a Business Card</a>
//   </div>
// </div>
// </div>
// </div>
// <div class="col-sm-8">
// <div class="card5 crd2">

//     <img 
//     src={CARD}
//     className='img6' 
//     />

// </div>
// </div>
// </div>


// </div>
//     </div>
//   )
// }

// export default cardCom5

import React from 'react';
import CARD from '../../../../Componets/Assests/108.png';
import './Style.css';

function cardCom5() {
  return (
    <div>
      <div className="container ThirdCon">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-3 mb-sm-0 main5">
            <div className="container cnt2">
              <div className="card5 crd1">
                <div className="card-body">
                  <h1 className="card-title tile34">
                    Share Your Card
                  </h1>
                  <h1 className="card-title tile32">
                    With Anyone, Anyway
                  </h1>
                  <p className="card-text pra2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  </p>
                  <p className="card-text pra2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
                  </p>
                  <a href="#" className="btn btn-dark pra btn23">
                    Create a Business Card
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="card5 crd2">
              <img src={CARD} className="img6" alt="Business Card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardCom5;
