import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque animi ex doloremque aliquam fugiat. Eveniet rem perspiciatis dicta veritatis architecto iure, esse vel, quas laudantium quod, nostrum necessitatibus provident enim.",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "John Doe",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque animi ex doloremque aliquam fugiat. Eveniet rem perspiciatis dicta veritatis architecto iure, esse vel, quas laudantium quod, nostrum necessitatibus provident enim.",
      location: "Texas",
      img: people2,
    },
    {
      _id: 3,
      name: "Alex Carrey",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque animi ex doloremque aliquam fugiat. Eveniet rem perspiciatis dicta veritatis architecto iure, esse vel, quas laudantium quod, nostrum necessitatibus provident enim.",
      location: "Dallas",
      img: people3,
    },
  ];

  return (
    <section className="my-20">
      <div className="flex justify-between items-center ">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients say</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Testimonial key={review._id} review={review}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
