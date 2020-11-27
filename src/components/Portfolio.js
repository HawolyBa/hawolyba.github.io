import React, { useState } from "react";
import bandeau from "../images/bandeau2.png";
import { sites as sitesObj } from "../sites";
import Tuile from "./Tuile";
import HyperModal from 'react-hyper-modal';
import ModalDetails from "./ModalDetails";

const Portfolio = () => {
  const [sites] = useState(sitesObj);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [current, setCurrent] = useState({})

  const openModal = id => {
    setIsModalOpen(true)
    setCurrent(sites.find(site => site.id === id))
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setCurrent({})
  }

  return (
    <section className="portfolio" id="portfolio">
      <HyperModal
        isOpen={isModalOpen}
        requestClose={closeModal}
      >
       <ModalDetails current={current}/>
      </HyperModal>
      <div className="content">
        <h3 className="section-title">portfolio</h3>
        <p className="bandeau">
          <img src={bandeau} alt="bandeau" />
        </p>
        <div className="figures">
          {sites.map((site) => (
            <Tuile
              title={site.title}
              id={site.id}
              link={site.link}
              image={site.image}
              key={site.id}
              technos={site.technos}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
