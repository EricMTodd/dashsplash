import '../css/clock.css'

const Clock = () => {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let meridiem

  if (hour > 12) {
    hour = hour -12
    meridiem = 'PM'
  } else {
    meridiem = 'AM'
  }
  
  return(
    <div className='clock-container'>
      <h1>{hour}:{minute} {meridiem}</h1>
    </div>
  )
}

export default Clock