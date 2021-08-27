import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutBUtton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JT71dKwdFobVtN3CzFZ1Tyc7KzSdnHnfFLtj7MSRLLn7PRsg2zdAyKOKGYP6T8Jv1q5vlxC0SAS5D4wPeHUYmma00xLxWHy97'
    
    const onToken = token =>{
        console.log(token)
        alert('Payment Successful!')
    }

    return(
        <StripeCheckout 
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your Total is: $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}

        />
    )
}
export default StripeCheckoutBUtton;