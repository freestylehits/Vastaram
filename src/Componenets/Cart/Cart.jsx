import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deletedata,
  increment,
  newdata,
  totalPrice,
} from "../../Thunkslice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { carddata, mainTotal } = useSelector((state) => state);
  // let x = Math.trunc(mainTotal);
  let x = parseFloat(mainTotal).toFixed(2)
  const remove = (id) => {
    dispatch(deletedata(id));
    dispatch(totalPrice());
  };
  const subtract = (item) => {
    dispatch(decrement(item));
    dispatch(totalPrice());
    dispatch(increment());
  };
  const add = (item) => {
    dispatch(newdata(item));
    dispatch(increment(item));
    dispatch(totalPrice());
    dispatch(increment());
  };

  console.log(carddata);
  return (
    <div>
      <div className="mct">
        {carddata.map((item) => {
          return (
            <div className="maincart" key={item.id}>
              <img src={item.image} alt="Error" />
              <p>Price : {item.price}</p>
              <div className="inner">
                <button onClick={() => subtract(item)}>-</button>
                <p>{item.amount}</p>
                <button onClick={() => add(item)}>+</button>
              </div>
              <h3>Total : {item.price * item.amount}</h3>
              <button className="del" onClick={() => remove(item.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Total : {x}</h1>
      </div>
    </div>
  );
};

export default Cart;
