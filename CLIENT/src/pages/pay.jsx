// import StripeCheckout from 'react-stripe-checkout'
// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios'


// export const Pay = () => {
//     const [stripeToken,setStripeToken] = useState(null)
//     const history = useHistory()
//     const onToken = (token)=>{
//         console.log(token)
//     }
//     useEffect(() => {
//       const makeRequest = async () =>{
//           try {
//               axios.post("http://localhost:5000/api/checkout/payout",{
//                   tokendId:stripeToken.id,
//                   amount:2000,
//               })
//               console.log(res.data)
//               history.push("/success",{res.data})
//           } catch (err) {
//               console.log(err)
//           }
//       }
    
//       return () => {
//         second
//       }
//     }, [stripeToken,history])
    

//   return (
//     <div
//         style={{
//             height:"100vh",
//             display:"flex",
//             alignItems:"center",
//             justifyContent:"center"
//         }}
//     >
//         {stripeToken ? (<span>Processing. Please Wait</span>):(

//             <StripeCheckout
//             name='namas e-com'
//             image=''
//             billingAddress
//             shippingAddress
//             description='your total is 500 Rupees'
//             amount={50000}
//             token={onToken}
//             stripeKey={SRIPE_KEY}
//             >
//             <button
//                 style={{
//                     border:"none",
//                     width: 120,
//                     borderRadius:5,
//                     padding: "20px",
//                     backgroundColor:"black",
//                     color: "white",
//                     fontWeight:"600",
//                     cursor: "pointer"
//                 }}
//                 >
//                 Pay Now
//             </button>
//         </StripeCheckout>
//         )}
//     </div>
//   )
// }
