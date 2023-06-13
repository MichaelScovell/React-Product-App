import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
	// Define state
	const snap = useSnapshot(state);
	// Define active styles var
	const activeStyles = isFilterTab && isActiveTab ? {backgroundColor: snap.color, opacity: 0.5} : {backgroundColor: 'transparent', opacity: 1 }
	return (
		// Tab Component
		<div key={tab.name} className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`} onClick={handleClick} style={activeStyles}>
			{/* Rendered Icons */}
			<img src={tab.icon} alt={tab.name} className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}/>
		</div>

	)
}

export default Tab