import React from 'react'
import Navbar from './FinalNavbar';
import Carousel from 'react-bootstrap/Carousel';
import Counter from './counter';
import Footer from './footer';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';;

export default function RimTyre() {
  return (
    <div style={{overflowX:'hidden'}}>
        <Navbar />

        <div className="container" style={{ marginTop: '20px' }}>
      <Carousel controls={false} indicators={false} interval={2000} pause={false} slide={true} >
        <Carousel.Item>
          <div className="row" style={{backgroundImage:'url(./Assets/wave.png)'}}>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel1part1.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%' }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel1part2.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel2part1.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel2part2.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row" style={{backgroundImage:'url(./Assets/wave.png)'}}>
            <div className="col-md-3 col-3" >
              <img src="./Assets/wheel3part1.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%' }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel3part2.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel5part1.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/wheel6part2.webp" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>


<div className="container">
<div className="row">
<div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center', marginTop:'60px'}}>
      <img src="./Assets/slider1.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , borderRadius:'10px'}} />       
      </div>
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
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>8789,50 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>784,70 PKR</p>
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
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>499,58 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>403,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orangered', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>144,78 PKR</span></p>
      <p style={{ color: 'orangered', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>100,99 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel3part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel3part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'green', marginTop:'10px' }}>Available on Best Deal</span>

  </div>
      </MDBCarouselItem>
    </MDBCarousel>
  </div>
  </div>
</div>


<div className="container">
<div className="row">
  <div className="col-md-6 col-12">
  <MDBCarousel>
      <MDBCarouselItem itemId={1}>
      <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
      <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>777,90 PKR</span></p>
      <p style={{ color: 'orange', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>604,92 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orange', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>259,68 PKR</span></p>
      <p style={{ color: 'orange', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>230,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel5part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel5part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    
    <span class="badge badge-warning" style={{background:'orangered', marginTop:'10px'}}>CarBuyerExpress's Choice</span>
  </div>

      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
  <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
    <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>659,58 PKR</span></p>
      <p style={{ color: 'orange', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>454,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orange', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>139,78 PKR</span></p>
      <p style={{ color: 'orange', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>110,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel6part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel6part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'orange', marginTop:'10px'}}>Best Quality</span>
  </div>

      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
  <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
    <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>669,58 PKR</span></p>
      <p style={{ color: 'orange', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>524,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'orange', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>189,78 PKR</span></p>
      <p style={{ color: 'orange', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>160,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel7part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel7part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'green', marginTop:'10px' }}>Available on Best Deal</span>

  </div>
      </MDBCarouselItem>
    </MDBCarousel>
  </div>
  <div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center', marginTop:'60px'}}>
      <img src="./Assets/slider2.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , borderRadius:'10px'}} />       
      </div>
  </div>
</div>




<div className="container">
<div className="row">
<div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center', marginTop:'60px'}}>
      <img src="./Assets/slider3.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , borderRadius:'10px'}} />       
      </div>
  <div className="col-md-6 col-12">
  <MDBCarousel>
      <MDBCarouselItem itemId={1}>
      <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
      <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>699,58 PKR</span></p>
      <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>504,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'black', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>159,78 PKR</span></p>
      <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>120,00 PKR</p>
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
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>8789,50 PKR</span></p>
      <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>784,70 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'black', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>159,78 PKR</span></p>
      <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>120,00 PKR</p>
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
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>499,58 PKR</span></p>
      <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>403,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'black', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>144,78 PKR</span></p>
      <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>100,99 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel3part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel3part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'green', marginTop:'10px' }}>Available on Best Deal</span>

  </div>
      </MDBCarouselItem>
    </MDBCarousel>
  </div>
  </div>
</div>


<div className="container">
<div className="row">
  <div className="col-md-6 col-12">
  <MDBCarousel>
      <MDBCarouselItem itemId={1}>
      <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
      <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>777,90 PKR</span></p>
      <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>604,92 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'green', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>259,68 PKR</span></p>
      <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>230,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel5part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel5part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    
    <span class="badge badge-warning" style={{background:'orangered', marginTop:'10px'}}>CarBuyerExpress's Choice</span>
  </div>

      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
  <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
    <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>659,58 PKR</span></p>
      <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>454,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'green', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>139,78 PKR</span></p>
      <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>110,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel6part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel6part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'orange', marginTop:'10px'}}>Best Quality</span>
  </div>

      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
  <div className="row" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
    <div className="col-md-4 col-4">
      <p style={{ marginTop: '50px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>669,58 PKR</span></p>
      <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>524,80 PKR</p>
      <p style={{ marginTop: '-20px', marginBottom: '-10px', fontSize: '12px' }}>Per four alloy rims</p>
      <hr style={{ width: 'auto',border: '2px solid green' ,color: 'green' }} />
      <p style={{ marginTop: '-10px', fontSize: '15px', color: 'green', fontWeight: 'bold' }}>Available in 17-21 inches</p>

      <p style={{ marginTop: '-20px', fontSize: '12px' }}><span>starting at</span> <span style={{ textDecoration: 'line-through' }}>189,78 PKR</span></p>
      <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold', marginTop: '-20px' }}>160,00 PKR</p>
      <p style={{ marginTop: '-20px', fontSize: '12px' }}>Per four complete wheels</p>

    </div>
    <div className="col-md-4 col-4" style={{ marginRight: '-30px' }}>
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel7part2.webp" alt="tik" style={{ maxWidth: '100%', width: '100%', paddingTop:'100px' }} />
      </div>
    </div>
    <div className="col-md-4 col-4">
      <div style={{ maxWidth: '100%' }}>
        <img src="./Assets/wheel7part1.webp" alt="tik" style={{ maxWidth: '100%', width: '100%' }} />
      </div>
    </div>
    <span class="badge badge-warning" style={{background:'green', marginTop:'10px' }}>Available on Best Deal</span>

  </div>
      </MDBCarouselItem>
    </MDBCarousel>
  </div>
  <div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center', marginTop:'60px'}}>
      <img src="./Assets/slider5.webp" alt="tik" style={{ maxWidth: '100%', height: 'auto' , borderRadius:'10px'}} />       
      </div>
  </div>
</div>




        <Counter />
        <Footer/>
    </div>
  )
}
