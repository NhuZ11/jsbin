import React, { useState, useEffect, useContext } from "react";
import TopSection from "./TopSection";
import Navbar from "./Navbar";
import Editor from "./Editor";
import { Context } from '../App';
import HtmlEditor from "./htmlEditor";
import CssEditor from "./CssEditor";
import JsEditor from "./JsEditor";
import ConsoleEditor from "./ConsoleEditor";

const Home = () => {

 const {runCode} = useContext(Context); //for run as js

  //state for topview toggle
  const [showTop, setShowtop] = useState(true)
  const showView = ()=>{
    setShowtop(false)
  }

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

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
    {showTop && <TopSection value={true} />}
      
      <Navbar togglePanel={togglePanel} panels={panels} />
      <div className="pane-container">
        <div
          className="editor-pane"
          style={{
            display: "flex",
            gap: "4px",
            gridTemplateColumns: `repeat(${activePanelsCount}, 1fr)`,
          }}
        >
          {panels.html && (
            <HtmlEditor language="htmlmixed" value={html} onChange={setHtml} />
          )}
          {panels.css && (
            <CssEditor language="css" value={css} onChange={setCss} />
          )}
          {panels.js && (
            <JsEditor language="javascript" value={js} onChange={setJs} />
          )}
          {panels.console && (
           <ConsoleEditor language="javascript" value={js} onChange={setJs}/>
          )}
          {panels.output && (
            <div className="box" style={{fontSize: 14}}>
              <div className="d-flex">
                <p className="p-2">Output</p>
                <p className="border border-2 ms-5 mt-2 px-1" onClick={runCode}>Run with JS</p>
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
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
