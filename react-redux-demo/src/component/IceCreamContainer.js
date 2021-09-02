import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Cream - {props.numOfIceCream}</h2>
      <button onClick={props.buyCake}>Buy Ice cream</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyIceCream());
    },
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   buyCake: () => {
//     dispatch(buyIceCream());
//   },
// });

export default connect(mapStateToProp, mapDispatchToProps)(IceCreamContainer);
