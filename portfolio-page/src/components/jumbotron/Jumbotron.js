import React from 'react';
// importing bootstrap specific components from react-bootstrap
import {
MDBNavbar,
MDBNavbarNav,
MDBNavbarItem,
MDBNavbarToggler,
MDBNavbarLink,
MDBContainer,
MDBIcon } from 'mdb-react-ui-kit';

// imported css file
import './Jumbotron.css';

// react component function for jumbotron
export default function Jumbotron() {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Learn Bootstrap 5 with MDB</h1>
              <h5 className='mb-4'>Best &amp; free guide of responsive web design</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='https://www.youtube.com/watch?v=c9B4TPnak1A'
                role='button'
                rel='nofollow'
                target='_blank'
              >
                Start tutorial
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='https://mdbootstrap.com/docs/standard/'
                target='_blank'
                role='button'
              >
                Download MDB UI KIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}