import React from 'react';
import {
  MDBCarousel, MDBCarouselItem , MDBListGroup, MDBListGroupItem 
} from 'mdb-react-ui-kit';
import './home.css'


export default function Crousel() {
  const handleClick = () => {
    window.location.href = '/';
  };
  return (
<div>
<MDBCarousel showControls showIndicators touch={false}>
      <MDBCarouselItem itemId={1}>
        <img src='./Assets/slider6.webp' className='d-block w-100' alt='...'           
        style={{
        height: '100%',
        width: 'auto',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)'}}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='./Assets/slider2.webp' className='d-block w-100' alt='...' 
        style={{
          height: '100%',
          width: 'auto',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)'}}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src='./Assets/slider5.webp'
          className='d-block w-100'
          alt='...'
          style={{
            height: '100%',
            width: 'auto',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)'}}/>
      </MDBCarouselItem>
    </MDBCarousel>


<div className="container">

<div className="row">
  <div className="col-md-6 col-12">
  <MDBCarousel>
      <MDBCarouselItem itemId={1}>
      <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
      <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>699,58 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>504,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orangered', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>159,78 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>120,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel1part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel1part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    
    <span class="badge badge-warning" style={{background:'black', marginTop:'10px'}}>CarBuyerExpress's Choice</span>
  </div>

      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
  <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
    <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>699,58 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>504,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orangered', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>159,78 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>120,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel2part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel2part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'orangered', marginTop:'10px'}}>Best Quality</span>
  </div>

      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
  <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
    <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>699,58 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>504,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orangered', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>159,78 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>120,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel1part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel1part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'green', marginTop:'10px' }}>Available on Best Deal</span>

  </div>
      </MDBCarouselItem>
    </MDBCarousel>
  </div><div className="col-md-2 col-12 " style={{marginBottom:'230px'}}></div>

  <div className="col-md-3 col-12 searchbar" style={{ backgroundColor: 'rgba(181, 181, 181, 0.5)', position:'relative', top:'-200px'}}>
  <h5 style={{color:'white', fontWeight:'bold'}}>Find suitable alloy rims & complete wheels for your car</h5>
  <p style={{color:'white', fontSize:'15px'}}>Select your car via our vehicle search.</p>
  <div style={{background:'white',marginBottom:'25px'}} >
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

</div> 
  );
}
