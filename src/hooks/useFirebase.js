import { useEffect, useState } from "react";
// import initializeFirebaseApp from "../components/Firebase/firebase.init";
import {
   getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,
   updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, signOut
} from "firebase/auth";
import Swal from 'sweetalert2';

// initializeFirebaseApp()

const useFirebase = () => {
   const [user, setUser] = useState({})
   // googleProvider
   const googleProvider = new GoogleAuthProvider();
   // auth
   const auth = getAuth();
   // handle google sign in
   const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user;
            setUser(user);
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Register Successfully',
            })
         }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
            })
         });
   }





   // register user
   const handleRegister = (name, email, password,reset) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser({ displayName: name, email })

            // update user profile
            updateProfile(auth.currentUser, {
               displayName: name,
            }).then(() => {

            }).catch((error) => {

            });

            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Register Successfully',
            })
            reset()
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
            })
         });
   }

   // login user
   const loginUser = (email, password,reset) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser(user)
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Login Successfully',
            })
            reset()
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
            })
         });
   }

   // password reset email
   const passwordResetEmail = (email) => {
      sendPasswordResetEmail(auth, email)
         .then(() => {
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Password reset email sent',
            })
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
            })
         });

   }

   // logout
   const logout = () => {
      signOut(auth).then(() => {
         setUser({})
         Swal.fire({
            icon: 'success',
            title: 'Logout Successfully',
         })
      }).catch((error) => {
         const errorMessage = error.message;
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
         })
      });
   }


   // on auth state change
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
            setUser({})
         }
      });
      return () => unsubscribe()
   }, [auth]);

   return {
      user,
      handleGoogleSignIn,
      handleRegister,
      loginUser,
      passwordResetEmail,
      logout,
   }
}

export default useFirebase;