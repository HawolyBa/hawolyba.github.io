import React from "react";

const Tuile = ({ image, title, link, id, openModal }) => {
  return (
    <figure data-aos="flip-left" className="animated" onClick={() => openModal(id)}>
      <img src={image} alt={title}/>
      <figcaption>
        <h4>{title}</h4>
      </figcaption>
    </figure>
  );
};

export default Tuile;
