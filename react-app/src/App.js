import Slideshow from './components/Slideshow.js'
import Clock from './components/Clock.js'
import Weather from './components/Weather.js'
import './css/app.css'

const App = () => {
  return(
    <div className='app'>
      <Slideshow />
      <div className='info-container'>
        <Weather />
        <Clock />
      </div>
    </div>
  )
}

export default App