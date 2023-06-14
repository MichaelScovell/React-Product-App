// Color Picker Component
// This color picker component contains the logic and UI for enabling a user to create and apply a custom color to the rendered shirt

// Define imports
import React from "react";
import {SketchPicker} from 'react-color'
import { useSnapshot } from "valtio";
import state from "../store";
import { color } from "framer-motion";

const ColorPicker = () => {
  // Obtain State from state file
  const snap = useSnapshot(state);

  // Color Picker UI
  return (
    <div className="absolute left-full ml-3">
      {/* SketchPicker - Color Picker */}
      <SketchPicker color={snap.color} 
        disableAlpha 
        onChange={(color) => state.color = color.hex}
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#80c670",
          "#353934",
          "#2ccce4",
          "#ff8a65",
          "#7098da",
          "c19277",
          "#e8632c"
        ]} // Additional preset colors to add: #5f13d #512314 #ff96ad
      />
    </div>
  )
};

export default ColorPicker;
