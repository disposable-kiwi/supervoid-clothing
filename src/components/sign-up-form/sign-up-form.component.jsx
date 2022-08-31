import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component.jsx';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    //we make this function async because we're generating a user document by using an external service and this is what happens when we submit our form so we can create and submit a user document to the database
    const handleSubmit = async (event) => {
        event.preventDefault();
        //makes sure that the passwords match and if they don't, create an alert and stop the function
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            //destructure the user from the return
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            //put await here so that we actually make the user Object
            await createUserDocumentFromAuth(user, { displayName });
            //returns sign on form to blank fields
            resetFormFields();
        } catch (error) {
            //if any error, log this and send it to the user as an alert
            console.log('Encountered an error in user creation:', error);
            alert(`Encountered an error in user creation: ${error}`);
        };
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't Have an Account? Get Sucked in Today!</h2>
            <span>Sign Up with your Email</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput 
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type='submit'>Sign Up Today</Button>
            </form>
        </div>
    );
}

export default SignUpForm;