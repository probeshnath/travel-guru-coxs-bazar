import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { createContext } from 'react'
import auth from '../../firebase.config'


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
   

// google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    // form register
    const register = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // form login with email, password
    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }




   const authInfo = {
    googleLogin,
    register,
    login

    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider