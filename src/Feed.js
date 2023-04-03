import ImageIcon from '@mui/icons-material/Image'
import CreateIcon from '@mui/icons-material/Create'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import { CalendarViewDay, EventNote, Subscriptions } from '@mui/icons-material'
import Post from './Post'
import { db } from './firebase.js'
import { collection, doc, onSnapshot, addDoc, Timestamp, query, orderBy } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'


function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([])

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskCollectionRef = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

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
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: Timestamp.now()
        // created: Timestamp.now()
      })
      setInput('')
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
            <input onChange={e => setInput(e.target.value)} value={input} type="text" />
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

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        })}
      </FlipMove>
    </div>
  )
}

export default Feed