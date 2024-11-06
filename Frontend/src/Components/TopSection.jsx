import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import Icon from "../assets/jsbinimg.png";

const TopSection = () => {
  const { showTop, showView  } = useContext(Context);

  return (
    <div className="container-fluid pt-3 top-style">
      {showTop && (
        <div className="row">
          <div className="col-md-2 d-flex flex-column justify-content-center ">
            <button
              className="btn rounded-0 align-self-start" // Align to the left
              onClick={showView}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={Icon} className="icon-image ms-5" alt="bin" />
            <button
              className="btn border border-primary pb-2 py-1 mt-3 rounded-0 shadow-sm mb-2 text-primary"
              onClick={() => {
                window.location.reload();
              }}
            >
              New Bin
            </button>
          </div>
          <div className="col-md-2">
            <p className="fw-bold text-primary mb-1">
              <Link className=" no-underline" to="/features">
                JS Bin features
              </Link>
            </p>
            <p className="text-primary mb-2">
              <Link className=" no-underline" to="/binfeatures">
                Getting started
              </Link>
            </p>
            <p className="text-primary mb-2">
              <Link className=" no-underline" to="/binfeatures">
                Keyboard Shortcuts
              </Link>
            </p>
            <p className="text-primary">
              <Link className=" no-underline" to="/binfeatures">
                Exporting/importing gist
              </Link>
            </p>
            <p className="text-primary mt-4">
              <Link className=" no-underline" to="/binfeatures">
                <input type="checkbox" name="" id="" />
                Textarea editor mode
              </Link>
            </p>
          </div>
          <div className="col-md-2">
            <p className="fw-bold text-primary mb-1">
              <Link className=" no-underline" to="/binfeatures">
                Pro features
              </Link>
            </p>
            <p className="text-primary mb-2">
              <Link className=" no-underline" to="/binfeatures">
                Private bins
              </Link>
            </p>
            <p className="text-primary">
              <Link className=" no-underline" to="/binfeatures">
                Vanity URLs
              </Link>
            </p>
            <button className="btn btn-success py-1 px-2 mt-3 ">
              Upgrade to pro now
            </button>
          </div>
          <div className="col-md-2">
            <p className="fw-bold text-primary mb-1">
              <Link className="no-underline" to="/blog">
                Blog
              </Link>
            </p>
            <p className="text-primary mb-1">
              <Link className="no-underline" to="/binfeatures">
                The Return and The Refactor
              </Link>
            </p>
            <p className="fw-bold text-primary mb-1">
              <Link className="no-underline" to="/binfeatures">
                Help
              </Link>
            </p>
            <p className="text-primary mb-1">
              <Link className="no-underline" to="/binfeatures">
                How to link multiple bins
              </Link>
            </p>
            <Link className="text-primary no-underline mb-1" to="/binfeatures">
              Vanity URLs
            </Link>
          </div>

          <div className="col-md-2">
            <p className="fw-bold text-primary mb-1">
              <Link className=" no-underline" to="/binfeatures">
                Donate to JS Bin
              </Link>
            </p>
            <p className="text-primary mb-2">
              <Link className=" no-underline" to="/binfeatures">
                Support JS Bin to keep the project open source & MIT for all
              </Link>
            </p>
            <p className="text-primary mb-2">
              <Link className=" no-underline" to="/binfeatures">
                Follow @js_bin on twitter
              </Link>
            </p>
            <p className="text-primary mb-2">
              <Link className=" no-underline" to="/binfeatures">
                By using JS Bin you agree to our legal terms
              </Link>
            </p>
          </div>
          <div className="col-md-2">
            <p>
              "Everyone should learn how to program a computer because it
              teaches you how to think"--Steve Jobs
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSection;
