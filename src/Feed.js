import ImageIcon from '@mui/icons-material/Image'
import CreateIcon from '@mui/icons-material/Create'
import React from 'react'
import './Feed.css'
import InputOption from './InputOption'
import { CalendarViewDay, EventNote, Subscriptions } from '@mui/icons-material'
import Post from './Post'


function Feed() {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5f9"/>
                <InputOption Icon={Subscriptions} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNote} title='Event' color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDay} title='Write article' color="#7fc15e"/>
            </div>
        </div>

        <Post name='sonny sangha' description='test' message='wow this worked'/>

    </div>
  )
}

export default Feed