import React from "react";
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from "./InfoCard";

const Info = () => {

  return (
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
       <InfoCard cardTitle="Opening Hours" img={clock} variant={'bg-gradient-to-r from-secondary to-primary'}></InfoCard>
       <InfoCard cardTitle="Our Location" img={marker} variant={'bg-neutral'}></InfoCard>
       <InfoCard cardTitle="Contact Us" img={phone} variant={'bg-gradient-to-r from-secondary to-primary'}></InfoCard>
   </div>
  );
};

export default Info;
