import React, { memo, useCallback, useEffect, useState } from "react";
import "./Phone.css";
import img1 from "../../Assets/phone-1.png";
import img2 from "../../Assets/phone-2.png";
import img3 from "../../Assets/phone-3.png";
import img4 from "../../Assets/phone-4.png";
import { useDispatch, useSelector } from "react-redux";
import { decrementPhone, incremetPhone } from "../../Redux/counterSlice";
import store from "../../Redux/store";
import useCount from "../../Custom Hooks/useCount";

const Phone = () => {
  const user = [
    {
      id: 1,
      name: "Samsung Galaxy S8",
      price: 400,
      image: img1,
      count: 1,
    },
    {
      id: 2,
      name: "Google Pixel",
      price: 500,
      image: img2,
      count: 1,
    },
    {
      id: 3,
      name: "Xiaomi Redmi Note 2",
      price: 700,
      image: img3,
      count: 1,
    },
    {
      id: 4,
      name: "Samsung Galaxy S7",
      price: 600,
      image: img4,
      count: 1,
    },
  ];
  const dispatch = useDispatch();
  const [isRemove, setIsRemove] = useState(false);
  const [userS, setUserS] = useState(user);

  const increase = (id1) => {
    // item.count++
    setUserS((prev) =>
      prev.map((item1) => {
        if (item1.id == id1) {
          return { ...item1, count: item1.count + 1 };
        }
        return item1;
      })
    );
  };
  const decrease = (id1) => {
    setUserS((prev) =>
      prev.map((item1) => {
        if (item1.id == id1) {
          return { ...item1, count: item1.count - 1 };
        }
        return item1;
      })
    );
  };

  const clearItem = (id1) => {
    // setUserS([]);
    setUserS((prev) =>
      prev.map((item1) => {
        if (item1.id == id1) {
          return { ...item1, count: (item1.count = 0) };
        }
        return item1;
      })
    );
  };
  return (
    <>
      {userS &&
        userS.map((item) =>
          item.count === 0
            ? " "
            : !isRemove && (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <h5>{item.name}</h5>
                    <span class="item-price">{item.price}</span>
                    <button
                      class="remove-btn"
                      onClick={() => {
                        // setIsRemove(true);
                        clearItem(item.id);
                      }}
                    >
                      remove
                    </button>
                  </div>
                  <div>
                    <button
                      className="amount-btn"
                      onClick={() => {
                        dispatch(incremetPhone(item.price));
                        increase(item.id);
                      }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="amount-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                      </svg>
                    </button>
                    <span className="amount">{item.count}</span>
                    <button
                      className="amount-btn"
                      onClick={() => {
                        dispatch(decrementPhone(item.price));
                        decrease(item.id);
                      }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="amount-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </button>
                  </div>
                </article>
              )
        )}
    </>
  );
};

export default Phone;
