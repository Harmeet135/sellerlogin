import { useContext } from "react";
import { Gloabaldata } from "../../App";
import "./body.css";

const Body = () => {
  const { Userr, logout } = useContext(Gloabaldata);
  return (
    <div className="body-cont">
      {Userr ? (
        <h1>Welcome Seller Logged in Succesfully</h1>
      ) : (
        <h1>
          {" "}
          Click on <p className="body-p"> Create Account</p> to Register or
          login as the seller
        </h1>
      )}
    </div>
  );
};

export default Body;
