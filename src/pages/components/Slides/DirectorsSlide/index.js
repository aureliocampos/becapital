import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";

export default class DirectorsSlide extends Component {
  render() {
    const settings = {
      infinite: false,
      touchMove: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 30,
      slidesToShow: 1,
      speed: 500,
      dots: false,
      arrows: false,
    };
    return(
      <section className="section">
        <div className="section__container">
         
          <div className="directors__items">
            <Slider {...settings}>
              <article className="directors__item">
                <StaticImage src="../../../../images/dir_paulo_paiva.jpg" alt="Foto de Paulo Paiva, Diretor Executivo da BeCapital" />
                <footer className="directors__information">
                  <div className="directors__description">
                    <h2 className="directors__name">Paulo Paiva</h2>
                    <p className="directors__job">CEO, Diretor Executivo</p>
                  </div>
                  <a href="https://www.linkedin.com/in/paulo-paiva-8611259b/" target="_blank" rel="noopener noreferrer" className="directors__social">
                    <StaticImage src="../../../../images/logo_linkedin.png" alt="logo do linkedin" />
                  </a>
                </footer>
              </article>
              <article className="directors__item">
                <StaticImage src="../../../../images/dir_tom_santos.jpg" alt="Foto de Tom Santos, Diretor de Marketing da BeCapital" />
                <footer className="directors__information">
                  <div className="directors__description">
                    <h2 className="directors__name">Tom Santos</h2>
                    <p className="directors__job">CMO, Diretor de Marketing</p>
                  </div>
                  <a href="https://www.linkedin.com/in/washingtonsantos/" target="_blank" rel="noopener noreferrer" className="directors__social">
                    <StaticImage src="../../../../images/logo_linkedin.png" alt="logo do linkedin" />
                  </a>
                </footer>
              </article>
              <article className="directors__item">
                <StaticImage src="../../../../images/dir_calebe_vieira.jpg" alt="Foto de Calebe Vieira, Diretor Comercial da BeCapital" />
                <footer className="directors__information">
                  <div className="directors__description">
                    <h2 className="directors__name">Calebe Vieira</h2>
                    <p className="directors__job">CAO, Diretor Comercial</p>
                  </div>
                  <a href="https://www.linkedin.com/in/calebevieira//" target="_blank" rel="noopener noreferrer" className="directors__social">
                    <StaticImage src="../../../../images/logo_linkedin.png" alt="logo do linkedin" />
                  </a>
                </footer>
              </article>
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}