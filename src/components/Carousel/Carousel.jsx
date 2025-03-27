import React from 'react';

import './carousel.scss';

// images
import theaterImg from '../../assets/images/theater.jpg';
import cinemaImg from '../../assets/images/cinema.jpg';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide carousel-container">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={theaterImg} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={cinemaImg} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
