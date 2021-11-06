import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initializeFirebase(); 

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new  GoogleAuthProvider();


    // 01 (Register new user)
    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           setAuthError('');
           const newUser = {email, displayName: name};
           setUser(newUser);
           // send name to firebase after creation
           updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          
           history.replace('/');
            
          })
          .catch((error) => {
            setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
    }


    // 04 (Login user)
        const loginUser = (email, password, location, history) =>{
          setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location?.state?.from || '/';
              history.replace(destination);
              setAuthError('');
            })
            .catch((error) => {
              setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));

    }


     // google provider
     const signInWithGoogle = (location, history) =>{
      setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setAuthError('');
        }).catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
     }

    // 02
    // observer user state
    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe
    } ,[])


    // 03 (Logout user)
    const logOut = () =>{
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }


    
return{
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut
}


}


export default useFirebase;