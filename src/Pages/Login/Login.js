import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ResetPasswordModal from "./ResetPasswordModal";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    e.target.reset();
  };



  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }
  let signInError;

  if (error || googleError) {
    signInError = (
      <p className="text-red-500 mb-2">{error?.code || googleError?.code}</p>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label mb-2">
                {errors?.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.password.message}
                  </span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors?.password.message}
                  </span>
                )}
                <label htmlFor="reset-password" className="btn btn-link modal-button pl-0 pt-0 h-0 min-h-0 mb-4 text-xs">
                Forgot Password?
                </label>
              </label>
            </div>
            {signInError}
            <input
              className="btn text-white w-full max-w-xs mx-auto"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Doctors Portal?{" "}
              <Link className="text-secondary" to="/register">
                {" "}
                Create New Account
              </Link>{" "}
            </small>
          </p>
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
      <ResetPasswordModal/>
    </div>
  );
};

export default Login;
