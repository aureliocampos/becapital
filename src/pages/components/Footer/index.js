import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__section footer__section--header">
          <div className="footer__section--container">
            <StaticImage src="../../../images/logo_becapital_2x.png" alt="logo BeCapital" 
            className="header__logo"
            />
            <p className="footer__title footer--andress">Av. Rio Branco, 108 | 8º andar - Centro - Rio de Janeiro - RJ</p>
            <a href="mailto:imprensa@be.capital" className="footer__link">imprensa@be.capital</a>
          </div>
        </section>
        <section className="footer__section footer__section--main">
          <div className="footer__section--container">
            <div className="footer__section--column">
              <h3 className="footer__title">Investimentos</h3>
              <ul className="footer__menu">
                <li className="menu__item">
                    <a href="#Simulador Financeiro" className="menu__link">Simulador Financeiro</a>
                  </li>
                <li className="menu__item">
                    <a href="#1" className="menu__link">Crédito</a>
                  </li>
                <li className="menu__item">
                    <a href="#2" className="menu__link">Câmbio</a>
                  </li>
                <li className="menu__item">
                    <a href="#2" className="menu__link">Seguros</a>
                  </li>
                <li className="menu__item">
                    <a href="#2" className="menu__link">Consórcio</a>
                  </li>
                <li className="menu__item">
                    <a href="#2" className="menu__link">Plano de Saúde</a>
                  </li>
                <li className="menu__item">
                  <a href="#2" className="menu__link">Casa de Análise</a>
                </li>
              </ul>
            </div>
            <div className="footer__section--column">
              <h3 className="footer__title">Conteúdos</h3>
              <ul className="footer__menu">
                <li className="menu__item">
                  <a href="#Simulador Financeiro" className="menu__link">Canal no Youtube</a>
                </li>
                <li className="menu__item">
                  <a href="#1" className="menu__link">Grupo no Telegram</a>
                </li>
                <li className="menu__item">
                  <a href="#2" className="menu__link">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer__section--column">
              <h3 className="footer__title">Nossa Empresa</h3>
              <ul className="footer__menu">
                <li className="menu__item">
                  <a href="#Simulador Financeiro" className="menu__link">A BeCapital</a>
                </li>
                <li className="menu__item">
                  <a href="#1" className="menu__link">Fale com a Beca - Atendimento da BeCapital</a>
                </li>
                <li className="menu__item">
                  <a href="#2" className="menu__link">Página de Carreiras</a>
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
                  <a href="#facebook" className="social__link">
                  <StaticImage src="../../../images/icon_instagram.png" alt="Logo Instagram"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="#facebook" className="social__link">
                  <StaticImage src="../../../images/icon_youtube.png" alt="Logo Youtube"/>
                  </a>
                </li>
                <li className="social__item">
                  <a href="#facebook" className="social__link">
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
  )
}

export default Footer;