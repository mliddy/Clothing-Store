import React from 'react'
import './form-input.styles.scss'

// Label prop allows us to selectively render a label. BEcaue we dont know whether we actually need it or not
// NUtty label className: will always have the form-input-label property, but we add 'shrink' whenever the user 
// has typed anything in. Mainly for certain browsers who will autocomplete
// I think thats the thing that adds the effect of moving the label up and makign way for the cursor
// when the user types anything
// The label sits in the component, right above the input itself(line on the input form)

const FormInput = ({handleChange,label,...otherProps}) =>{
    return(
        <div className = 'group'>
            <input className = 'form-input' onChange = {handleChange} {...otherProps }/>
            {
                label ?
                (<label className = {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInput; 