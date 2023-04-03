import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'
import useInput from './useInput.js'

function Login() {
    const [email, onEmailChange] = useInput("")
    const [password, onPasswordChange] = useInput('')
    const [name, onNameChange] = useInput('')
    const [profilePicture, onProfilePictureChange] = useInput("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                console.log(`logged in ${JSON.stringify(userAuth)}`)
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            }).catch((error) => alert(error))
        // window.location.href = '/login'
    }

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: profilePicture
                })
                dispatch(login({
                    email: email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePicture
                }))
            }).catch((error) => alert(error))
    }

    return (
        <div className='login'>
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-2003.png" alt="" />
            <form action="">
                <input value={name} onChange={onNameChange} placeholder='Full name (required if registering)' type="text" />
                <input value={profilePicture} onChange={onProfilePictureChange} placeholder='Profile picture(Optional)' type="text" />
                <input value={email} onChange={onEmailChange} placeholder='Email' type="email" />
                <input value={password} onChange={onPasswordChange} placeholder='Password' type="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className='login__register' onClick={register}>Register now</span>
            </p>
        </div>
    )
}

// Cannot read properties of undefined

export default Login