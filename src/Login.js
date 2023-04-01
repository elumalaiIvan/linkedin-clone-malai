import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [profilePicture, setProfilePicture] = React.useState()
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoUrl
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
                updateProfile(userAuth, {
                    displayName: name,
                    photoUrl: profilePicture
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
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
                <input value={profilePicture} onChange={e => setProfilePicture(e.target.value)} placeholder='Profile picture(Optional)' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />

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