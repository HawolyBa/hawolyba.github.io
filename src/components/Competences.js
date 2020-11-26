import React from "react";
import bandeau2 from "../images/bandeau2.png";
import layer from "../images/layers.png";
import picture from "../images/picture.png";
import chart from "../images/line-chart.png";
import responsive from "../images/responsive.png";
import Chart from "./Chart";

const Competences = () => {
  return (
    <section className="skills" id="competences">
      <div className="content">
        <h3 className="section-title">Compétences</h3>
        <p className="bandeau">
          <img src={bandeau2} alt="bandeau" />
        </p>
        <div className="skill-boxes">
          <div className="skill" data-aos="fade-right">
            <img src={layer} alt="layer" />
            <div className="skill-desc">
              <h4>Maquette</h4>
              <p>Création et intégration d'une maquette graphique</p>
            </div>
          </div>
          <div className="skill" data-aos="fade-left">
            <img src={picture} alt="asset" />
            <div className="skill-desc">
              <h4>Iconographie</h4>
              <p>Création, recadrage et retouche d'éléments graphiques</p>
            </div>
          </div>
          <div className="skill"data-aos="fade-right">
            <img src={chart} alt="seo" />
            <div className="skill-desc">
              <h4>Référencement</h4>
              <p>Optimisation du référencement naturel d'un site internet</p>
            </div>
          </div>
          <div className="skill" data-aos="fade-left">
            <img src={responsive} alt="responsive" />
            <div className="skill-desc">
              <h4>Expérience utilisateur</h4>
              <p>
                Intégration de l'UX Design et du responsive design à la démarche
                de production web
              </p>
            </div>
          </div>
        </div>
        <div id="bars">
          <Chart title={"HTML5"} value={80}/>
          <Chart title={"CSS3"} value={70}/>
          <Chart title={"JavaScript"} value={85}/>
          <Chart title={"PHP"} value={55}/>
          <Chart title={"Wordpress"} value={65}/>
        </div>
      </div>
    </section>
  );
};

export default Competences;
