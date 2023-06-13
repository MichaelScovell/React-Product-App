import React from "react";
import {SketchPicker} from 'react-color'
import { useSnapshot } from "valtio";
import state from "../store";
import { color } from "framer-motion";

const ColorPicker = () => {
  // Obtain State
  const snap = useSnapshot(state);

  // Define variable for our ColorPicker
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
        ]} // Additional ones to add: #5f13d #512314 #ff96ad
      />
    </div>
  )
};

export default ColorPicker;
