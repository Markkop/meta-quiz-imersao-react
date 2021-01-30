
import Lottie from 'lottie-react'
import catAnimation from '../../../../assets/lottie-cat.json'

function Cat () {
  return (
    <Lottie
      style={{
        position: 'absolute',
        transform: 'translate(-180px, 150px)'
      }}
      animationData={catAnimation}>
    </Lottie>
  )
}

export default Cat
