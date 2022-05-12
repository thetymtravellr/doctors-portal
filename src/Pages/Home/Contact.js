import React from 'react';
import apointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${apointment})`
        }} className=''>
               <div className='w-full py-12'>
                   <h3></h3>
               <form className='flex flex-col justify-center items-center'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </form>
               </div>
        </section>
    );
};

export default Contact;