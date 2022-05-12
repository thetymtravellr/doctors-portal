import React from 'react';

const InfoCard = ({img, cardTitle, variant}) => {
    return (
        <div className={`card text-white lg:card-side shadow-xl ${variant}`}>
      <figure className='pl-0 md:pl-5'>
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
    );
};

export default InfoCard;