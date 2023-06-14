// Customizer page
// This page contains both the logic and UI needed for users to create custom shirts using AI, File and Color Pickers whilst also toggling full and logo textures

// Imports for libs and helper functions
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

// Imports for components
import { download } from "../assets";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

const Customizer = () => {
  // Check state from state file
  const snap = useSnapshot(state);

	// Define a local state variable for file, prompt and loading
	const [file, setFile] = useState('');
	const [prompt, setPrompt] = useState('');
	const [generatingImg, setGeneratingImg] = useState(false);
	const [activeEditorTab, setActiveEditorTab] = useState('');
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true,
		stylishShirt: false
	})	

	// Define a new function for displaying tab content depending on the activeTab
	const generateTabContent = () => {
		switch (activeEditorTab) {
			// If tab is the color picker, return the color picker component
			case "colorpicker":
				return <ColorPicker/>
			// If tab is the file picker, return the file picker component
			case "filepicker":
				return <FilePicker
					file={file}
					setFile={setFile}
					readFile={readFile}
					/>
			// If tab is the ai picker, return the ai picker component
			case "aipicker":
				return <AIPicker
					prompt={prompt} 
					setPrompt={setPrompt}
					generatingImg={generatingImg}
					handleSubmit={handleSubmit}
					/>
			// Else, return null (as no options have been selected)
			default:
				return null;
		}
	}

	// Define a function for handling the AI submit through invoking the backend
	const handleSubmit = async (type) => {
		// Check that there is not a prompt
		if (!prompt) {
			return alert("Please enter a prompt")
		}
		try {
			// Invoke our backend to generate an AI image
			// Set generatingImg state
			setGeneratingImg(true);
			// Send the request to the backend api
      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })
			// Fetch the response from the api call
			const data = await response.json()

			// Obtain the return image and apply to model
			handleDecals(type, `data:image/png;base64,${data.photo}`)
			
		} catch (error) {
			alert(error)
		} finally {
			// Reset the loader
			setGeneratingImg(false);
			setActiveEditorTab("")
		}
	}

	// Define a function for handling decals (obtained from readFiles)
	const handleDecals = (type, result) => {
		// Define variable for obtaining decalType
		const decalType = DecalTypes[type];
		// Obtain state of decal
		state[decalType.stateProperty] = result;

		// Check currently active decal
		if(!activeFilterTab[decalType.filterTab]) {
			// Call the HandleActiveFilterTab
			handleActiveFilterTab(decalType.filterTab);
		}
	}

	// Define a function for handling the active filter tab
	const handleActiveFilterTab = (tabName) => {
		switch (tabName) {
			// If logoShirt is active
			case "logoShirt":
				// Toggle LogoShirt texture 
				state.isLogoTexture = !activeFilterTab[tabName];
				break;
			// Toggle stylishShirt active
			case "stylishShirt":
				state.isFullTexture = !activeFilterTab[tabName];
				break;
			// Else default
			default:
				state.isLogoTexture = true;
				state.isFullTexture = false;
				break;
		}
		// Set active filter tab to update UI after state change
		setActiveFilterTab((prevState) => {
			return {
				...prevState,
				[tabName]: !prevState[tabName]
			}
		})
	}

	// Define a function for reading files and display content as rendered decals for the shirt
	const readFile = (type) => {
		// Pass file to Reader, to obtain files details
		reader(file)
		.then((result) => {
			// Display returned result as decals to be displayed on the shirt
			handleDecals(type, result);
			setActiveEditorTab("");
		})
	}

  return (
    // Wrap in animation
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Motion Div for the AI, Color and File Picker UI - EDITOR TABS */}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {/* Get the tabs and return each corresponding component through mapping */}
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  >
                  </Tab>
                ))}
				{/* Calling the generateTabContent function */}
				{generateTabContent()}
              </div>
            </div>
          </motion.div>
          {/* Back Button */}
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <CustomButton type={"filled"} title={"Go Back"} handleClick={() => state.intro = true} customStyles="w-fit px-4 py-2.5 font-bold text-sm"></CustomButton>
          </motion.div>
          {/* Shirt Customizer Toggle Buttons */}
          <motion.div className="filtertabs-container" {...slideAnimation('up')}>
                {FilterTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab={activeFilterTab[tab.name]}
                    handleClick={() => handleActiveFilterTab(tab.name)}
                  >
                  </Tab>
                ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
