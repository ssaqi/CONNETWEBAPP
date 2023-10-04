// import React from 'react'
// import IMG3 from '../../../../Componets/Assests/Group 91.png'
// import IMG4 from '../../../../Componets/Assests/Group 92.png'
// import './Style.css'

// function cardCom4() {
//   return (
//     <div className="card19" >
//      <div className='container'>
//      <div class="row">
//   <div class="col-sm-6">
//   <center>
//     <div class="main3">
//         <img 
//         src={IMG4}
//         />
//       <div class="card-body">
      
//         <h5 class="card-title tile2">Create Digital Business Card on Desktop</h5>
//         <p class="card-text heading">Using the ShareEcard systems. With your own Design and Branding.</p>
       
//       </div>
//     </div>
//         </center>
//   </div>
//   <div class="col-sm-6">
//     <center>
//     <div class="main3">
//     <img 
//         src={IMG3}
//         />
//       <div class="card-body">
//         <h5 class="card-title tile2">Use Digital Business Card on Smartphone</h5>
//         <p class="card-text heading">Download ShareEcard mobile App. Use your Digital Business Card</p>
//       </div>
//     </div>
//     </center>
//   </div>
// </div>
//      </div>
//     </div>
//   )
// }

// export default cardCom4

import React from 'react';
import IMG3 from '../../../../Componets/Assests/Group 91.png';
import IMG4 from '../../../../Componets/Assests/Group 92.png';
import './Style.css';

function cardCom4() {
  return (
    <div className="card19">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <center>
              <div className="main3">
                <img src={IMG4} className='infoimg' alt="Create Digital Business Card on Desktop" />
                <div className="card-body">
                  <h5 className="card-title tile2">Create Digital Business Card on Desktop</h5>
                  <p className="card-text heading">
                    Using the ShareEcard systems. With your own Design and Branding.
                  </p>
                </div>
              </div>
            </center>
          </div>
          <div className="col-sm-12 col-md-6">
            <center>
              <div className="main3">
                <img src={IMG3} className='infoimg' alt="Use Digital Business Card on Smartphone" />
                <div className="card-body">
                  <h5 className="card-title tile2">Use Digital Business Card on Smartphone</h5>
                  <p className="card-text heading">
                    Download ShareEcard mobile App. Use your Digital Business Card
                  </p>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardCom4;

