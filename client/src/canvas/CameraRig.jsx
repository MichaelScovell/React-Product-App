// CameraRig component used in displaying the camera for our model
// Camera will be positioned and adjusted to display the model easily and responsively to ensure that it can be viewed across all devices (mobile, website etc)

// Defining imports
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import state from '../store';

const CameraRig = ({children}) => {
	// Create a new ref var for updating state
	const group = useRef();
	// Get state from state file
	const snap = useSnapshot(state);

	// Use Frame hook for rendering frame in the app
	useFrame((state, delta) => {
		// Creating variables to control responsiveness across devices
		const isBreakpoint = window.innerWidth <= 1260;
		const isMobile = window.innerWidth <= 600;

		// Set the Model's initial position
		let targetPosition = [-0.4, 0, 2];

		// Defining logic to adjust model's location on screen based on device screen size (responsiveness) using the camera

		// If on home page - set camera to the specified position
		if(snap.intro) {
			// Reposition model on the home page
			if(isBreakpoint) targetPosition = [0, 0, 2];
			// Reposition model on home page viewed on mobile device
			if(isMobile) targetPosition = [0, 0.2, 2.5];
		}
		// Else if on customizer page, adjust location to fit screensize for devices
		else {
			// Reposition model on the customizer page viewed on mobile device
			if(isMobile) targetPosition = [0, 0.2, 2.5];
			// Reposition model on the customizer page
			else targetPosition = [0, 0, 2];		

		}

		// Set Model Camera Position
		easing.damp3(state.camera.position, targetPosition, 0.25, delta);

		// Set Model Rotation
		easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta)
	})


	return (
		<group ref={group}>{children}</group>
	)
}

export default CameraRig