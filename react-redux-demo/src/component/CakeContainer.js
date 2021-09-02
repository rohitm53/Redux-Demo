import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy cakes</button>
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
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   buyCake: () => {
//     dispatch(buyCake());
//   },
// });

export default connect(mapStateToProp, mapDispatchToProps)(CakeContainer);
