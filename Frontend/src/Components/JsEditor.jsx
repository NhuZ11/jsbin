import React from 'react'
import Editor from "./Editor";
import 'codemirror/mode/javascript/javascript';

const JsEditor = (props) => {
  return (
    <div className="box js-editor">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle no-background text-primary"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          JavaScript
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              JavaScript
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              ES6/Babel
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              JSX
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              CoffeeScript
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Traceur
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              TypeScript
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Processing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              LiveScript
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
  )
}

export default JsEditor
