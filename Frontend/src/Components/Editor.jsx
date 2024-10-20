import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/theme/material.css';


const Editor = ({ language, value, onChange }) => {
  return (
    <CodeMirror
      value={value.trimStart()}
      options={{
        mode: language,
        theme: 'default',
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        onChange(value);
      }}
    />
  );
};

export default Editor;
