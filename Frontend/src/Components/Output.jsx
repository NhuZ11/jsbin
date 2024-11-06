import React from 'react'

const Output = (props) => {
  return (
    <div className="box" style={{fontSize: 14,}}>
    <div className="d-flex">
      <p className="p-2">Output</p>
      <p className="border border-2 ms-5 mt-2 px-1" onClick={props.runCode}>Run with JS</p>
      <p className="ms-2 mt-2">
        Auto run-JS <input type="checkbox" />
      </p>
    </div>
    <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
    />
  </div>
  )
}

export default Output
