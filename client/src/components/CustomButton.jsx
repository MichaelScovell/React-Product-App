// Custom Button Component
// This component contains the UI and logic needed to render custom buttons that are utlized throughout the application
import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  // Defining state from state file
  const snap = useSnapshot(state);
  // Defining a function for generating the style of buttons
  const generateStyle = (type) => {
    // Check the buttons type (filled = filled in button style else outline = outlined style)
    if (type === "filled") {
      return {
        // Set background colors to fill
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
    // else if outline, apply outline style
    else if (type === 'outline') {
      return {
        // Apply outline style
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  };
  // Custom Button UI
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
