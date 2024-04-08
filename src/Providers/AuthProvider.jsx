import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdate = (name, imageurl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageurl
        })
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        createUser,
        userLogin,
        userUpdate,
        loginWithGoogle,
        loginWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;