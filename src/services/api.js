import axios from 'axios'

const VideoApi = (setVideo, term) => {
  axios.get(`https://pixabay.com/api/videos/?key=5455570-939661afcfaa55944a6fc6b44&q=${term}&pretty=true`)
  .then(response => setVideo(response.data.hits))
  .catch( err => console.log(err))
}

export default VideoApi