import "./navbar.css";
import whole from "../assests/images/whole.png";
import { useContext, useState } from "react";
import Login from "../login/Login";
import { createContext } from "react";
import { Gloabaldata } from "../../App";

export const Gloabaldata1 = createContext("");

const Navbar = () => {
  const { Userr, logout } = useContext(Gloabaldata);
  const [sideBar, SetsideBar] = useState(false);
  const showSidebar = () => SetsideBar(!sideBar);

  const [Switch, setSwitch] = useState(false);
  const SSwitch = () => {
    setSwitch(!Switch);
    console.log(Switch);
  };

  return (
    <>
      <div class="disp">
        <div class="bgg-color d-flex justify-content-between py-3 px-5 border-bottom border-secondary align-items-center ">
          <a class="navbar-brand pt-1 " href="#">
            {/* <img src={whole} alt="" /> */}
            <h2>Ammazon</h2>
          </a>

          <form role="search w-200">
            <input
              class="form-control  w-200 rounded-pill"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          {Userr ? (
            <>
              <h5>{Userr.email}</h5>
              <button
                class="btn btn-danger w-10 rounded-pill"
                onClick={() => logout()}
              >
                Log Out
              </button>
            </>
          ) : (
            <div class="d-flex p-auto">
              <div class="mx-3">
                <button class="text-m" onClick={showSidebar}>
                  Create Account
                  <a class="mx-2" href="">
                    It's free!
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
        <Gloabaldata.Provider
          value={{ sideBar: sideBar, SetsideBar: SetsideBar }}
        >
          <Login />
        </Gloabaldata.Provider>
      </div>
    </>
  );
};

export default Navbar;
