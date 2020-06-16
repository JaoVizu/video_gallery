import React, { useState,useEffect } from 'react';

// services
import VideoApi from './services/api'

import VideoCard from './components/VideoCard'

function App() {

  const [videos, setVideo] = useState([]);

  useEffect(() => {
    VideoApi(setVideo)
  }, [])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {videos.map(video => (
          <VideoCard video={video}/>
        ))}  
      </div>
      
    </div>
  );
}

export default App;
