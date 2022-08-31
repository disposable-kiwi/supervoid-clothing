import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
//this is the actual value you want to access
export const UserContext = createContext({
    /* some default value */
    //the default values will encompass empty forms of the
    //things we are exporting with the Provider
    currentUser: null,
    setCurrentUser: () => null,
});

//component that will be used to wrap child components so that they can access the context (thing written above)
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            } else {
                //will always store the user auth Object on auth changes (user signing in or user singning out) and this is *always* listening
                setCurrentUser(user);
            }
        });
        return unsubscribe;
    }, []);

    //allows child components to access any of the values inside the useState above
    //so everybody down the component tree will have the ability to gain access to both the
    //current state and the state setter from the above useState
    //we pass this down as the value attribute
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}