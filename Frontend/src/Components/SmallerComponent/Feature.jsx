import React from "react";
import LoginNav from "../LoginComponent/LoginNav";


const Feature = () => {
  return (
    <>
      <LoginNav />
      <div className="mt-4  blog-container">
        <h1 className="display-6 fw-bold ">Feature List</h1>
        <p>
        This is a non-exhaustive, non-priortised list of features that JS Bin has.<br/><br/>
        Please feel free to contribute to this list if you know of a feature, and add descriptions and demos where appropriate.
        </p>
        <ul>
            <li>Live reload both in editor and in full preview</li>
            <li>Console</li>
            <li>Full unmodified rendered view</li>
            <li>Gist support: import and export</li>
            <li>Processors</li>
        </ul>
        
      </div>
    </>
  );
};

export default Feature;
