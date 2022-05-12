import React from "react";
import PropTypes from "prop-types";

function Card(props){

  return(
    <React.Fragment>
      <div onClick = {() => props.whenCardClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.color}</p>
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