import React from "react";

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

  return (
    <div className="card max-w-md w-full bg-base-100 shadow-xl mx-auto ">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
            {
                slots.length
                ?
                <span>{slots[0]}</span>
                :
                <span className="text-red-500">No Slot Available</span>
            }
        </p>
        <p>{slots.length} { slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center">
         <label 
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
          className="btn bg-secondary text-white uppercase"
          disabled={slots.length === 0} 
          >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
