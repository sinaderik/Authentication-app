import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }

  function signup(email, password) {
    const auth = getAuth(); // Get the auth object
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout(){
    const auth = getAuth();
    return auth.signOut()
  }

  function resetPassword(email){
    const auth = getAuth();
    return sendPasswordResetEmail(auth,email)
  }

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  )
}
