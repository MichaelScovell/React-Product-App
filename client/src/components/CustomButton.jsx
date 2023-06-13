import React from "react";
import { useSnapshot } from "valtio";
// import state
import state from "../store";

import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  // Defining state
  const snap = useSnapshot(state);
  // Defining a function for generateStyle
  const generateStyle = (type) => {
    // Check if the button is of the correct type
    if (type === "filled") {
      return {
        // Set background colors
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
    //
    else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  };
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
