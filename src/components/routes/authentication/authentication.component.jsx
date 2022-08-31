import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {

  
    useEffect(()=>{
        async function supervoidGoogleRedirect(){
        const response = await getRedirectResult(auth);
          //if there is a response (a reference to a user document and that user document's data), then execute this code block

        if(response){
            //captures the return of the reference attribute of that user document and, remember, createUserDocumentFromAuth already contains functionality that checks if a user document with data for the signed in user exists or not (remember that it uses the uid attribute from the user attribute{which is an Object} to check if a user document with data corresponds to the user that has signed in)
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }}
        //useEffect must not return a Promise Object so we can't make our callback async
        //instead we just make an async function within useEffect's callback and then put all the associated with getDirectResult() in there and then return that async function we just made in this case, I've called it supervoidGoogleRedirect
        supervoidGoogleRedirect();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {

        const { user } = await signInWithGoogleRedirect();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="authentication-container">
            <h1>Sign In Page</h1>
            {/* <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <button onClick={logGoogleRedirectUser}>Sign In with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;