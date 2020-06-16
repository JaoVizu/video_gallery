import React from 'react'

//imagem
import video_img from './../assets/img/video_files.svg'


const Header = () => {
  return(
    <header className="bg-purple-500 py-6">
      <div className="flex items-center justify-center">
        <img 
          src={video_img} alt="Video Files"
          className="w-48 flex-shrink-0"
        />

        <h1 className="text-white text-2xl flex-shrink-0 ml-8">
          Videos from Pixabay
        </h1>
      </div>
    </header>
  )
}

export default Header;