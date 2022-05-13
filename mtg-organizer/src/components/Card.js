import React from "react";
import PropTypes from "prop-types";

function Card(props){

  return(
    <React.Fragment>
      {/* <div onClick = {() => props.whenCardClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.color}</p>
      </div> */}
      <div onClick = {() => props.whenCardClicked(props.id)}>
      <div className="card">
  <img src={props.imageURL} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>


    </React.Fragment>
  )
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string
}

export default Card;