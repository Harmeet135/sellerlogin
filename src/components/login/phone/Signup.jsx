import "./signup.css";
import { useContext, useState } from "react";
import cancel from "../../assests/icons/cancel.png";
import { Gloabaldata2 } from "../Loginb";
import { Gloabaldata } from "../../../App";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebass-config";

const Signup = () => {
  const { sideBar, SetsideBar } = useContext(Gloabaldata);
  const { Userr } = useContext(Gloabaldata);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [error, setError] = useState("");

  const { Sign1, setSign1 } = useContext(Gloabaldata2);
  const [Sign, setSign] = useState(false);
  const showbarSide = () => {
    setSign1(!Sign1);
  };

  const Change = (event) => {
    event.preventDefault();
    setSign(!Sign);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== conpassword) {
      console.log("password not match");

      return setError("Passwords do not match");
    }
    try {
      createUserWithEmailAndPassword(auth, email, password, displayName).then(
        (res) => {
          setSign1(false);
        }
      );
    } catch (error) {}
  };

  const Login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSign1(false);
        // console.log(sideBar);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error;
      });
  };

  return (
    <div class="signn">
      <div class={Sign1 ? "signup active" : "signup"}>
        <button onClick={showbarSide}>
          <img src={cancel} alt="" />
        </button>

        <div class="mx-5 mt-3">
          {Sign ? <h2>Create Account</h2> : <h2>Sign in</h2>}

          {Sign ? (
            <>
              <form onSubmit={handleSubmit}>
                <div class="w-100 d-flex">
                  <input
                    className="w-100"
                    type="text"
                    placeholder="First Name"
                    onChange={(event) => {
                      setDisplayName(event.target.value);
                    }}
                  />
                  <input
                    className="w-100"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  class="w-100 p-1"
                  type="text"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <input
                  class="w-100 p-1"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />

                <input
                  class="w-100 p-1"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(event) => {
                    setConpassword(event.target.value);
                  }}
                />
                <button
                  class="btn btn-primary w-100 p-2 mt-3 rounded-pill"
                  type="submit"
                >
                  Create Account
                </button>
              </form>
            </>
          ) : (
            <>
              <form type="submit" onSubmit={Login}>
                <input
                  class="w-100 p-1"
                  type="text"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <input
                  class="w-100 p-1"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />

                <button
                  class="btn btn-primary w-100 p-2 mt-3 rounded-pill"
                  type="submit"
                >
                  Login In
                </button>
              </form>
            </>
          )}
          {Sign ? (
            <>
              <button
                type="button "
                class="btn btn-outline-secondary w-100 mt-3"
              >
                Sign Up with facebook
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary  w-100 mt-1"
              >
                Sign Up with Google
              </button>
            </>
          ) : (
            <>
              <button
                type="button "
                class="btn btn-outline-secondary w-100 mt-3"
              >
                Sign In with facebook
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary  w-100 mt-1"
              >
                Sign In with Google
              </button>
            </>
          )}
        </div>
        <div>
          {Sign ? (
            <p class="mx-5">
              Already have an account?
              <button
                onClick={Change}
                type="button"
                class="text-decoration-underline"
              >
                Sign in
              </button>
            </p>
          ) : (
            <p class="mx-5">
              Don't have a account yet?
              <button
                type="button"
                class="text-decoration-underline"
                onClick={Change}
              >
                Create one for free
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
