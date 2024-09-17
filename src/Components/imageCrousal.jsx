import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => {
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <Carousel controls={false} indicators={false} interval={2000} pause={false} slide={true}>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-3 col-3">
              <img src="./Assets/tb1.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%' }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/tb2.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/tb3.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/tb4.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-3 col-3">
              <img src="./Assets/tb5.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/tb6.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px' , width:'80%', height:'80%' }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/tb7.jpg" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
            <div className="col-md-3 col-3">
              <img src="./Assets/tb8.png" alt="tik1" className="d-block tik1" style={{ borderRadius: '50px', width:'80%', height:'80%'  }} />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
