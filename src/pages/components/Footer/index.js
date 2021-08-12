import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import InvestimentosMenu from "./InvestimentosMenu";

const Footer = () => {
  return(
    <>
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__section footer__section--header">
          <div className="footer__section--container">
            <StaticImage src="../../../images/logo_becapital_2x.png" alt="logo BeCapital" 
            className="footer__logo"
            />
            <p className="footer__title footer--andress">Av. Rio Branco, 108 | 8º andar - Centro - Rio de Janeiro - RJ</p>
            <a href="mailto:imprensa@be.capital" className="footer__link">imprensa@be.capital</a>
          </div>
        </section>
        <section className="footer__section footer__section--main">
          <div className="footer__section--container">
            <div className="footer__section--column">
              <h3 className="footer__title">Investimentos</h3>
              <InvestimentosMenu />
            </div>
            <div className="footer__section--column">
              <h3 className="footer__title">Conteúdos</h3>
              <ul className="footer__menu">
                <li className="menu__item">
                  <a href="https://www.youtube.com/channel/UCLImIm6777cZiGmjaRuFcwQ?view_as=subscriber" className="menu__link" target="_blank" rel="noopener noreferrer">Canal no Youtube</a>
                </li>
                <li className="menu__item">
                  <a href="#1" className="menu__link">Grupo no Telegram</a>
                </li>
                <li className="menu__item">
                  <Link to="/blog/" className="menu__link">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section--column">
              <h3 className="footer__title">Nossa Empresa</h3>
              <ul className="footer__menu">
                <li className="menu__item">
                  <Link to="/somos-becapital/" className="menu__link">A BeCapital</Link>
                </li>
                <li className="menu__item width200">
                  <span className="menu__link">Fale com a Beca - Atendimento da BeCapital</span>
                </li>
                <li className="menu__item">
                  <Link to="/carreiras/" className="menu__link">Página de Carreiras</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section--column">
              <StaticImage src="../../../images/qrcode.png" alt="QRCode BeCapital"
            />
            </div>
          </div>
        </section>
        <section className="footer__section footer__section--footer">
          <div className="footer__section--container">
            <div className="footer__section--column">
              <h3 className="footer__title">Siga a BeCapital</h3>
              <ul className="footer__social social__menu">
                <li className="social__item">
                  <a href="https://www.instagram.com/becapital.oficial/" className="social__link"
                  target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../images/icon_instagram.png" alt="Logo Instagram"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="https://www.youtube.com/channel/UCLImIm6777cZiGmjaRuFcwQ?view_as=subscriber" className="social__link"
                  target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../images/icon_youtube.png" alt="Logo Youtube"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="https://www.linkedin.com/company/71399542/" className="social__link"
                  target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../images/icon_linkedin.png" alt="Logo Linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__section--column">
              <h3 className="footer__title">Horário de atendimento</h3>
              <p className="footer__text">Segunda a Sexta de 9h às 18h</p>
            </div>
            <div className="footer__section--column">
              <h3 className="footer__title">Contato para atendimento</h3>
              <p className="footer__text"><a href="tel:+552139939670">(21) 3993 - 9670</a></p>
            </div>
          </div>
        </section>
        <section className="footer__section footer__end">
          <p className="footer__title">BeCapital <strong>®</strong> Todos os direitos reservados</p>
          <p  className="footer__text">CNPJ: 36.664.223/0001-09</p>
        </section>
      </div>
    </footer>
    <script async type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
    </>

  )
}

export default Footer;