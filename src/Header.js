import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import avatar from './avatar.png'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch()

  const logoutApp = (e) => {
    console.log('logout app')
    signOut(auth).then(() => {
      dispatch(logout)
    })

  }

  return (
    <div className='header'>
      <div className="header__left">
        <LinkedInIcon className="linkedInIcon" />
        {/* <img src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" alt="" /> */}

        <div className="header__search">
          {/* search icon */}

          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>


      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />

      </div>

    </div>
  )
}

export default Header