import React ,{useState, useEffect} from "react";
import Editor from "./Editor";
import 'codemirror/mode/htmlmixed/htmlmixed';

const HtmlEditor = (props) => {
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
            HTML
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                HTML
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Markdown
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Jade
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Convert To HTML
              </a>
            </li>
          </ul>
        </div>
        <div className="inner-box">
        <Editor language={props.language} value={props.value} onChange={props.onChange} />
        </div>
      </div>
  );
};

export default HtmlEditor;
