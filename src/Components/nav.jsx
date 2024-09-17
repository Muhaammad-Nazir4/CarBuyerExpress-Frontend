
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './nav.css';

export default function App() {
  const [leftModal, setLeftModal] = useState(false);

  const toggleLeftModal = () => setLeftModal(!leftModal);

  return (
    <>
      <MDBNavbar style={{ backgroundColor: '#a6a6a6', display: 'flex', alignItems: 'center', borderBottom: '1px solid white',zIndex:'1' }}>
        <MDBContainer style={{ display: 'flex', alignItems: 'center', fontSize: '25px', fontFamily: 'cursive', fontStyle: 'italic', fontWeight: 'bold', justifyContent: 'space-between' }}>
          <MDBNavbarBrand href='#'>
            <img
              src='./Assets/download.png'
              height='50'
              alt=''
              loading='lazy'
              className="logo-animation"
            />
            <span style={{ color: 'orangered', marginLeft: '-20px' }} className="text-animation">arBuyer</span> 
            <span className="text-animation">Express</span>
          </MDBNavbarBrand>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="d-lg-none" onClick={toggleLeftModal} style={{ display: 'flex', alignItems: 'center' }}>
              <MDBIcon fas icon='bars' style={{ paddingRight: '10px' }} />
            </div>
            <MDBNavbarBrand href='#' style={{ display: 'flex', alignItems: 'center' }}>
              <MDBIcon fas icon='shopping-cart' />
            </MDBNavbarBrand>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <MDBModal
        animationDirection='left'
        open={leftModal}
        onClose={() => setLeftModal(false)}
      >
        <MDBModalDialog position='top-left' style={{ left: '0', margin: '0', bottom: '0', height: '100vh', width: '45vh' }}>
          <MDBModalContent style={{ borderRadius: '0', backgroundColor: '#282d3b', color: 'white', height: '100%' }}>
            <MDBModalHeader style={{ background: '#a6a6a6' }}>
              <img src="./Assets/download1.png" alt="" className="logo-animation"/>
              <MDBModalTitle style={{ color: 'orangered', fontStyle: 'italic', marginLeft: '-20px' }}  className="text-animation">arBuyer <span style={{ color: 'white' }}  className="text-animation">Express</span></MDBModalTitle>
              <MDBBtn
                color='primary'
                className='btn-close btn-close-white'
                onClick={toggleLeftModal}
                style={{ fontSize: '25px' }}
              />
            </MDBModalHeader>
            <MDBModalBody style={{ display: 'flex', flexDirection: 'column' }}>
              <Link to="/" style={{ paddingBottom: '10px', color: 'white', fontSize: '12px', textDecoration: 'none' }}>HOME</Link>
              <Link to="/rims" style={{ paddingBottom: '10px', color: 'white', fontSize: '12px', textDecoration: 'none'  }}>RIMS & TYRES</Link>
              <Link to="/photoGallery" style={{ paddingBottom: '10px', color: 'white', fontSize: '12px', textDecoration: 'none'  }}>PHOTO GALLERY</Link>
              <Link to="/contact" style={{ paddingBottom: '10px', color: 'white', fontSize: '12px', textDecoration: 'none'  }}>CONTACT</Link>
              <Link to="/information" style={{ paddingBottom: '10px', color: 'white', fontSize: '12px', textDecoration: 'none'  }}>INFORMATION</Link>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

