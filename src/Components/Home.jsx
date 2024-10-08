import React, { useState, useEffect } from 'react';
import TopSection from './TopSection';
import Navbar from './Navbar';
import Editor from './Editor';

const Home = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  // State to manage visibility of each panel
  const [panels, setPanels] = useState({
    html: true,
    css: true,
    js: true,
    console: true,
    output: true,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const togglePanel = (panel) => {
    setPanels((prevPanels) => ({
      ...prevPanels,
      [panel]: !prevPanels[panel],
    }));
  };

  return (
    <>
      <div>
        <TopSection />
        <Navbar togglePanel={togglePanel} panels={panels} />
      </div>
      <div>
        <div className="pane-container">
          <div className="editor-pane">
            {panels.html && (
              <Editor language="htmlmixed" value={html} onChange={setHtml} />
            )}
            {panels.css && (
              <Editor language="css" value={css} onChange={setCss} />
            )}
            {panels.js && (
              <Editor language="javascript" value={js} onChange={setJs} />
            )}
            {panels.console && (
              <div>
                <h4>Console Output</h4>
                {/* Implement your console output logic here */}
                <pre>{/* Console output goes here */}</pre>
              </div>
            )}
            {panels.output && (
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
