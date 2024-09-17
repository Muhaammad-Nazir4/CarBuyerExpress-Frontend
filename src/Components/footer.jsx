import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter style={{backgroundColor:'#515151', color:'white', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section >
        <MDBContainer className='text-center text-md-start mt-2'>
          <MDBRow className='mt-3 ' >
            
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
            <h6 className='text-uppercase fw-bold mb-2 '>Legal Information</h6>
            <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset ' style={{textDecoration: 'none'}}> Imprint</a></p>
            <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> GTC</a></p>
            <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Privacy Policy</a></p>
          </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <h6 className='text-uppercase fw-bold mb-2'>Service</h6>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Contact</a></p>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Wheel Wizerd</a></p>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset'style={{textDecoration: 'none'}}> Reseller</a></p>

            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <h6 className='text-uppercase fw-bold mb-2'>Help</h6>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Shipping Information</a></p>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Order Process</a></p>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> FAQ</a></p>

            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <h6 className='text-uppercase fw-bold mb-2 ' >About</h6>
              <p style={{ marginBottom: '5px'}}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Location</a></p>
              <p style={{ marginBottom: '5px' }}> <a href='#!' className='text-reset' style={{textDecoration: 'none'}}> History</a></p>
              <p style={{ marginBottom: '5px' }}><a href='#!' className='text-reset' style={{textDecoration: 'none'}}> Team</a></p>
            </MDBCol>

            

            <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-md-0 mb-4' 
            style={{backgroundColor:'#333333', paddingTop:'20px', border:'2px dotted grey', borderRadius:'20px'}}>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Service and Consulting</h6>
              <p><MDBIcon icon="home" className="me-2" />Ali Town, Lahore</p>
              <p><MDBIcon icon="envelope" className="me-3" /> carbyerexpress@gmail.com</p>
              <p><MDBIcon icon="phone" className="me-3" /> +92 3106567897</p>
              <p><MDBIcon icon="print" className="me-3" /> Monday-Friday 9am-12am, 1pm-5pm</p>
            </MDBCol>
          </MDBRow>

          
        </MDBContainer>
      </section>
      <section>
      <div style={{
          backgroundImage: 'url("/Assets/footerCar.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: '100%',
          }}>
          <br /><br /> <br /> <br /><br /> <br /><br /><br /><br /> 
      </div>
      </section>

      
      <section  >
        <h3 style={{textAlign:'center', fontStyle:'oblique'}} className='footer-animation'><span style={{color:'black'}}>Co</span>lors</h3>
        <MDBContainer className='text-center text-md-start ' >
          <MDBRow style={{marginTop:'-20px'}} >
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Red</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Blue</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Green</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Black</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>White</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Grey</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Yellow</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Orange</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Purple</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Brown</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Silver</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Gold</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Maroon</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Cyan</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Magenta</p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Teal</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Lime</p>
              <p style={{ marginBottom: '5px', fontSize: '12px' }}>Navy</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr style={{ marginTop: '40px', marginBottom: '40px', border: '1px solid #ccc' }} />

      </section>
      <section>
  <h3 style={{textAlign:'center', fontStyle:'oblique'}} className='footer-animation'> <span style={{color:'black'}}>Car </span>Brands</h3>
  <MDBContainer className='text-center text-md-start'>
    <MDBRow style={{marginTop:'-20px'}}>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Toyota</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Honda</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Ford</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Chevrolet</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Nissan</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>BMW</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Mercedes-Benz</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Audi</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Volkswagen</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Lexus</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Hyundai</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Kia</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Subaru</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Mazda</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Mitsubishi</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Jaguar</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Land Rover</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Porsche</p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <hr style={{ marginTop: '40px', marginBottom: '40px', border: '1px solid #ccc' }} />

</section>
<section>
  <h3 style={{textAlign:'center', fontStyle:'oblique'}} className='footer-animation'> <span style={{color:'black'}}> Rim </span>Brands</h3>
  <MDBContainer className='text-center text-md-start'>
    <MDBRow style={{marginTop:'-20px'}}>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>BBS</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Enkei</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>HRE</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>OZ Racing</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Forgiato</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Rays</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>ADV.1</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Vossen</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Konig</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>American Racing</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Rotiform</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Motegi</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Volk Racing</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Weld Racing</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>SSR</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Work Wheels</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>XXR</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Fifteen52</p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <hr style={{ marginTop: '40px', marginBottom: '40px', border: '1px solid #ccc' }} />

</section>
<section>
  <h3 style={{textAlign:'center', fontStyle:'oblique'}} className='footer-animation'> <span style={{color:'black'}}> Tire</span> Brands</h3>
  <MDBContainer className='text-center text-md-start'>
    <MDBRow style={{marginTop:'-20px'}}>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Michelin</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Bridgestone</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Goodyear</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Continental</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Pirelli</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Dunlop</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Yokohama</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Hankook</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Toyo</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Nitto</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Kumho</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>BFGoodrich</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Falken</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Cooper</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Sumitomo</p>
      </MDBCol>
      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ paddingTop: '35px' }}>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Maxxis</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>General</p>
        <p style={{ marginBottom: '5px', fontSize: '12px' }}>Firestone</p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
<br /> <br />


      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' , fontSize:'14px'}}>
        All rights reserved © carBuyerExpress.netlify
      </div>
      
    </MDBFooter>
  );
}
