import React from "react";
import { buyCake, removeFromCartCake } from "../redux/cakes/cakeAction";
import { connect } from "react-redux";
import "./cake.css";

function CakeContainer(props) {
  return (
    <div className="CakeBox">
      <h2 className="cakeText">
        Number Of cake is avialble:- {props.numOfCake}
      </h2>
      <h2> Number of Product in Cart:- {props.cart}</h2>
      <button className="snapLeftBtn" onClick={props.buyCake}>
        <span>Add To Cart</span>
      </button>
      <button className="snapLeftBtn" onClick={props.removeCart}>
        <span>Remove from Cart</span>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numberOfCake,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
    removeCart: () => {
      dispatch(removeFromCartCake());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
