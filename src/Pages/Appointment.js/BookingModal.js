import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const { name, slots } = treatment;

  const handleBooking = e => {
      e.preventDefault();
      const slot = e.target.slot.value;
      console.log(slot);
      setTreatment(null)
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
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name='phone'
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name='email'
              placeholder="Email"
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
