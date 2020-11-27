import React from "react";
import Typical from 'react-typical'

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="inner-showcase" data-aos="zoom-out">
        <h1>Hawoly Ba</h1>
        <h2>Développeuse Web Freelance</h2>
        <Typical
            steps={['Création de sites internet . Web Design . Rédaction de contenu', 1000]}
            loop={Infinity}
            wrapper="p"
          />
        <div className="showcase-btns">
          <button>Voir le portfolio</button>
          <button><a href="mailto:hawolyba@gmail.com">Me solliciter</a></button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
