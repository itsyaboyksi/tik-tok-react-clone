import React, { useState, useEffect } from 'react';
import Video from "./Video.js"
import './App.css';
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);



  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, channel, description, likes, messages, shares, song }) => (
          <Video
            // url="https://i.imgur.com/UhZeBv3.mp4"
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares} />
        ))}
      </div>
    </div>
  );
}

export default App;
