import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component.jsx';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    //we make this function async because we're generating a user document by using an external service and this is what happens when we submit our form so we can create and submit a user document to the database
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            //we see that we get our user Object and access token if there's a validated user
            console.log(response);
            resetFormFields();
        } catch (error) {
            if(error.code==="auth/wrong-password"){
                alert("Wrong credentials entered.")
            }else if(error.code==="auth/user-not-found"){
                alert("User does not exist.");
            }else{
                alert(`Error in signing in user: ${error}`)
            }
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h2>Have an Account? Let's Blast Off!</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    );
}

export default SignInForm;