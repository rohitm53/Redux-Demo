import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  //   const numOfCake = useSelector((state) => {
  //     return state.numOfCake;
  //   });

  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks Num of cakes - {numOfCake}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy cake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
