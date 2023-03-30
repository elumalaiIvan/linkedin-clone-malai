import ImageIcon from '@mui/icons-material/Image'
import CreateIcon from '@mui/icons-material/Create'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import { CalendarViewDay, EventNote, Subscriptions } from '@mui/icons-material'
import Post from './Post'
import { db } from './firebase.js'
import { collection, doc, onSnapshot, addDoc, Timestamp } from "firebase/firestore";


function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([])

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskCollectionRef = collection(db, 'posts');

    onSnapshot(taskCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  /* function to add new task to firestore */
  const sendPost = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'posts'), {
        name: 'malai',
        description: 'test',
        message: input,
        photoUrl: '',
        timestamp: Timestamp.now()
        // created: Timestamp.now()
      })

    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input onChange={e => setInput(e.target.value)} type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5f9" />
          <InputOption Icon={Subscriptions} title='Video' color="#E7A33E" />
          <InputOption Icon={EventNote} title='Event' color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title='Write article' color="#7fc15e" />
        </div>
      </div>

      {posts.map((post) => {
        return <Post />
      })}

      <Post name='sonny sangha' description='test' message='wow this worked' />

    </div>
  )
}

export default Feed