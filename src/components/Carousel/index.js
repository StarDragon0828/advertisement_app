import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  // Mock data for cards
  const cards = [
    { id: 1, title: "Card 1", content: "This is card 1 content" },
    { id: 2, title: "Card 2", content: "This is card 2 content" },
    { id: 3, title: "Card 3", content: "This is card 3 content" },
    { id: 4, title: "Card 4", content: "This is card 4 content" },
    { id: 4, title: "Card 4", content: "This is card 4 content" },
    { id: 5, title: "Card 5", content: "This is card 5 content" },
    // Add more cards as needed
  ];

  return (
    <div className="container-fluid my-2">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
