// CanvasModel component for generating and rendering a canvas that will house the threejs model and its associated shadows and cameraRigs
// Imports for our threejs model
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    // Canvas of the rendered image
    <Canvas shadows camera={{position: [0, 0, 0], fov: 25}} gl={{preserveDrawingBuffer: true}} className='w-full max-w-full transition-all ease-in'>
      {/* Adding ambient lighting - style */}
      <ambientLight intensity={0.5}/>
      {/* Importing an environment for the canvas */}
      <Environment preset='city'/>
      {/* CameraRig */}
      <CameraRig>
        <Backdrop/>
        <Center>
          {/* Shirt Model */}
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
};

export default CanvasModel;
