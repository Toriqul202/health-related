import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'


const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      height="600px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Care Unlimited</h3>
      <p>We Provide Best Relaiable Care</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Any time when you need</h3>
      <p>We provide care 24/7</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
        </>
    );
};

export default Banner;