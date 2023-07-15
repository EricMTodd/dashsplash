import { useEffect } from 'react'
import axios from 'axios'
import '../css/slideshow.css'

const Slideshow = () => {
  const flickrApiKey = '39ebf8206b5f188179bf4176fadf9407'
  // const flickrSecret = '5c2557b9fe96eff2'
  // const flickrUserId = '194608125@N04'
  const flickrUserId = '194608125%40N04'
  const flickrPhotoSetId = '72177720295944595'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickrApiKey}&photoset_id=${flickrPhotoSetId}&user_id=${flickrUserId}&per_page=300&format=json&nojsoncallback=1`
  // const imageUrlFormat = 'https://live.staticflickr.com/{server-id}/{id}_{secret}_b.jpg'
  let photos = []
  let imageUrls = []
  let imageUrlsIndex = 0
  
  
  useEffect(() => {
    let currentImage = document.querySelector('.current-image')
    let nextImage = document.querySelector('.next-image')
    axios.get(url)
    .then(response => {
      // console.log(response.data)
      photos = response.data.photoset.photo
      photos.forEach(photo =>  {
        imageUrls.push(`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`)
      })
      currentImage.src = imageUrls[imageUrlsIndex]
      nextImage.src = imageUrls[imageUrlsIndex + 1]
    })
    .catch(error => console.log(error))
  }, [])

  const switchImages = () => {
    let currentImage = document.querySelector('.current-image')
    let nextImage = document.querySelector('.next-image')
    imageUrlsIndex += 1
    currentImage.src = imageUrls[imageUrlsIndex]
    nextImage.classList.remove('fade')
    nextImage.src = imageUrls[imageUrlsIndex + 1]
  }

  const transitionImages = () => {
    let nextImage = document.querySelector('.next-image')
    nextImage.classList.add('fade')
    setTimeout(switchImages, 2000)
  }

  setInterval(transitionImages, 60000)

  return(
    <div className='slideshow-container'>
      <img src='#' alt='#' className='next-image' onClick={() => transitionImages()} />
      <img src='#' alt='#' className='current-image'  />
    </div>
  )
}

export default Slideshow