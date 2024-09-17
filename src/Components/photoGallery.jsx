import React from 'react'
import Navbar from './FinalNavbar';
import Counter from './counter';
import Footer from './footer';
import ImageCarousel from './imageCrousal';
import Carousel from 'react-bootstrap/Carousel';

export default function Photogallery() {
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
          <h4 className='text-white mb-0' style={{fontWeight:'bold'}}>View our</h4>
          <h1 style={{color:'white', fontWeight:'bold'}}> Photo Gallery</h1>
          </div> 
        </div>
        </div>
      </div>
      </div>
    </div>

    <ImageCarousel />

<div className="container" style={{marginTop:'40px'}}>
<h3 style={{ marginBottom: '50px', textAlign: 'center', fontWeight: 'normal' }}>
    <span style={{ textDecoration: 'overline', textDecorationColor: 'orangered' }}>Here is Our </span>
    <span style={{ fontWeight: 'bold' }}>Photo Gallery</span></h3>
    <div className="row">     
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider1.webp" alt="tik" style={{ maxWidth: '100%', height: '100%' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider2.webp" alt="tik" style={{ maxWidth: '100%', height: '100%' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider3.webp" alt="tik" style={{ maxWidth: '100%', height: '100%' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider4.jpg" alt="tik" style={{ maxWidth: '100%', height: '100%'  , borderRadius:'10px'}} />       
      </div>
    </div>
</div>
<div className="container" >
    <div className="row">     
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider5.webp" alt="tik" style={{ maxWidth: '100%', height: '100%', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider6.webp" alt="tik" style={{ maxWidth: '100%', height: '100%' ,marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider7.webp" alt="tik" style={{ maxWidth: '100%', height: '100%', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-12 tyreImage" style={{textAlign:'center', marginBottom:'20px'}}>
      <img src="./Assets/slider8.webp" alt="tik" style={{ maxWidth: '100%', height: '100%' , marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
    </div>
</div>
<br />


        <div className="container">
      <Carousel controls={false} indicators={false} interval={2000} pause={false} slide={true}>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-3 col-3">
              <img src="./Assets/rb1.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%' }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/rb2.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/rb3.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/rb4.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-3 col-3">
              <img src="./Assets/rb5.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/rb6.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px' , width:'80%', height:'80%' }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/rb7.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/rb8.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
<br />

    <div className="container">
    <div className="row">
    <h3 style={{ marginBottom: '50px', textAlign: 'center', fontWeight: 'normal' }}>
    <span style={{ textDecoration: 'overline', textDecorationColor: 'orangered' }}>TYRES & COMP</span>
    <span style={{ fontWeight: 'bold' }}>LETE WHEELS</span></h3>

      
      <div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/tyre1.jpeg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '40px' , borderRadius:'50px'}} />       
      </div>
      <div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/tyre2.jpeg" alt="tik" style={{ maxWidth: '100%', height: 'auto' , borderRadius:'50px'}} />       
      </div>
    </div>
</div>

<div className="container" style={{marginTop:'40px'}}>
<h3 style={{ marginBottom: '50px', textAlign: 'center', fontWeight: 'normal' }}>
    <span style={{ textDecoration: 'overline', textDecorationColor: 'orangered' }}>TYRES & </span>
    <span style={{ fontWeight: 'bold' }}>RIMS</span></h3>
    <div className="row" style={{backgroundImage:'url(./Assets/wave.png)'}}>     
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel1part1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel1part2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' ,marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel2part1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel2part2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
    </div>
</div>

<div className="container" style={{backgroundImage:'url(./Assets/wave.png)', marginTop:'20px'}}>
    <div className="row">     
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel3part1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel3part2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' ,marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel5part1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel5part2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
    </div>
</div>

<div className="container" style={{backgroundImage:'url(./Assets/wave.png)', marginTop:'20px'}}>
    <div className="row">     
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel6part1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel6part2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' ,marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel7part1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
      <div className="col-md-3 col-6 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/wheel7part2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , marginBottom: '10px' , borderRadius:'10px'}} />       
      </div>
    </div>
</div>


        <Counter />
        <Footer/>
    </div>
  )
}
