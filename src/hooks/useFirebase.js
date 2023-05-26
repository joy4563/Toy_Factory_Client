import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signOut
} from 'firebase/auth';
import initAuth from '../firebase/firebase.init';

const auth = getAuth(initAuth);

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError(null);
      return userCredential;
    } catch (error) {
      console.log('Error creating user:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError(null);
      return userCredential;
    } catch (error) {
      console.log('Error signing in:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleAuthProvider);
      setUser(userCredential.user);
      setError(null);
      return userCredential;
    } catch (error) {
      console.log('Error signing in with Google:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
    } catch (error) {
      console.log('Error logging out:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user in auth Provider', currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    user,
    loading,
    error,
    createUser,
    signIn,
    googleSignIn,
    logOut
  };
};

export default useFirebase;

// import { useEffect, useState } from 'react';
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   onAuthStateChanged,
//   getAuth,
//   signOut
// } from 'firebase/auth';
// import initAuth from '../firebase/firebase.init.js';

// const auth = getAuth(initAuth);

// const useFirebase = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleAuthProvider = new GoogleAuthProvider();

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignin = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleAuthProvider);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log('current user in auth Provider', currentUser);
//       setLoading(false);
//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, []);

//   return {
//     user,
//     loading,
//     createUser,
//     signIn,
//     googleSignin,
//     logOut
//   };
// };

// export default useFirebase;
