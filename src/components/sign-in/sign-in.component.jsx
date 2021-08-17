import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

// SignIn component. Is just the SignIn form/section of the sign-in-... ,page. The other being the register
// Holds state (email and password)
// Contains form to submit username and password 
// Also contains GoogleAuthentification via our custom buttons. SignInFromGoogle imported from firebase.utils comp

class SignIn extends React.Component {

    constructor(props) {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    //Async now becaause we are making calls to firebase(back end, kinda)
    handleSubmit = async (event) => {
        event.preventDefault();
        const{email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
        }
        catch(err){
            console.error(err)
        }
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        //Dynamically setState. USe the same handleChange method to set the state for both email and password
        // first line destructures the target variable (which contains both values, the 'name' and the actual input)
        // For example the name = 'email' and the value would by mliddy@gmail.com
        // Second line will set state for either email or password depending on whats being typed in
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'
                        type='email'
                        value={this.state.email}
                        label='Email'
                        required
                        onChange={this.handleChange} />
                    <FormInput name='password'
                        type='password'
                        value={this.state.password}
                        label='Password'
                        required
                        handleChange={this.handleChange} />
                        
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
                            {''}
                            Sign In With Google
                            {''}
                        </CustomButton>
                    </div>

                </form>
            </div>

        )
    }


}

export default SignIn;