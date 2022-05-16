import React from "react";
import PropTypes from "prop-types";

function Card(props) {

  return (
    <React.Fragment>

      <div onClick={() => props.whenCardClicked(props.id)}>
        <div className="card" Style="width: 10rem;">
          <img src={props.imageURL} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {/* <p className="card-text">{props.color}</p> */}
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