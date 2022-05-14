import React from 'react';
import apointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${apointment})`
        }} className='py-8 my-8'>
            <div className='text-center'>
          <h4 className="text-xl text-primary font-bold">Contact Us</h4>
          <h2 className="text-4xl text-white">Stay connected with us</h2>
        </div>
               <div className='w-full py-12'>
               <form className='flex flex-col justify-center items-center space-y-4'>
                <input type="text" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                <textarea placeholder='your message' className=' rounded-xl p-4 w-full max-w-xs outline-none' rows='5'></textarea>
                <input className='btn bg-gradient-to-r from-secondary to-primary uppercase font-bold text-base-100 border-none px-8' type="submit" value='submit' />
                </form>
               </div>
        </section>
    );
};

export default Contact;