// AI Picker component
// This component will house the UI needed for providing prompts for the AI (Dalle image generator)

// Defining imports
import React from "react";
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
	return (
		// AI Picker Component
		<div className="aipicker-container" >
			{/* Generating text area to send prompt */}
			<textarea className="aipicker-textarea" placeholder="Ask AI" rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
			{/* Buttons for submitting prompts */}
			<div className="flex flex-wrap gap-3">
				{/* Logic for generating textures based on selected buttons through invoking ai functions through the backend server*/}
				{generatingImg ? (
					<CustomButton type="outline" title="Asking AI..." customStyles="text-xs" />
				) : (
					<>
					{/* Logo Picker Gen Button */}
					<CustomButton type='filled' title='AI Logo' handleClick={() => handleSubmit('logo')} customStyles='text-xs'/>
					{/* Full texture Picker Gen Button */}
					<CustomButton type='filled' title='AI Full' handleClick={() => handleSubmit('full')} customStyles='text-xs'/>
					</>
					
			)}
			</div>
		</div>
	)
};

export default AIPicker;
