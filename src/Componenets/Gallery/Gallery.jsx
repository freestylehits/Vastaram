import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import {
  fetchdata,
  getcat,
  increment,
  newdata,
  totalPrice,
  changecolor,
} from "../../Thunkslice";
import "./gallery.css";

const Gallery = () => {
  const [isactive, setIsactive] = useState(false);
  const dispatch = useDispatch();
  const { maindata } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  const add = (item) => {
    dispatch(newdata(item));
    dispatch(totalPrice());
    dispatch(increment());
  };

  const searchdata = (category) => {
    dispatch(getcat(category));
  };

  const allData = () => {
    dispatch(fetchdata());
  };
  const change = (id) => {
    dispatch(changecolor(id));
  };

  // console.log(maindata);

  return (
    <div className="container">
      <div className="con2">
        <button onClick={allData}>ALL</button>
        <button onClick={() => searchdata("women's clothing")}>WOMEN</button>
        <button onClick={() => searchdata("men's clothing")}>MEN</button>
        <button onClick={() => searchdata("electronics")}>ELECTRONICS</button>
        <button onClick={() => searchdata("jewelery")}>JEWELERY</button>
      </div>
      <div className="mg">
        {maindata?.map((i) => {
          return (
            <div className="maingal">
              <img src={i.image} alt="Error" />
              <p>Category : {i.category}</p>
              <p>Title : {i.title}</p>
              <p>Price : {i.price} ₹</p>
              <div className="h8">
                <button onClick={() => add(i)}>Add</button>
               
                {i.heart ? (
                  <AiFillHeart
                    color="red"
                    size={30}
                    onClick={() => change(i.id)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <AiOutlineHeart
                    color="white"
                    size={30}
                    onClick={() => change(i.id)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
