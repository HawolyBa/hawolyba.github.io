import React from 'react'

const ModalDetails = ({ current }) => {
  return (
    <div className="modal-details">
      {current && 
        <div className="inner">
          <div className="left">
            <h2>{current.title}</h2>
            <div className="img-container">
              <img src={current.image} alt={current.title} />
            </div>
          </div>
          <div className="right">
            <div>
              <h5>Description</h5>
              <p>{current.description}</p>
            </div>
            <div>
              <h5>Technologies utilisées</h5>
              { current.technos?.map(t => (<span key={t} className="tag">{t}</span>))}
            </div>
            <a target="_blank" rel="noopener noreferrer" href={current.link} className="modal-btn">Tester le site</a>
          </div>
        </div>
      }
    </div>
  )
}

export default ModalDetails
