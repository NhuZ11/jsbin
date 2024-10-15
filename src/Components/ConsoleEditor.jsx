// ConsoleEditor.js
import React, { useEffect, useRef, useState } from 'react';
import Editor from "./Editor";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const ConsoleEditor = (props) => {
  return(
    <div className="box">
        <div className='d-flex gap-5 ms-2'>
        <p>Console</p>
        <p className='border ms-5'>Clear</p>
        </div>
        <Editor language={props.language} value={props.value} onChange={props.onChange} />
      </div>
  )
};

export default ConsoleEditor;
