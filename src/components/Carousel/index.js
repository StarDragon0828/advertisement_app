import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Logo from "../../assets/img/nature.avif";
import Star from "../../assets/img/5-star-rating.png";

const CardCarousel = ({ settings, heading }) => {
  // Mock data for cards
  const cards = [
    { id: 1, title: "Card 1", content: "This is card 1 content" },
    { id: 2, title: "Card 2", content: "This is card 2 content" },
    { id: 3, title: "Card 3", content: "This is card 3 content" },
    { id: 4, title: "Card 4", content: "This is card 4 content" },
    { id: 5, title: "Card 5", content: "This is card 5 content" },
    { id: 6, title: "Card 6", content: "This is card 6 content" },
    // Add more cards as needed
  ];

  return (
    <div
      className={
        heading
          ? "container-fluid my-4 main-carousel"
          : "container-fluid my-4 main-carousel-without-heading"
      }
    >
      {heading && <h2 className="carousel-heading">{heading}</h2>}
      <Slider {...settings}>
        {cards.map((card) => (
          <div className="card m-6 CardSlider" key={card.id}>
            <span className="Toplabel">Lorem ipum</span>
            <img src={Logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="RatingStar">
                <img src={Star} className="card-img-top" alt="..." />
                <span>1217</span>
              </div>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
