import React, {useState, useContext} from "react";
import { Context } from '../App';
import { Link } from "react-router-dom";
import Icon from "../assets/jsbinimg.png";

const Navbar = ({ togglePanel, panels }) => {
  const { showTop, showView } = useContext(Context);
  return (
    <div className="container-fluid nav-background">
      
      <div className="row border py-2">
        
        {/* Start Section */}
        <div className="col  d-flex justify-content-start align-items-center gap-3">
        {showTop? <br/> :<p className="" onClick={showView}><img src={Icon} className="nav-icon" alt="" /></p>}
          <div className="dropdown">
            <button
              className="btn dropdown-toggle no-background"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              File
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-0">Add Library</p>
          <p className="mb-0">Share</p>
        </div>

        {/* Center Section */}
        <div className="col d-flex justify-content-center align-items-center gap-3">
          <div className="btn-group border border-3" role="group" aria-label="Basic example">
            <button type="button" className="btn" onClick={() => togglePanel('html')}>
              {/* {panels.html ? 'Hide HTML' : 'Show HTML'} */}
              HTML
            </button>
            <button type="button" className="btn" onClick={() => togglePanel('css')}>
              {/* {panels.css ? 'Hide CSS' : 'Show CSS'} */}
              CSS
            </button>
            <button type="button" className="btn" onClick={() => togglePanel('js')}>
              {/* {panels.js ? 'Hide JS' : 'Show JS'} */}
              JavaScript
            </button>
            <button type="button" className="btn" onClick={() => togglePanel('console')}>
              {/* {panels.console ? 'Hide Console' : 'Show Console'} */}
              Console
            </button>
            <button type="button" className="btn" onClick={() => togglePanel('output')}>
              {/* {panels.output ? 'Hide Output' : 'Show Output'} */}
              Output
            </button>
          </div>
        </div>

        {/* End Section */}
        <div className="col d-flex justify-content-end align-items-center gap-3">
          <Link className="mb-0 button-back no-underline" to='/register'>Login or Register</Link>
          <p className="mb-0">Blog</p>
          <p className="mb-0">Help</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
