import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Notifications} from '@mui/icons-material';
import avatar from './avatar.png'

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
        <LinkedInIcon className="linkedInIcon" />

            <div className="header__search">
                {/* search icon */}
                
                <SearchIcon />
                <input type="text" />
            </div>


        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption avatar={avatar} title="me"/>

        </div>

    </div>
  )
}

export default Header