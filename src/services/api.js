import axios from 'axios'

const VideoApi = (setVideo) => {
  axios.get('https://pixabay.com/api/videos/?key=5455570-939661afcfaa55944a6fc6b44&q=random&pretty=true')
  .then(response => setVideo(response.data.hits))
  .catch( err => console.log(err))
}

export default VideoApi