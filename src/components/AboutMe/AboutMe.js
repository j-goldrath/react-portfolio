// import React
import React from "react";

// import AboutMe.css
import "./AboutMe.css";

import profilePhoto from "./j-goldrath-profile-pic.png";

function AboutMe() {
    return (
        <div>
            <a id="about-me" />
            <div className="container">
                <div className="pt-5">
                    <img className="mx-auto d-block rounded-circle shadow" src={profilePhoto} alt="Jonathan Golrath Profile Portrait" />
                </div>
                <div className="about-me-paragraph" style={{ color: '#777', textAlign: 'justify', padding: '50px 80px' }}>
                    <h3 style={{ textAlign: 'center' }}>About Me</h3>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than
                        the
                        foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed
                        posuere
                        mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit
                        dignissim.
                        Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede,
                        nullam
                        vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at,
                        sodales
                        tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at
                        quibusdam
                        sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare.
                        Suscipit
                        proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat
                        leo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;