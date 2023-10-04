// // import React from 'react'
// // import'./Style.css'
// // import IMG1 from '../../../../Componets/Assests/4.png'
// // function NineComponent() {
// //   return (
// //     <div className="card12" >
// //       <div className='container-fluid'>
// //             <h1 className="card-title text22" >

// //               Contact Us</h1>
// //             <div className="row">
// //               <div className="col-sm-6">
// //                 <div className="crd cnd1" style={{ border: "none", borderRadius: "none" }} >
// //                   <div className="card-body"  >

// //                     <img
// //                       src={IMG1}
// //                       className='img5'

// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="col-sm-4 crdd">
// //                 <div className="crd" style={{ border: "none" }}>
// //                   <div className="card-body ">
// //     <div className="mb-3">
// //     {/* <label htmlFor="exampleFormControlInput1" className="form-label">
// //       Email address
// //     </label> */}
// //     <input
// //       type="email"
// //       className="form-control contact"
// //       id="exampleFormControlInput1"
// //       placeholder="*Your Name"
    
// //     />
// //   </div>
// //   <div className="mb-3">
// //     {/* <label htmlFor="exampleFormControlInput1" className="form-label">
// //       Email address
// //     </label> */}
// //     <input
// //       type="email"
// //       className="form-control contact"
// //       id="exampleFormControlInput1"
// //       placeholder="*Your Email"
// //     />
// //   </div>

// //   <div className="mb-3">
// //     {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
// //       Example textarea
// //     </label> */}
// //     <textarea
// //       className="form-control contact1"
// //       id="exampleFormControlTextarea1"
// //       rows={3}
// //       defaultValue={""}
// //       placeholder="*Your Message"
// //     />
// //   </div>

// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>

// //         </div>

// //   )
// // }

// // export default NineComponent

// import React from 'react';
// import './Style.css';
// import IMG1 from '../../../../Componets/Assests/4.png';

// function NineComponent() {
//   return (
//     <div className="card12">
//       <div className="container-fluid">
//         <h1 className="card-title text22">Contact Us</h1>
//         <div className="row">
//           <div className="col-lg-6 col-md-12">
//             <div className="crd cnd1">
//               <div className="card-body">
//                 <img src={IMG1} className="img5" alt="Contact Us" />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 crdd">
//             <div className="crd">
//               <div className="card-body">
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control contact"
//                     placeholder="*Your Name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control contact"
//                     placeholder="*Your Email"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     className="form-control contact1"
//                     rows={3}
//                     placeholder="*Your Message"
//                   ></textarea>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NineComponent;
import React from 'react';
import './Style.css';
import IMG1 from '../../../../Componets/Assests/4.png';

function NineComponent() {
  return (
    <div className="card12">
      <div className="container-fluid">
        <h1 className="card-title text22">Contact Us</h1>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="crd cnd1">
              <div className="card-body">
                <img src={IMG1} className="img5" alt="Contact Us" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 crdd">
            <div className="crd">
              <div className="card-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control contact"
                    placeholder="*Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control contact"
                    placeholder="*Your Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control contact1"
                    rows={3}
                    placeholder="*Your Message"
                  ></textarea>
                </div>
                <button type="button" className="btn btn-outline-dark subBtn"> Submit </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NineComponent;
