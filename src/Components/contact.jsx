import React from 'react'
import Navbar from './FinalNavbar';
import Counter from './counter';
import Footer from './footer';
import { MDBBtn, MDBCard, MDBIcon, MDBCardBody, MDBCardHeader, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import './contact.css';

export default function Contact() {
  return (
    <div style={{overflowX:'hidden'}}>
        <Navbar />

    <div className="row">
      <div className="col-md-12 col-12" style={{ height: '50vh',  position: 'relative', overflow: 'hidden' }}>
      <img src='./Assets/slider6.webp'  alt='Sample' style={{ width: '100%', height: '100%', objectFit: 'coontain' }} />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div className="container">
        <div className='row'>
          <div className="col-md-6 col-12" style={{marginTop:'100px'}}>
          <h4 className='text-white mb-0' style={{fontWeight:'bold'}}>Contact </h4>
          <h1 style={{color:'white', fontWeight:'bold'}}> Customer Service</h1>
          </div> 
        </div>
        </div>
      </div>
      </div>
    </div>


    <div className="mx-auto mt-5" style={{ maxWidth: '1200px' }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h3" className="mb-0" >
              <span style={{textDecoration:'overline', color:'orange'}}>Contact</span>
              <span> Form</span>
              </MDBTypography>

            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name*' type='text' required className='custom-input'/>
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Last name' type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBInput label='Email*' type='text' className="mb-4" />
                <MDBInput label='Phone' type='text' className="mb-4" />
                <MDBTextArea label='What do you want to tell?*' rows={4} className="mb-4" />
                <div style={{justifyContent:'center', alignItem:'center', textAlign:'center'}}>
                <MDBBtn size="sm"  style={{backgroundColor:'orange', border:'2px solid orange', width:'200px'}}>
                Submit
              </MDBBtn> 
                </div>

              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4" 

          >
            <MDBCardHeader className="py-4" >
            <MDBTypography tag="h3" className="mb-0" >
              <span style={{textDecoration:'overline', color:'orange'}}>Get in</span>
              <span> Touch</span>
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Phone Number
                  <span>+92 3108987675 </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Email
                  <span>cbxinfo@gmail.com</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </MDBListGroupItem>
              </MDBListGroup>
              <MDBListGroupItem>
              <div style={{textAlign:'center', justifyContent:'center', paddingTop:'20px'}}>
          <a href='' className='me-4 ' style={{color:'orange'}}>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 ' style={{color:'orange'}}>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 ' style={{color:'orange'}}>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4  ' style={{color:'orange'}}>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 ' style={{color:'orange'}}>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 ' style={{color:'orange'}}>
            <MDBIcon fab icon="github" />
          </a>
        </div>
              </MDBListGroupItem>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>






        <Counter />
        <Footer/>
    </div>
  )
}
