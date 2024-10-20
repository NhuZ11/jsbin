import React, { useState, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const ConsoleEditor = (props) => {
  const [consoleOutput, setConsoleOutput] = useState('');

  // Function to run the JavaScript code
  const runCode = (code) => {
    try {
      // Capture console.log output
      const log = [];
      const originalLog = console.log;
      console.log = (...args) => log.push(args.join(' '));

      // Use eval to run the JS code
      eval(code);

      // Restore original console.log
      console.log = originalLog;

      // Set the captured console output
      setConsoleOutput(log.join('\n'));
    } catch (error) {
      // Display any errors in the console output
      setConsoleOutput(error.toString());
    }
  };

  // Function to clear the console output
  const clearConsole = () => {
    setConsoleOutput('');
  };

  // Automatically run code when props.value changes
  useEffect(() => {
    if (props.value.trim()) {
      runCode(props.value);
    }
  }, [props.value]); // Runs the code whenever the JavaScript input (props.value) changes

  return (
    <div className="box">
      <div className='d-flex gap-5 mt-2 ms-2'>
        <p>Console</p>
        <p className='border border-2 ms-5' onClick={clearConsole} style={{cursor: 'pointer'}}>Clear</p>
      </div>

      {/* Console Output */}
      <div className="console-output mt-3">
        <pre>{consoleOutput}</pre>
      </div>
    </div>
  );
};

export default ConsoleEditor;
