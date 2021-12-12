// import React
import React from 'react';

// imported css file
import './Jumbotron.css';


function Jumbotron() {
  return (
    <div>
        <a id="home" />
        <div className="galaxy-bg">
          <div className="px-4 py-5 my-5 text-center text-white">
            <h1 className="mt-5 display-5 fw-bold landing-hero">Hi, my name is <span className="text-info">Jonathan Goldrath</span>
            </h1>
            <div className="col-lg-6 mx-auto">
              <hr className="border-2" />
              <p className="lead mb-4">Full-Stack Developer | Engineer | Creative Problem Solver</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                {/* <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button> */}
                <button onclick="location.href='#contact'" type="button" className="btn btn-outline-secondary btn-lg px-4">Get
                  In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Jumbotron;