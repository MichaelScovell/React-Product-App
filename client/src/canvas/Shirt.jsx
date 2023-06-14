// Shirt Model component
// This component will house the logic and UI needed for the shirt model, which will be rendered within the canvas (index.js)

// Defining imports for our Shirt Model
import React from 'react'
import {easing} from 'maath'
import {useSnapshot} from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
	// Checking state from state file
  const snap = useSnapshot(state);
	// Loading in our model's materials and model
	const {nodes, materials} = useGLTF('/shirt_baked.glb');
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	// Apply Color to shirt model - initial styling
	useFrame((state, delta) => easing.dampC(materials.lambert1.color,snap.color, 0.25, delta));

	// Creating state for updating the shirt color
	const stateString = JSON.stringify(snap)

	// Shirt UI 
	return (
		<group key={stateString}>
			{/* Rendering our Model - by defining a mesh */}
			<mesh 
			castShadow
			geometry={nodes.T_Shirt_male.geometry}
			material={materials.lambert1} 
			material-roughness={1}
			dispose={null}
			>
			{/* Display the full texture */}
			{/* Check fulltexture state */}
			{snap.isFullTexture && (
				<Decal
				position={[0, 0, 0]}
				rotation={[0, 0, 0]}
				scale={1}
				map={fullTexture}
				/>
			)}
			{/* Display the Logo texture */}
			{/* Check LogoTexture state */}
			{snap.isLogoTexture && (
				<Decal
				position={[0, 0.04, 0.15]}
				rotation={[0, 0, 0]}
				scale={0.15}
				map={logoTexture}
				map-anisotropy={16}
				depthTest={false}
				depthWrite={true}
				/>
			)}			
			</mesh>
		</group>
	)
}

export default Shirt