// import React
import React from "react";

// import Portfolio.css
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 px-3 g-3 justify-content-center">
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-1 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" rel="noopener noreferrer" href="https://peaceful-beyond-09080.herokuapp.com/">
                                <h5 className="text-primary project-title text-center">Note Taker</h5>
                            </a>
                            <p className="project-description">Node.js | MySQL</p>
                            <a target="_blank" rel="noopener noreferrer" className="project-github-icon" href="https://github.com/j-goldrath/note-taker"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-2 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" rel="noopener noreferrer" href="https://j-goldrath.github.io/quiz-game/">
                                <h5 className="text-primary project-title text-center">Simpsons Quiz Game</h5>
                            </a>
                            <p className="project-description text-center">JavaScript | HTML | CSS</p>
                            <a target="_blank" rel="noopener noreferrer" className="project-github-icon" href="https://github.com/j-goldrath/quiz-game"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-3 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" rel="noopener noreferrer" href="https://hidden-springs-58589.herokuapp.com/">
                                <h5 className="text-primary project-title text-center">Fitness Tracker</h5>
                            </a>
                            <p className="project-description">Node.js | NoSQL</p>
                            <a target="_blank" rel="noopener noreferrer" className="project-github-icon" href="https://github.com/j-goldrath/workout-tracker"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-4 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" rel="noopener noreferrer" href="https://quiet-beach-13296.herokuapp.com/">
                                <h5 className="text-primary project-title text-center">Budget Tracker</h5>
                            </a>
                            <p className="project-description">Offline/Online PWA</p>
                            <a target="_blank" rel="noopener noreferrer" className="project-github-icon" href="https://github.com/j-goldrath/budget-tracker"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-5 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" rel="noopener noreferrer" href="https://afternoon-crag-37504.herokuapp.com/">
                                <h5 className="text-primary project-title text-center">Tech Blog</h5>
                            </a>
                            <p className="project-description text-center">Node.js | MySQL | Handlebars</p>
                            <a target="_blank" rel="noopener noreferrer" className="project-github-icon" href="https://github.com/j-goldrath/tech-blog"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-6 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/j-goldrath/team-profile-generator/blob/main/sample/team-profile-page-sample.html">
                                <h5 className="text-primary project-title text-center">Team Profile Generator</h5>
                            </a>
                            <p className="project-description">Node.js</p>
                            <a target="_blank" rel="noopener noreferrer" className="project-github-icon" href="https://github.com/j-goldrath/team-profile-generator"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-7 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" href="https://j-goldrath.github.io/weather-dashboard/">
                                <h5 className="text-primary project-title text-center">Weather Dashboard</h5>
                            </a>
                            <p className="project-description">Javascript | HTML | CSS</p>
                            <a target="_blank" className="project-github-icon" href="https://github.com/j-goldrath/weather-dashboard"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className="card img-card img-card-bg-8 shadow grow">
                    <div className="col s12">
                        <div className="card project-info-card align-items-center shadow">
                            <a target="_blank" href="https://github.com/j-goldrath/work-day-scheduler/blob/main/assets/images/work-day-scheduler-screenshot.png?raw=true">
                                <h5 className="text-primary project-title text-center">Work Day Scheduler</h5>
                            </a>
                            <p className="project-description">Javascript | HTML | CSS</p>
                            <a target="_blank" className="project-github-icon" href="https://j-goldrath.github.io/work-day-scheduler/"><i style={{ fontSize: '2rem' }} className="bi bi-github" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;