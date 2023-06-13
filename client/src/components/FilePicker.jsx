import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({file, setFile, readFile}) => {
  return (
    // File Picker UI
    <div className="filepicker-container">
      {/* File Picker UI */}
      <div className="flex-1 flex-col">
        {/* Input and Label */}
        <input id="file-upload" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
        <label htmlFor="file-upload" className="filepicker-label">Upload File</label>
        {/* Display Uploaded file */}
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No File Selected" : file.name }
        </p>
      </div>
      {/* Wrappers For Buttons */}
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton type='outline' title="logo" handleClick={() => readFile('logo')} customStyles='text-xs'/>
        <CustomButton type='filled' title="Full" handleClick={() => readFile('full')} customStyles='text-xs'/>
      </div>
    </div>
  )
};

export default FilePicker;
