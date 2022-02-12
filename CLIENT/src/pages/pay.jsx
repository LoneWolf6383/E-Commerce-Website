import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout'
import React from 'react'



export const Pay = () => {
    const onToken = ()=>{
        
    }
  return (
    <div
        style={{
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
    >
        <StripeCheckout
         name='namas e-com'
         image=''
         billingAddress
         shippingAddress
         description='your total is 500 Rupees'
         amount={50000}
         token={onToken}
         stripeKey={SRIPE_KEY}
         >
            <button
                style={{
                    border:"none",
                    width: 120,
                    borderRadius:5,
                    padding: "20px",
                    backgroundColor:"black",
                    color: "white",
                    fontWeight:"600",
                    cursor: "pointer"
                }}
                >
                Pay Now
            </button>
        </StripeCheckout>
    </div>
  )
}
