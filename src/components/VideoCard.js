import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={video.id}>
        <video 
          src={video.videos.small.url} controls={true}
          className="w-full"
        >
        </video>
        <div className=" px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Video By {video.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {video.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {video.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {video.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Flower</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Nature</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#Yellow</span>
        </div>
      </div>
  )
}

export default VideoCard