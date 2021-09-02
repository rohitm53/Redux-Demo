import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          props.buyCake(number);
        }}
      >
        Buy {number} cakes
      </button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {
      dispatch(buyCake(number));
    },
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   buyCake: () => {
//     dispatch(buyCake());
//   },
// });

export default connect(mapStateToProp, mapDispatchToProps)(NewCakeContainer);
