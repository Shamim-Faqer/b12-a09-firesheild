import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider =({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = () => {
    return signOut(auth);
};


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
setUser(currentUser);
setLoading(false);
});
return () => unsubscribe();
},[]);


const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser
};

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;