import React from "react";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml' 
import { Controlled as ControlledEditor } from "react-codemirror2";

const HtmlEditor = () => {
  return (
    <div className="editor-container">
        <div className="editor-title">
            <p>HTML</p>
            <ControlledEditor 
            
            
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: XMLDocument,
                lineNumbers: true
            }}
            />
        </div>

    </div>
  );
};

export default HtmlEditor;
