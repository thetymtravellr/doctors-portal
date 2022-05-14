import React from 'react';
import apointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${apointment})`
        }} className='flex items-center justify-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non dolorum quos ex quasi explicabo placeat animi magnam iure maiores accusantium obcaecati vel, maxime cupiditate hic similique. Adipisci reiciendis praesentium ullam vero sint illo iste porro modi, at, totam aut.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;