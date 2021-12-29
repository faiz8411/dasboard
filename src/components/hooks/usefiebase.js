import { useState } from "react"

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect } from "react";
import initializedAuthentication from "../Home/firebaseInitialize";

initializedAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [superAdmin, setSuperAdmin] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    const [authError, setAuthError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                varifyEmail()
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name,
                })


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message)
                // ..
            })
            .finally(() => setIsLoading(false))
    }
    const varifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    //   
    const loginUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))


    }
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    const signWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                navigate(destination)
                // The signed-in user info.
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')

            }).catch((error) => {
                setUser({})
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe;

    }, [])

    useEffect(() => {
        fetch(`https://powerful-savannah-04431.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setSuperAdmin(data.superAdmin))
    }, [user.email])

    useEffect(() => {
        fetch(`https://powerful-savannah-04431.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.Admin))
    }, [user.email])
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://powerful-savannah-04431.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        // admin: superAdmin,
        superAdmin,
        isLoading,
        admin,
        authError,
        forgotPassword,
        registerUser,
        logout,
        loginUser,
        signWithGoogle
    }
}

export default useFirebase