// Customizer page

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
  // Check state
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
				return <FilePicker/>
			// If tab is the ai picker, return the ai picker component
			case "aipicker":
				return <AIPicker/>
			// Else, return null (as no options have been selected)
			default:
				return null;
		}
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
                    isActiveTab=""
                    handleClick={() => {}}
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
