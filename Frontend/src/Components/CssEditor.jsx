import React from "react";
import Editor from "./Editor";
import "codemirror/mode/css/css";

const CssEditor = (props) => {
  return (
    <div className="box">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle no-background text-primary"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          CSS
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <Editor
        language={props.language}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CssEditor;