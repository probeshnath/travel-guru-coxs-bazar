import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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




   const authInfo = {
    googleLogin,
    register

    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider