import React, {useRef} from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  return (
    // Backdrop Component for displaying shadows and lighting
    <AccumulativeShadows position={[0, 0, -0.14]}>
      <RandomizedLight amount={4}/>
    </AccumulativeShadows>
  )
}

export default Backdrop