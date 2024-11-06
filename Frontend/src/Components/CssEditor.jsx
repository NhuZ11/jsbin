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
              CSS
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Less
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Myth
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Stylus
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Convert To CSS
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
