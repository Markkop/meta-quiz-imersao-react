import Lottie from 'lottie-react'
import sandClockTimerAnimation from '../../../../sand-clock-timer.json'

function LoadingWidget () {
  return <Lottie animationData={JSON.parse(sandClockTimerAnimation)}/>
}

export default LoadingWidget
