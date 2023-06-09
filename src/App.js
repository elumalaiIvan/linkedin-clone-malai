import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      {
        !user ? <Login /> :
          (
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>

          )
      }
    </div>
  );
}

export default App;
