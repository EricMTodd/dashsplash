import { useEffect } from 'react'
import '../css/weather.css'

const Weather = () => {

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }

  const showPosition = (position) => {
    console.log(position)
  }

  useEffect(() => {
    getLocation()
  }, [])

  return(
    <span className='weather-container'>
      Weather
    </span>
  )
}

export default Weather