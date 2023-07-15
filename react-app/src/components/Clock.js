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

  if (minute < 10) {
    minute = '0' + minute
  }
  
  return(
    <span className='clock-container'>
      {hour}:{minute} {meridiem}
    </span>
  )
}

export default Clock