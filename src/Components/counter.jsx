import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const useCountUp = (endValue, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return count;
};

export default function Counter() {
  const duration = 20; 

  const count1 = useCountUp(400, duration);
  const count2 = useCountUp(280, duration);
  const count3 = useCountUp(30, duration);
  const count4 = useCountUp(1000, duration);
  const count5 = useCountUp(98, duration);

  return (
    <div style={{ backgroundColor: '#333333', marginBottom: '-50px' }}>
      <MDBContainer className="text-center my-5" style={{ paddingTop: '20px'}}>
        <MDBRow className="justify-content-center">
          <MDBCol lg="2" md="3" sm="3" className="mb-5 position-relative">
            <img src="./Assets/1.png" alt="" />
            <h5 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count1} <span>Million</span>
            </h5>
            <h6 style={{ color: 'white', fontWeight: 'normal', marginBottom: '0', fontSize: '12px' }}>
              alloy rims sold
            </h6>
            <div
              className="vr position-absolute my-0 h-100 d-none d-md-block top-0 end-0"
              style={{ width: '2px', background: '#515151', filter: 'blur(2px)' }}
            ></div>
          </MDBCol>
          <MDBCol lg="2" md="3" sm="3" className="mb-5 position-relative">
            <img src="./Assets/2.png" alt="" />
            <h5 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count2} <span>Million</span>
            </h5>
            <h6 style={{ color: 'white', fontWeight: 'normal', marginBottom: '0', fontSize: '12px' }}>
              complete wheel sold
            </h6>
            <div
              className="vr position-absolute my-0 h-100 d-none d-md-block top-0 end-0"
              style={{ width: '2px', background: '#515151', filter: 'blur(2px)' }}
            ></div>
          </MDBCol>
          <MDBCol lg="2" md="3" sm="3" className="mb-5 position-relative">
            <img src="./Assets/3.png" alt="" />
            <h5 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count3} <span>Years</span>
            </h5>
            <h6 style={{ color: 'white', fontWeight: 'normal', marginBottom: '0', fontSize: '12px' }}>
              satisfying experience
            </h6>
            <div
              className="vr position-absolute my-0 h-100 d-none d-md-block top-0 end-0"
              style={{ width: '2px', background: '#515151', filter: 'blur(2px)' }}
            ></div>
          </MDBCol>
          <MDBCol lg="2" md="3" sm="3" className="mb-5 position-relative">
            <img src="./Assets/4.png" alt="" />
            <h5 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count4} <span>+</span>
            </h5>
            <h6 style={{ color: 'white', fontWeight: 'normal', marginBottom: '0', fontSize: '12px' }}>
              satisfied customers
            </h6>
            <div
              className="vr position-absolute my-0 h-100 d-none d-md-block top-0 end-0"
              style={{ width: '2px', background: '#515151', filter: 'blur(2px)' }}
            ></div>
          </MDBCol>
          <MDBCol lg="2" md="3" sm="3" className="mb-5 position-relative">
            <img src="./Assets/5.png" alt="" />
            <h5 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count5} <span>%</span>
            </h5>
            <h6 style={{ color: 'white', fontWeight: 'normal', marginBottom: '0', fontSize: '12px' }}>
              on-time delivery
            </h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
