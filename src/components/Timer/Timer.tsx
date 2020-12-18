
const Timer = (timerInSeconds: number):Array<number|string> => {
  let hours: number = Math.floor(timerInSeconds / 3600);
  let minutes: number = Math.floor((timerInSeconds - (hours * 3600)) / 60);
  let seconds: number = timerInSeconds - (hours * 3600) - (minutes * 60)

  let hoursFormat = hours < 10 ? `0${hours}` : hours
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds

  return [
      hoursFormat,
      minutesFormat,
      secondsFormat
  ]  
}

export default Timer