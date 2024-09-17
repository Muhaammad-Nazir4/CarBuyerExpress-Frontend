import React from 'react';
import Navbar from './FinalNavbar';
import Footer from './footer';
import Counter from './counter';
import Crousel from './crousel';
import './home.css';
import ImageCarousel from './imageCrousal';

export default function home() {

  
  
  return (
    
    
    <div style={{overflowX:'hidden'}}>
        <Navbar />
        <Crousel/>
        <div className="container" style={{ marginBottom: '30px', marginTop:'-150px' }}>
    <div className="row">
      <h4 style={{fontWeight:'normal'}}> Alloys and complete wheels at CarBuyerExpress, your No. 1 alloys shop!</h4>
      <br />
      <div className="col-md-6 col-sm-10">
        <p style={{ textAlign: 'justify', marginBottom: '0' }}>
        Buying aluminium rims online has never been so easy: discover the perfect rim for your car in our range of over 1,000 rims online. 
        Simply specify your vehicle, select the rim and have it displayed in the 3D rim configurator. 
        Thanks to our expert advice with all-round carefree guarantee! With the right tyres, it's a well-rounded affair.
        </p>
      </div>
      <div className="col-md-6 col-sm-10 ">
        <p style={{ textAlign: 'justify', marginBottom: '0' }}>
        we mount and balance your complete wheels professionally and deliver them to you ready for mounting. Compare rims with each other and read customer reviews
         to find the best alloy rims for your car. We hope you enjoy choosing your new rims and complete wheels!

        </p>
      </div>
    </div>
</div>

<ImageCarousel/>
<br />

<div className="container">
    <div className="row">
    <h3 style={{ marginBottom: '50px', textAlign: 'center', fontWeight: 'normal' }}>
  <span style={{ textDecoration: 'overline', textDecorationColor: 'orangered' }}>TYRES & COMP </span>
  <span style={{ fontWeight: 'bold' }}>LETE WHEELS</span>
</h3>

      
      <div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/tyre1.jpeg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '40px' , borderRadius:'50px'}} />       
      </div>
      <div className="col-md-6 col-sm-10 tyreImage" style={{textAlign:'center'}}>
      <img src="./Assets/tyre2.jpeg" alt="tik" style={{ maxWidth: '100%', height: 'auto' , borderRadius:'50px'}} />       
      </div>
    </div>
</div>


<div className="container" style={{marginTop:'50px'}}>
  <div className="row">    
    <div className="col-md-6 " style={{textAlign:'center'}}>
      <div className='row'>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb1.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' , borderRadius:'50px'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb2.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' , borderRadius:'50px'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb3.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' , borderRadius:'50px'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb4.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' , borderRadius:'50px'}} />       
        </div>
      </div>
    </div>
    <div className="col-md-6 " style={{textAlign:'center'}}>
      <div className='row'>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb5.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '40px' , borderRadius:'50px'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb6.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '40px' , borderRadius:'50px'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb7.jpg" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '40px' , borderRadius:'50px'}} />       
        </div>
        <div className="col-md-3 col-3" style={{textAlign:'center'}}>
          <img src="./Assets/tb8.png" alt="tik" style={{ maxWidth: '100%', height: 'auto', marginBottom: '40px' , borderRadius:'50px'}} />       
        </div>
      </div>
    </div>
  </div>
</div>



<div className="container" >
    <div className="row">
      <div className="col-md-6 col-sm-10">
        <h6>OUR ALL-IN-ONE GUARANTEE</h6>
        <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
        With our all-round carefree guarantee, you can be sure that the rims and complete wheels you choose will fit perfectly. Do you want the right tyres to go with the rim of your choice? No problem, we already prepare complete wheels for your car in our logistics centre. Balanced with the most modern machines and mounted by 
        qualified personnel, you will receive ready-to-fit wheels including mounting material at home. 
        </p>
      </div>
      <div className="col-md-6 col-sm-10 ">
      <h6>NOT SURE YET WHICH WHEEL TO GO FOR?</h6>
        <p style={{ textAlign: 'justify', marginBottom: '0' }}>
        Try our Wheel Wizard! We filter our products according to your wishes. Do you prefer large or small wheels? Would like a sporty, timeless or eye-catching design? Maybe you are looking for a premium product. 
        There is something for every taste at felgenoutlet. Discover it yourself and enjoy browsing through our shop!
        </p>
      </div>
    </div>
</div>


<br /><br />
<div className="container">
    <div className="row">
      <h4 style={{fontWeight:'normal'}}> We are a pioneer in the alloy wheel industry and focus on innovation and satisfaction!</h4>
      <br />
      <div className="col-md-6 col-sm-10">
        <p style={{ textAlign: 'justify', marginBottom: '0' }}>
        Our 3D rim configurator gives you a realistic and interactive shopping experience by displaying alloy rims and complete wheels directly on your
         car. On our rim comparison page, you can compare your favourite rims based on numerous features. Also use our in-house rating platform with verified
         reviews and see what other customers particularly liked about the respective rims. 
        </p>
      </div>
      <div className="col-md-6 col-sm-10 ">
        <p style={{ textAlign: 'justify', marginBottom: '0' }}>
        For us, user-friendliness, safety and innovation are our top priorities. We want to create the best possible shopping experience for our customers and therefore work daily to develop innovative and 
        useful tools that make it easier for you to choose the perfect rim. Our customised expert advice, the in-house evaluation platform and our 
        new rim comparison are just a few of them.
        </p>
      </div>
    </div>
</div>



        

  <style>
  {`
    
    @media (max-width: 768px) {

      .img-container {
      width: 50%;   
      display: flex;
      justify-content: center;
      text-align:center;
      margin: 0 auto 25px;
    }
    }
    
  `}
</style>

<div className="container" style={{marginTop:'50px'}}>
  <hr />
    <div className="row">
      <div className="col-md-6 ">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-3 img-container">
              <img src="./Assets/tik.svg" alt="tik" className="myImage" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0' }} />
            </div>
            <div className="col-sm-12 col-md-9 " >
              <h6>YOUR TRUSTED ALLOY WHEEL SHOP</h6>
              <p style={{ textAlign: 'justify', marginBottom: '0' }}>
                With us, you are always on the safe side: from alloy wheels with an all-round worry-free guarantee to additional 
                checks on your order and a choice of all common payment methods to free shipping within Germany, your satisfaction is our top 
                priority every step of the way. If you ever have any problems with your order or are not satisfied, 
                we are happy to offer you our extended 30-day right of return and work together to find a quick and uncomplicated solution.
              </p>
            </div>
        </div>
      </div>

      <div className="col-md-6 ">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-3  img-container">
              <img src="./Assets/team.svg" alt="tik" className="myImage" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0' }} />
            </div>
            <div className="col-sm-12 col-md-9 " >
              <h6>YOUR TRUSTED ALLOY WHEEL SHOP</h6>
              <p style={{ textAlign: 'justify', marginBottom: '0' }}>
              You can count on our decades of experience in the wheel industry - we will accompany you every step of the way through the wheel selection,
               expert opinion jungle and TPMS query. If you still have questions, our support team will be happy to help you in word and deed. 
               Our state-of-the-art logistics centre also allows us to process orders particularly efficiently and deliver them quickly, so you 
               don't have to wait long for your new rims and complete wheels
              </p>
            </div>
        </div>
      </div>
    </div>
</div>



    


        <Counter />
        <Footer/>
      
    </div>
  )
}
