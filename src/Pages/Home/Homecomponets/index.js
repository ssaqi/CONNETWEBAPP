// import React from 'react'
// import './Style.css'
// function Herosection() {
//     return (
//         <>

//             <div className="card" >

//                 <div className="row" >
//                     <div className="col-sm-6 mb-3 mb-sm-0" style={{ marginTop: 150 }}>

//                         <div className="card-body" >
//                             <h4 className="card-title head">THE EASIEST WAY TO SHARE YOUR DEATAILS</h4>
//                             <h1 className="card-title big">Connect Instantly <br />
//                                 <span className='side'> With a Digital </span></h1>
//                             <h3 className="card-title side2">
//                                 Business card
//                             </h3>
//                             <p className="card-text parg">
//                                 A Connect allows you to instantly share
//                                 <br />
//                                 <span className=' parg1'>
//                                     who you are, with anyone, where ever you go.
//                                 </span>

//                                 <div className="d-grid gap-2 d-md-block  btnGrop">
//                                 <button type="button" className="btn btn-danger" style={{ fontSize: 14, fontWeight: 500,margin:5 }}>
//                                     Create your card
//                                 </button>
//                                 <button type="button" className="btn btn-outline-secondary " style={{ fontSize: 14, fontWeight: 500,margin:5 }}>
//                                     For Terms
//                                 </button>

//                             </div>
//                             </p>

                        

//                         </div>
//                     </div>

//                 </div>


//             </div>


//         </>
//     )
// }

// export default Herosection


import React from 'react';
import './Style.css';

function Herosection() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0" style={{ marginTop: 150 }}>
            <div className="card-body">
              <h4 className="card-title head">THE EASIEST WAY TO SHARE YOUR DEATAILS</h4>
              <h1 className="card-title big">Connect Instantly <br /><span className='side'> With a Digital </span></h1>
              <h3 className="card-title side2">Business card</h3>
              <p className="card-text parg">
                A Connect allows you to instantly share<br /><span className='parg1'>who you are, with anyone, wherever you go.</span>
                <div className="d-grid gap-2 d-md-block  btnGrop">
                  <button type="button" className="btn btn-danger" style={{ fontSize: 14, fontWeight: 500, margin: 5 }}>
                    Create your card
                  </button>
                  <button type="button" className="btn btn-outline-secondary " style={{ fontSize: 14, fontWeight: 500, margin: 5 }}>
                    For Terms
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
