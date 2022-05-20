import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [token] = useToken(googleUser);

  if (token) {
    navigate("/appointment");
  }

  return (
    <div className="grid h-20 card rounded-box place-items-center">
      <button className="btn btn-outline" onClick={() => signInWithGoogle()}>
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
