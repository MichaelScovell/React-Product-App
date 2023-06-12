// Defining imports for our Shirt Model
import React from 'react'
import {easing} from 'maath'
import {useSnapshot} from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
	// Checking state
  const snap = useSnapshot(state);
	// Loading in our materials and model
	const {nodes, materials} = useGLTF('/shirt_baked.glb');
	const logoTexure = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	return (
		<group>
			{/* Rendering our Model */}
			<mesh 
			castShadow
			geometry={nodes.T_Shirt_male.geometry}
			material={materials.lambert1} 
			material-roughness={1}
			dispose={null}
			>
			</mesh>
		</group>
	)
}

export default Shirt