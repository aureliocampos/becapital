import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      touchMove: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500,
      dots: true,
      nav: false,
    };
    return (
      <>
      <section className="section section__slide-investors">
        <div className="section__container">
          <h2 className="section__title">Que já soma</h2>
          <p className="section__subtitle">Um portfólio de serviços e produtos para quem quer transformar o sonho em meta.</p>
          <Slider {...settings} className="slide-investors__items slide-investors">
            
        </Slider>
        </div>
      </section>

      </>
    );
  }
}

