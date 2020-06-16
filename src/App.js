import React, { useState,useEffect } from 'react';

// services
import VideoApi from './services/api'

// components
import Header from './components/Header'
import VideoCard from './components/VideoCard'
import Search from './components/Search'

function App() {

  const [videos, setVideo] = useState([]);
  const [term, searchTerm] = useState('')

  useEffect(() => {
    VideoApi(setVideo, term)
  }, [term])

  return (
    <>
    <Header />
    <div className="container mx-auto">
      <Search searchText={(text) => searchTerm(text)}/>
      {videos.length === 0 && <h1 class="text-4xl text-purple-700 text-center font-extrabold">No videos found!!</h1>}
      <div className="grid grid-cols-4 gap-3">
        {videos.map(video => (
          <VideoCard video={video}/>
        ))}  
      </div>
      
    </div>
    </>
  );
}

export default App;
