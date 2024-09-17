import React from 'react';
import Navbar from './FinalNavbar';
import { MDBIcon,  MDBListGroup, MDBListGroupItem,MDBAccordion, MDBAccordionItem   } from 'mdb-react-ui-kit';
import Counter from './counter';
import Footer from './footer';
import Stepper from 'react-stepper-horizontal';

export default function Information() {
  const handleClick = () => {
    window.location.href = '/information';
  };
  const steps = [
    { title: 'Season' },
    { title: 'Diameter' },
    { title: 'Design' },
    { title: 'Color' },
    { title: 'Price' },
  ];
  const activeStep = 2;


  return (
    <div style={{ overflowX: 'hidden' }}>
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

      <div className="container" style={{ marginBottom: '30px', marginTop: '50px' }}>
        <div className="row">
          <h2 style={{ fontWeight: 'normal' }}>The fastest way to search: our Wheel Wizard</h2>
          <br />
          <div className="col-md-6 col-sm-10" style={{ paddingTop: '10px', color: 'gray' }}>
            <h5>Only 5 steps to find the perfect wheel</h5>
            <p style={{ textAlign: 'justify', marginBottom: '0' }}>
              Are you still searching the perfect wheels for your car? Do you want them to underline the design of your vehicle but suit your character,
              too? Maybe you are still undecided what to choose. Do you prefer something sporty,
              elegant and timeless? Or should it rather be something powerful, massive and masculine?
            </p>
            <p style={{ textAlign: 'justify', marginBottom: '0' }}>
              Don't worry, we know that the huge selection of available rims might seem almost endless and overwhelming to you.
              This is why we have developed our Wheel Wizard. He will guide you through 5 simple steps in order for you to find
              the wheel you are looking for. And if you are still unsure what it will look like: our 3D configurator will help.
            </p>
          </div>
          <div className="col-md-6 col-sm-10" style={{ paddingTop: '10px', color: 'gray' }}>
            <h5>Your benefits at CarBuyerExpress</h5>
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              <span style={{ paddingRight: '20px', width: '100px' }}>
                <MDBIcon fas icon="check-square" style={{ color: 'green', fontSize: '20px' }} />
              </span>
              <span> <b> Our guarantee:</b> We verify technical feasibility before shipping!</span>
            </p>
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              <span style={{ paddingRight: '20px', width: '100px' }}>
                <MDBIcon fas icon="check-square" style={{ color: 'green', fontSize: '20px' }} />
              </span>
              <span> incl. <b>mounting accessories,</b> if required</span>
            </p>
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              <span style={{ paddingRight: '20px', width: '100px' }}>
                <MDBIcon fas icon="check-square" style={{ color: 'green', fontSize: '20px' }} />
              </span>
              <span> <b>Tested and approved </b>for your vehicle (TÜV)</span>
            </p>
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              <span style={{ paddingRight: '20px', width: '100px' }}>
                <MDBIcon fas icon="check-square" style={{ color: 'green', fontSize: '20px' }} />
              </span>
              <span><b>TPMS-checked </b></span>
            </p>
            <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
              <span style={{ paddingRight: '20px', width: '100px' }}>
                <MDBIcon fas icon="check-square" style={{ color: 'green', fontSize: '20px' }} />
              </span>
              <span> <b>Inexpensive Delivery</b> within Europe </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          activeColor="green"
          completeColor="green"
          activeTitleColor="green"
          completeTitleColor="gray"
          titleFontSize={15} 
          defaultColor="gray"
        />
      </div>

      

      <div className="container"  style={{marginTop:'50px',backgroundImage: 'url(/Assets/wave.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <h2 style={{color:'gray'}}>Find suitable alloy rims & complete wheels for your car</h2>
<div className="row"  style={{ backgroundColor: 'rgba(181, 181, 181, 0.5)'}}>

  <div className="col-md-6 col-12" style={{textAlign:'left', justifyContent:'left', alignItems:'center'}}>
  <div style={{marginTop:'20px', }}>
        <span style={{ paddingRight: '20px', width: '100px' }}>
        <MDBIcon fas icon="car" style={{ color: 'green', fontSize: '50px' }} /></span>
        <span style={{color:'green', fontSize:'22px'}}> <i>Please Select your vehicle first!</i></span>
    </div>
    <div style={{marginTop:'20px'}}>
        <span style={{ paddingRight: '20px', width: '100px' }}>
        <MDBIcon fas icon="car" style={{ color: 'transparent', fontSize: '50px' }} /></span>
        <span style={{ fontSize:'22px'}}>Only <b> five steps</b> to find the perfect rim for your vehicle.</span>
    </div>
    <div style={{marginTop:'20px'}}>
        <span style={{ paddingRight: '20px', width: '100px' }}>
        <MDBIcon fas icon="check-double" style={{ color: 'green', fontSize: '30px' }} /></span>
        <span> During which  <b> season</b> do you want to use the rims?</span>
    </div>
    <div style={{marginTop:'20px'}}>
        <span style={{ paddingRight: '20px', width: '100px' }}>
        <MDBIcon fas icon="check-double" style={{ color: 'green', fontSize: '30px' }} /></span>
        <span> What <b> diameter</b> should your new rims have?</span>
    </div>
    <div style={{marginTop:'20px'}}>
        <span style={{ paddingRight: '20px', width: '100px', textAlign:'center' }}>
        <MDBIcon fas icon="check-double" style={{ color: 'green', fontSize: '30px' }} /></span>
        <span> What <b>design</b> do you want for your rims?</span>
    </div>
    <div style={{marginTop:'20px'}}>
        <span style={{ paddingRight: '20px', width: '100px' }}>
        <MDBIcon fas icon="check-double" style={{ color: 'green', fontSize: '30px' }} /></span>
        <span> What <b> color</b> should your new rims be?</span>
    </div>
    <div style={{marginTop:'20px'}}>
        <span style={{ paddingRight: '20px', width: '100px'}}>
        <MDBIcon fas icon="check-double" style={{ color: 'green', fontSize: '30px' }} /></span>
        <span> In which<b> price</b> range do you want to buy your rims?</span>
    </div>


  </div>

  <div className="col-md-1 col-12 " style={{marginBottom:'60px'}}></div>

  <div className="col-md-5 col-12 searchbar" style={{  position:'relative'}}>
  <div style={{background:'white',margin:'25px', border:'2px solid orange'}} >
  <h5 style={{textAlign:'center', color:'orangered', paddingTop:'10px'}}> Vehical Search</h5>
  <input className='form-control' placeholder="Manufecturer" aria-label="Vehical Search" type='Search' style={{width:'90%',margin:'15px'}} />
  <div className="container">
  <div className='row'>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/rb5.jpg" alt="tik" style={{ maxWidth: '100%'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb1.jpg" alt="tik" style={{ maxWidth: '100%'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/rb7.jpg" alt="tik" style={{ maxWidth: '100%'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/rb4.jpg" alt="tik" style={{ maxWidth: '100%'}} />       
        </div>
  </div>
  <div className="container" >
  <div className='row'  style={{paddingTop:'10px'}}>
      <MDBListGroup light className='mb-4' style={{ height: '250px', overflowY: 'scroll' }}>
        <MDBListGroupItem
          className='d-flex justify-content-between align-items-center list-group-item-hover'
          onClick={() => handleClick()} style={{padding:'10px'}}>
          <div className='d-flex align-items-center'>
            <img
              src='./Assets/rb1.jpg'
              alt=''
              style={{ width: '50px', height: '50px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Borb3t</p>
              <p className='text-muted mb-0'>borbet@info.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem
          className='d-flex justify-content-between align-items-center list-group-item-hover'
          onClick={() => handleClick()} style={{padding:'10px'}}>
          <div className='d-flex align-items-center'>
            <img
              src='./Assets/rb4.jpg'
              alt=''
              style={{ width: '50px', height: '50px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Redish3</p>
              <p className='text-muted mb-0'>red3@info.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem
          className='d-flex justify-content-between align-items-center list-group-item-hover'
          onClick={() => handleClick()} style={{padding:'10px'}}>
          <div className='d-flex align-items-center'>
            <img
              src='./Assets/rb5.jpg'
              alt=''
              style={{ width: '50px', height: '50px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>ooze</p>
              <p className='text-muted mb-0'>ooze@info.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem
          className='d-flex justify-content-between align-items-center list-group-item-hover'
          onClick={() => handleClick()} style={{padding:'10px'}}>
          <div className='d-flex align-items-center'>
            <img
              src='./Assets/rb7.jpg'
              alt=''
              style={{ width: '50px', height: '50px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Dotz</p>
              <p className='text-muted mb-0'>dotz@info.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem
          className='d-flex justify-content-between align-items-center list-group-item-hover'
          onClick={() => handleClick()} style={{padding:'10px'}}>
          <div className='d-flex align-items-center'>
            <img
              src='./Assets/rb8.jpg'
              alt=''
              style={{ width: '50px', height: '50px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Alutec</p>
              <p className='text-muted mb-0'>alutec@info.com</p>
            </div>
          </div>
        </MDBListGroupItem>
       
      </MDBListGroup>
    </div>
    </div>

  </div>



  
  </div>
</div>
</div>
</div>

<div className="container" style={{marginTop:'40px'}}>
<MDBAccordion alwaysOpen  initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='How do I know which rims are compatible with my car?' >
      Rims are typically matched to your vehicle based on factors like bolt pattern, diameter, width, and offset. You can find this information 
      in your vehicle’s manual or by entering your vehicle details in our configurator, which filters compatible rims for you.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='What are the benefits of winter tires?'>
      Winter tires are designed with a special rubber compound and tread pattern to provide better traction and handling on snow and ice compared 
      to all-season tires. They enhance safety and performance in cold weather conditions.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='How often should I rotate my tires?'>
      It’s generally recommended to rotate your tires every 6,000 to 8,000 miles or as specified in your vehicle’s manual. 
      This helps ensure even wear and extends the lifespan of your tires.
      </MDBAccordionItem>
    </MDBAccordion>
</div>

      <Counter />
      <Footer />
    </div>
  )
}
