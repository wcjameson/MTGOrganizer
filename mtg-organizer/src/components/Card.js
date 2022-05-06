import React from "react";
import PropTypes from "prop-types";

function Card(props){

  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.color}</p>
    </React.Fragment>
  )
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Card;