import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) => {
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYddnvzBoo6GNq9E57UWkl8DWOAGtb2QEyB1bu6HmE&s" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Sonny sangha</h2>
            <h4>Sonny.sangha@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar