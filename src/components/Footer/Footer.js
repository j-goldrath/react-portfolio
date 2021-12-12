//  import React
import React from 'react';

// import Footer.css
import './Footer.css';

function Footer() {
    return (
        <div>
            <a id="contact" />
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" width={30} height={24}>
                                <use xlinkHref="#bootstrap" />
                            </svg>
                        </a>
                        <span className="text-muted">© 2021 J.Goldrath</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex no-bull">
                        <li className="ms-3 no-bull icon-grow"><a className="text-muted" href="email:jonathan.goldrath@gmail.com"><i className="bi bi-envelope" style={{ fontSize: '2rem' }} role="img" aria-label="email">
                        </i></a></li>
                        <li className="ms-3 no-bull icon-grow"><a className="text-muted" href="tel:+18476875694"><i className="bi bi-telephone" style={{ fontSize: '2rem' }} role="img" aria-label="phone">
                        </i></a></li>
                        <li className="ms-3 no-bull icon-grow"><a className="text-muted" target="_blank" href="https://github.com/j-goldrath"><i className="bi bi-github" style={{ fontSize: '2rem' }} role="img" aria-label="linkedin">
                            <use xlinkHref="#github" />
                        </i></a></li>
                        <li className="ms-3 no-bull icon-grow"><a className="text-muted" target="_blank" href="https://linkedin.com"><i className="bi-linkedin" style={{ fontSize: '2rem' }} role="img" aria-label="linkedin">
                            <use xlinkHref="#linkedin" />
                        </i></a></li>
                        <li className="ms-3 no-bull icon-grow"><a className="text-muted" target="_blank" href="https://facebook.com"><i className="bi bi-facebook" style={{ fontSize: '2rem' }} role="img" aria-label="linkedin">
                            <use xlinkHref="#facebook" />
                        </i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;