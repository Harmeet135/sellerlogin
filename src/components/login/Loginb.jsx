import React, { useContext, useState } from "react";
import edit from "../assests/icons/edit.png";
import { createContext } from "react";
import Signup from "./phone/Signup";
import { Gloabaldata } from "../../App";

export const Gloabaldata2 = createContext("");

const Loginb = () => {
  const { Userr, logout } = useContext(Gloabaldata);

  const [Sign1, setSign1] = useState(false);
  const handleClick = () => {
    setSign1(!Sign1);
  };

  return (
    <>
      {Userr ? (
        <button
          class="editb  btn btn-danger w-10 rounded-pill"
          onClick={() => logout()}
        >
          Log Out
        </button>
      ) : (
        <button class="editb text-m">
          <img onClick={handleClick} src={edit} alt="" />
        </button>
      )}

      <Gloabaldata2.Provider value={{ Sign1: Sign1, setSign1: setSign1 }}>
        <Signup />
      </Gloabaldata2.Provider>
    </>
  );
};

export default Loginb;
