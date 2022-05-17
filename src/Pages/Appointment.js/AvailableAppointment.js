import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <section>
            <h4 className='text-xl text-secondary text-center'>Available Appointment on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    services.map(service => <Service
                    service={service}
                    key={service._id}
                    setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>
            {
                treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;