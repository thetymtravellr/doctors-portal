import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth)
  const formattedDate = format(date, 'PP')

  const handleBooking = e => {
      e.preventDefault();
      const slot = e.target.slot.value;
      console.log(slot);

      const booking = {
        treatmentId: _id,
        treatment: name,
        date: formattedDate,
        slot,
        patient: user.email,
        patientName: user.displayName,
        phone: e.target.phone.value
      }

      fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`)
        } else {
          toast('Already added')
        }
        setTreatment(null)
      })
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-secondary">
            Booking For {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center mt-2 gap-y-2">
            <input
              value={format(date, "PP") || ""}
              disabled
              readOnly
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <select name='slot' className="select select-bordered w-full max-w-xs">
             {
                 slots.map(slot => <option value={slot}>{slot}</option>)
             }
            </select>

            <input
              type="text"
              name='name'
              value={user.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
             <input
              type="email"
              name='email'
              value={user.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name='phone'
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs"
            />
           
            <input
              type="submit"
              value="Submit"
              className="btn w-full max-w-xs bg-secondary text-white"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
