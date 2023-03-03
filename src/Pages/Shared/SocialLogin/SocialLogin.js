import React, { useContext } from "react";
// import { setAuthToken } from "../../../api/auth";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AuthToken from "../../AuthToken/AuthToken";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSIgnIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        AuthToken(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <p className="text-center">{/* <small>Social Login</small> */}</p>
      <p className="text-center">
        <button onClick={handleGoogleSIgnIn} className="btn btn-ghost p-5">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
