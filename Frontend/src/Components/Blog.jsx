import React from "react";
import LoginNav from "./LoginComponent/LoginNav";

const Blog = () => {
  return (
    <>
      <LoginNav />
      <div className="mt-4  blog-container">
        <h1 className="display-6 fw-bold ">The JS Bin Blog</h1>
        <div className="mb-5">
          <p>31-Jan, 2018 &nbsp;&nbsp; The Return and The Refactor</p>
          <p>
            {" "}
            Hello there dear reader. Remember me? 😃 It’s been almost 2 years
            since the last blog post and I can imagine it has felt like JS Bin
            has been the same for a little while now. Read post
          </p>
        </div>
        <div className="mb-5">
          <p>4-Jul, 2015 &nbsp;&nbsp; Live reloading CSS</p>
          <p>
            {" "}
            Due to a few recent optimisations in the JS Bin rendering logic, we
            now have live reloading CSS in the editor.
          </p>
        </div>
        <div className="mb-5">
          <p>21-Jun, 2015 &nbsp;&nbsp; SSL now available to all</p>
          <p>
            {" "}
            As the web moves towards using HTTPS everywhere, JS Bin has moved
            SSL from being a “pro only” feature to making it available to
            everyone as of today. Read post
          </p>
        </div>
        <div className="mb-5">
          <p>16-Jun, 2015 &nbsp;&nbsp; A change to the way our URLs work</p>
          <p>
            {" "}
            We’ve just landed a change to the way JS Bin URLs work, and though
            the new way aims to be intuitive and backward compatible, some of
            you sharp sighted users might have spotted the change already and
            wondering what changed and why. Read post
          </p>
        </div>
        <div className="mb-5">
          <p>15-May, 2014 &nbsp;&nbsp; TWDTW #8: SVG support and settings live</p>
          <p>
            {" "}
            With Giulia back from holiday and Remy easing back into work, the
            Left Logic offices have been a bit more lively, and pushing a few
            more bits to production.
          </p>
        </div>
        <div className="mb-5">
          <p>9-May, 2014 &nbsp;&nbsp; How I run JS Bin in Zen mode!</p>
          <p>
            {" "}
            Since using JS Bin, I’ve discovered a number of ways to customise it
            to my liking, and I wanted to share how I’m running in Zen mode!
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
