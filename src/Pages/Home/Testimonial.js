import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <div class="card-body text-justify">
        <p>{review.review}</p>
        <div class="flex items-center justify-center space-x-2 mt-4">
          <div class="avatar">
            <div class="w-20 rounded-full ring-4">
              <img src="https://api.lorem.space/image/face?hash=92310" alt="" />
            </div>
          </div>
          <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
