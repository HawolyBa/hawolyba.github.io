import React from 'react'

const ModalDetails = ({ current }) => {
  console.log(current)
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
          </div>
        </div>
      }
    </div>
  )
}

export default ModalDetails
