import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
    login
  }

  function signup(email, password) {
    const auth = getAuth(); // Get the auth object
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    console.log("login")
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  )
}
