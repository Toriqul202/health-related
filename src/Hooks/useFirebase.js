import{ useEffect, useState } from 'react';
import { getAuth,GithubAuthProvider, signInWithPopup,updateProfile, GoogleAuthProvider,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import authentication from '../Firebase/firebase.init';

authentication()
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
   
    const [error,setError]=useState('')
    const [isLoading,setIsLoading]=useState(true)
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider()
    const provider = new GithubAuthProvider();
    
    const googleSignIn=()=>{
      setIsLoading(true)
      
     return signInWithPopup(auth,googleProvider)
    
    
  
    }
    const gitHandle=()=>{
     return signInWithPopup(auth, provider)
    }
    const handleName=(e)=>{
      setName(e.target.value)
      console.log(e.target.value)
    }
    
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
  }
  const handlePass=(e)=>{
      setPassword(e.target.value)
      console.log(e.target.value)
  }
  const handleReg=(e)=>{
    e.preventDefault()
    regis(email,password)
  }
  const handleSignIn=(e)=>{
   e.preventDefault()
   signIn(email,password)
  }
  const regis=(email,password,e)=>{
    
   
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Signed in 
    
      const user = result.user
      console.log(user)
      setError('')
      setUserName()
     
      // ...
      
    })
   
    
    .catch((error) => {
     setError('Ops Something Wrong')
    })
    
   
}
    
    
    useEffect(()=>{
    const unsubscribed=  onAuthStateChanged(auth,(user)=>{
          if(user){
              setUser(user)
          }
          else{
            setUser({})
          }
          setIsLoading(false)
      })
      return ()=>unsubscribed
    },[ ]);
    const signIn=(email,password)=>{
     
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    setUser(result.user)
    setError('')
    // ...
  })
 
  .catch((error) => {
        setError('No account exist')
  })
  .finally(()=>{
    setIsLoading(false)
  })

    }
    const setUserName=()=>{
      setIsLoading(true)
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }
   
    const logOut=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          })
          .finally(()=>{
            setIsLoading(false)
          })
    }
    return {
        user,
        handleSignIn,
        handlePass,
        logOut,
        setIsLoading,
        email,
        password,
        error,
        handleReg,
        handleEmailChange,
        googleSignIn,isLoading,
        signIn,
        handleName,
        name,
        setUserName,
        gitHandle


    }
   
};

export default useFirebase;