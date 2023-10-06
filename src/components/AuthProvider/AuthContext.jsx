import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config'


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
   

// google login
    const googleLogin = () =>{
      setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    // form register
    const register = (email,password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // form login with email, password
    const login = (email,password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout
    const logout = () =>{
      signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,(currentUser=>{
        console.log("user are auth changed", currentUser);
        setUser(currentUser)
        setLoading(false)
      }))

      return ()=>{
        unSubscribe()
      }
    },[])




   const authInfo = {
    googleLogin,
    register,
    login,
    user,
    loading,
    logout

    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider