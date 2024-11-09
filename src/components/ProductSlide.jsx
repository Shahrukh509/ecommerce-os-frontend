import React from 'react';

const ProductSlide = ({ slides }) => {
  return (
    <div id="product-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner bg-light">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img className="d-block w-100" src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#product-carousel" role="button" data-slide="prev">
        <i className="fa fa-2x fa-angle-left text-dark" aria-hidden="true"></i>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#product-carousel" role="button" data-slide="next">
        <i className="fa fa-2x fa-angle-right text-dark" aria-hidden="true"></i>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ProductSlide;
