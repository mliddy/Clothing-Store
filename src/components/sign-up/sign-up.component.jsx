import React from 'react'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        //Similar to when we were making a GoogleAuthentification in App.js
        // Except we manually creating the object
        const { displayName, email, confirmPassword, password } = this.state;

        if (password !==  confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            //use auth method to create a new user from username and password
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            //once we get that new user back we run the createUserProfile.., passing that user to firebase
            await createUserProfileDocument(user, { displayName })
            //after awaiting that above function we reset the state to default
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
            )

        }
        catch (err) {
            console.error(err)
        }
    }

    handleChange = (event) =>{
        //destructure off the event teh name and teh value from the target
        const {name,value} = event.target;
           //Them again, set the state dynamically based on whtaever is in the name and value fields 
        this.setState({[name]:value});
    }

    render() {
        const { displayName, email, confirmPassword, password } = this.state;


        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label = 'Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;