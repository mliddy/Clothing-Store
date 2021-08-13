import React from 'react'
import './custom-button.styles.scss'

//CustomButton component. Renders a custom button tag with styling
// First pull the children who get passed in off our props to the CustomButton
// THen destrcuture all the other other props and spread into our custombutton
// Now if submit gets passed in it will respond to onSubmit, etc
// Children are put inside. That's because children are the content inside 
 // non self closing tags. e.g. <CustomButton> Children in here </CustomButton>
 // ClassName on the button is dynamically rendered to make it possible to render
 // the Sign in With Google custom button

const CustomButton = ({children,isGoogleSignIn,...otherProps}) => {
    return (
        <button className = {`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;