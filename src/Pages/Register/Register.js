import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Register = () => {
  const navigate = useNavigate()

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data,e) => {
      const name = data.name;
      const email = data.email;
      const password = data.password;

      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name })
      e.target.reset()
      navigate('/appointment')
  };

  if (user) {
    console.log(user);
  
  }
  if (loading || updating) {
    return <Loading></Loading>
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'name is required'
                    }
                })}
              />
              <label className="label">
              {errors?.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}

              </label>
            
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: 'email is required'
                    },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "error message"
                  },
                })}
              />
              <label className="label">
              {errors?.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
              {errors?.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
              </label>
            
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: 'password is required'
                    },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer"
                  },
                })}
              />
              <label className="label">
              {errors?.password?.type === "required" && <span className="label-text-alt text-red-500">{errors?.password.message}</span>}
              {errors?.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors?.password.message}</span>}
              </label>
            </div>
            
            <input className="btn text-white w-full max-w-xs mx-auto uppercase" type="submit" value="Sign up" />
          </form>
          <p><small>Already have an account? Please<Link className="text-secondary" to='/login'>  Login</Link> </small></p>
        </div>
        <div className="divider">OR</div>
        <div className="grid h-20 card rounded-box place-items-center">
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
