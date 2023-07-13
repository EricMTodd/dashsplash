import { useEffect, useState } from 'react'
import axios from 'axios'

const Slideshow = () => {
  const [photos, setPhotos] = useState([])
  const flickrApiKey = '39ebf8206b5f188179bf4176fadf9407'
  const flickrSecret = '5c2557b9fe96eff2'
  // const flickrUserId = '194608125@N04'
  const flickrUserId = '194608125%40N04'
  const flickrPhotoSetId = '72177720295944595'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickrApiKey}&photoset_id=${flickrPhotoSetId}&user_id=${flickrUserId}&per_page=300&format=json&nojsoncallback=1`
  const imageUrlFormat = 'https://live.staticflickr.com/{server-id}/{id}_{secret}_b.jpg'

  useEffect(() => {
    axios.get(url)
    .then(response => {
      console.log(response.data.photoset.photo)
      setPhotos(response.data.photoset.photo)
    })
    .catch(error => console.log(error))
  }, [])
  
  return(
    <div className='slideshow-container'>
      Slideshow
      <img src={`https://live.staticflickr.com/${photos[0].server}/${photos[0].id}_${photos[0].secret}_b.jpg`} />
    </div>
  )
}

export default Slideshow