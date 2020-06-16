import React, { useState,useEffect } from 'react';

// services
import VideoApi from './services/api'

// components
import VideoCard from './components/VideoCard'
import Search from './components/Search'

function App() {

  const [videos, setVideo] = useState([]);

  useEffect(() => {
    VideoApi(setVideo)
  }, [])

  return (
    <div className="container mx-auto">
      <Search />
      <div className="grid grid-cols-4 gap-3">
        {videos.map(video => (
          <VideoCard video={video}/>
        ))}  
      </div>
      
    </div>
  );
}

export default App;
