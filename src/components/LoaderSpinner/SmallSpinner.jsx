import React from "react";
import './MainSpinner.css'

const SmallSpinner = () => {
  return (
    <div>
      <div class="flex items-center justify-center">
        <div class="spinner border-4 border-t-4 border-dashed border-gray-500 rounded-full h-4 w-4 "></div>
      </div>
    </div>
  );
};

export default SmallSpinner;
