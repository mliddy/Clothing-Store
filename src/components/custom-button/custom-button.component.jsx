import React from 'react'
import './custom-button.styles.scss'
import { CustomButtonContainer } from './custom-button.styles';
//CustomButton component. Renders a custom button tag with styling
// First pull the children who get passed in off our props to the CustomButton
// THen destrcuture all the other other props and spread into our custombutton
// Now if submit gets passed in it will respond to onSubmit, etc
// Children are put inside. That's because children are the content inside 
// non self closing tags. e.g. <CustomButton> Children in here </CustomButton>
// ClassName on the button is dynamically rendered to make it possible to render
// the Sign in With Google custom button
// Inverted prop changes teh color of the button when we hover to add to cart

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <button className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}
         custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

// Wont fucking work, moves the button off the image down below it in a shitty way
// const CustomButton = ({ children, ...props }) => (
//     <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
//   );
  

export default CustomButton;