import React from "react";
import PropTypes from "prop-types";

function CardDetail(props) {
  const { card, onClickingDelete } = props;

//TODO=> incorporate mtg API.

  return (
    <React.Fragment>
      
      <div className="container col-md-2 align-items-center">
      <h1>{card.name}</h1>
      <img src={card.imageURL} alt="some text" Style="width: 18rem"></img>
      <br></br>
      <button onClick={ props.onClickingEdit }>Edit card</button>
      <button onClick= {() => props.onClickingDelete(card.id)}>Delete card</button>
      </div>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CardDetail;