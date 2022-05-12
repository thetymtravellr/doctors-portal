import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import treatment from '../../assets/images/treatment.png';
import whitening from '../../assets/images/whitening.png';
import PrimaryButton from '../Shared/PrimaryButton';
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Fluoride Treatment',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Fluoride Treatment',
            description: '',
            img: whitening
        },
    ]

    return (
        <section className='my-32'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div className="hero min-h-screen">
  <div className="hero-content space-x-4 justify-center items-center flex-col lg:flex-row">
    <img src={treatment} className="max-w-md rounded-lg shadow-2xl" alt="" />
    <div className='max-w-md w-full'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
        </section>
    );
};

export default Services;