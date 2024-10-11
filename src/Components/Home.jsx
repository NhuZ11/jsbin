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

  // Calculate the number of active panels
  const activePanelsCount = Object.values(panels).filter(Boolean).length;

  return (
    <>
      <TopSection />
      <Navbar togglePanel={togglePanel} panels={panels} />
      <div className="pane-container">
        <div
          className="editor-pane"
          style={{
            display: 'flex',
            gap: '4px',
            gridTemplateColumns: `repeat(${activePanelsCount}, 1fr)`,
          }}
        >
          {panels.html && (
            <div className="box">
              <Editor language="htmlmixed" value={html} onChange={setHtml} />
            </div>
          )}
          {panels.css && (
            <div className="box">
              <Editor language="css" value={css} onChange={setCss} />
            </div>
          )}
          {panels.js && (
            <div className="box">
              <Editor language="javascript" value={js} onChange={setJs} />
            </div>
          )}
          {panels.console && (
            <div className="box">
              <h4>Console Output</h4>
              <pre>{/* Console output goes here */}</pre>
            </div>
          )}
          {panels.output && (
            <div className="box">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
