// ConsoleEditor.js
import React, { useEffect, useRef, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const ConsoleEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const codeMirrorRef = useRef();

  const executeCode = (code) => {
    try {
      // Capture console.log output
      const originalLog = console.log;
      const outputArray = [];
      console.log = (...args) => outputArray.push(args.join(' '));

      // Evaluate the code
      const result = eval(code); // Use caution with eval
      setOutput(outputArray.join('\n') + (result !== undefined ? `\n${result}` : ''));

      // Restore original console.log
      console.log = originalLog;
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const handleRun = (event) => {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        executeCode(code);
      }
    };

    const codeMirrorInstance = codeMirrorRef.current?.getCodeMirror();
    if (codeMirrorInstance) {
      codeMirrorInstance.on('keydown', handleRun);
    }

    return () => {
      if (codeMirrorInstance) {
        codeMirrorInstance.off('keydown', handleRun);
      }
    };
  }, [code]);

  return (
    <div>
      <CodeMirror
        ref={codeMirrorRef}
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
          lineWrapping: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <button onClick={() => executeCode(code)}>Run</button>
      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default ConsoleEditor;
