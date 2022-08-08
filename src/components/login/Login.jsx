import "./login.css";
import login1 from "../assests/images/login.png";
import { Gloabaldata1 } from "../navbar/Navbar";
import { Gloabaldata } from "../../App";
import { useContext, useState } from "react";
import cancel from "../assests/icons/cancel.png";
import { Alert } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebass-config";

const Login = () => {
  const { Userr } = useContext(Gloabaldata);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { sideBar, SetsideBar } = useContext(Gloabaldata);
  const [Sign, setSign] = useState(false);
  const showbarSide = () => {
    SetsideBar(!sideBar);
  };

  const Change = (event) => {
    event.preventDefault();
    setSign(!Sign);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== conpassword) {
      return alert("Passwords do not match");
    }
    try {
      createUserWithEmailAndPassword(auth, email, password, displayName).then(
        (res) => {
          SetsideBar(false);
        }
      );
    } catch (error) {}
  };

  const Login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        SetsideBar(false);
        console.log(sideBar);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error;
      });
  };

  return (
    <div>
      <div class={sideBar ? "login active" : "login"}>
        <div class="wrapper">
          <button onClick={showbarSide}>
            <img src={cancel} alt="" />
          </button>
          <div class="boxx">
            <h5 class="bg-col px-4 py-4">
              Ammazon is the best place to sell your products at reasonable
              price .
            </h5>
            {error && <Alert variant="danger">{error}</Alert>}

            <div class="d-flex content-center">
              <div class="mx-5 mt-3 w-50">
                {Sign ? <h2>Create Account</h2> : <h2>Sign in</h2>}

                {Sign ? (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div class="inputs d-flex">
                        <input
                          type="text"
                          placeholder="First Name"
                          onChange={(event) => {
                            setDisplayName(event.target.value);
                          }}
                        />
                        <input type="text" placeholder="Last Name" />
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
                    <img src={login1} alt="" />
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
                    <img src={login1} alt="" />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
