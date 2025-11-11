import { getApps, initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userInfo } from "../../App";
import googleLogo from "../../images/logos/google.png";
import logo from "../../images/logos/logo.png";
import "./Login.css";
import firebaseConfig from "./firebase.config";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfo);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // ✅ Initialize Firebase only once
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  const auth = getAuth(app);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email } = result.user;

      const signedInUser = {
        displayName,
        email,
        error: false,
      };

      setLoggedInUser(signedInUser);
      history.replace(from);
    } catch (err) {
      console.error("Google login error:", err.message);
      setLoggedInUser({ ...loggedInUser, error: true });
    }
  };

  return (
    <div className="text-center mt-4">
      <img width="150px" src={logo} alt="" />
      <div className="d-flex justify-content-center p-5">
        <div className="loginBox">
          <h3 className="text-center mt-5">Login With</h3>
          <br />
          <button onClick={handleGoogleSignIn} className="loginBtn mb-2">
            <div className="d-flex align-items-center">
              <img width="50px" height="35px" src={googleLogo} alt="" />
              <p className="ml-3 pt-1">Continue with Google</p>
            </div>
          </button>
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "royalblue", cursor: "pointer" }}
            >
              <u>Create an account</u>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
