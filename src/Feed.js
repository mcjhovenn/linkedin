import React, {useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import WriteIcon from '@mui/icons-material/RateReview';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser); 

  /**DB mapping */
  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id : doc.id,
          data: doc.data(),
        }))
      )
     );
  }, []);
  

  const sendPost = (e) => {
    e.preventDefault(); /*stop the event on this case stop refreshing when pressing enter*/
    
    db.collection('posts').add({
      name: user.displayName,
      description : 'post',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  
    setInput("");
  };

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="yellow"/>
          <InputOption Icon={VideoIcon} title="Video" color="green"/>
          <InputOption Icon={EventIcon} title="Event" color="blue"/>
          <InputOption Icon={WriteIcon} title="Write artile" color="orange"/>
        </div>
      </div>

      {posts.map(({id, data: {name, description, message, 
      photoUrl}}) => (
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
