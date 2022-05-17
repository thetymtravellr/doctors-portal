import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const ResetPasswordModal = () => {

    const [emailSent, setEmailSent] = useState(false)

    const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit = async (data, e) => {
        const email = data.email;
        await sendPasswordResetEmail(email);
        await e.target.reset();
        setEmailSent(true)
      };

      const closeModal = () => {
          setEmailSent(false)
      }

  return (
    <div>
      <input type="checkbox" id="reset-password" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Reset Password!
          </h3>
        {
            emailSent ?
            <p className="text-center my-8">Verification Email Sent. Check Your Mail!</p>
            :
            <form onSubmit={handleSubmit(onSubmit)} className="text-center my-8">
            <div>
                 <input
                   type="email"
                   placeholder="Enter Email"
                   className="input input-bordered w-full max-w-xs"
                   {...register("email", {
                     required: {
                       value: true,
                       message: "email is required",
                     },
                     pattern: {
                       value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                       message: "error message",
                     },
                   })}
                 />
                 <label className="label">
                   {errors?.email?.type === "required" && (
                     <span className="label-text-alt text-red-500">
                       {errors.email?.message}
                     </span>
                   )}
                   {errors?.email?.type === "pattern" && (
                     <span className="label-text-alt text-red-500">
                       {errors.email?.message}
                     </span>
                   )}
                 </label>
               </div>
             <button className="btn text-white bg-secondary">Reset</button>
            </form>
        }
          <div className="modal-action">
            <label 
            htmlFor="reset-password" 
            className="btn text-white"
            onClick={closeModal}
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
