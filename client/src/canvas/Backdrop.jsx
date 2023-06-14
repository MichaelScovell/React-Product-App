// Backdrop component for displaying shadows behind the shirt model

// Defining imports
import React, {useRef} from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  // Define a reference variable for shadows
  const shadows = useRef();
  // Backdrop Component UI
  return (
    // Backdrop Component for displaying shadows and lighting
    <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={10} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.14]}>
      {/* Shadow rendering from Left */}
      <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]}/>
      {/* Shadow rendering from right */}
      <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]}/>
    </AccumulativeShadows>
  )
}

// Exporting component to be used within the application
export default Backdrop;