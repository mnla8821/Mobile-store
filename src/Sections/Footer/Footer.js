import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Phone from "../../Componnets/Phone/Phone";
import { clearAll } from "../../Redux/counterSlice";

const Footer = () => {
  const allPPrice = useSelector((state) => state.counter.allPrice);
  const [isRemove, setIsRemove] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {!isRemove && <Phone />}
      <hr />
      <h5 className="cart-total">
        total <span>{allPPrice}</span>
      </h5>
      <button
        className="btn btn-hipster clear-btn"
        onClick={() => {
          dispatch(clearAll());
          setIsRemove(true);
        }}
      >
        clear cart
      </button>
    </>
  );
};

export default Footer;
