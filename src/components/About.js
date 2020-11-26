import React from "react";
import bandeau from "../images/bandeau-noir.png";
import photo from "../images/photo.jpg";
import uvsq from "../images/uvsq.png";
import iicp from "../images/logo-iicp.png";
import ifocop from "../images/ifocop.jpg";
import allocine from "../images/allocine.jpg";
import linternaute from "../images/linternaute.jpg";
import webedia from "../images/webedia.jpg";
import cv from "../cv.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="bg-top"></div>
      <div className="content">
        <h3 className="section-title">À propos de moi</h3>
        <p className="bandeau">
          <img src={bandeau} alt="bandeau"/>
        </p>
        <div className="about-desc" data-aos="fade-up">
          <div className="about-left">
            <ul>
              <li className="label">Nom</li>
              <li className="info">Ba</li>
              <li className="label">Prénom</li>
              <li className="info">Hawoly</li>
              <li className="label">Date de naissance</li>
              <li className="info">24 mars 1990</li>
            </ul>
          </div>
          <div className="about-pic" data-aos="fade-up">
            <p>
              <img src={photo} alt="hawolyba" />
            </p>
          </div>
          <div className="about-right" data-aos="fade-up">
            <ul>
              <li className="label">Email</li>
              <li className="info">hawolyba@gmail.com</li>
              <li className="label">Téléphone</li>
              <li className="info">06 61 33 11 72</li>
              <li className="label">Mobilité</li>
              <li className="info">Région parisienne</li>
            </ul>
          </div>
        </div>
        <p data-aos="fade-up">
          Après plus de trois ans derrière mon clavier de journaliste cinéma,
          j'ai décidé de changer de voie pour me lancer dans le développement
          web. 2017 est pour moi l'année de tous les changements. Je me suis
          lancée dans la création de nombreux projets sans trop savoir où
          j'allais avant d'intégrer une formation adaptée à mes besoins. Je suis
          désormais prête à me lancer sur le marché de l'emploi et découvrir ce
          métier qui me fait tant envie.
        </p>
        <div className="studies">
          <h4>Diplômée de</h4>
          <p>
            <img src={uvsq} alt="logo uvsq" />
            <img src={iicp} alt="logo iicp" />
            <img src={ifocop} alt="logo ifocop" />
          </p>
        </div>
        <div className="studies">
          <h4>A travaillé chez</h4>
          <p>
            <img src={allocine} alt="logo allociné" />
            <img src={linternaute} alt="logo linternaute" />
            <img src={webedia} alt="logo webedia" />
          </p>
        </div>
        <p>
          <a className="btn" href={cv}>
            Télécharger le CV
          </a>
        </p>
      </div>
      <div className="bg-bottom"></div>
    </section>
  );
};

export default About;
