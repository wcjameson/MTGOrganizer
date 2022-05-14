import React from "react";
import PropTypes from "prop-types";

function CardDetail(props) {
  const { card, onClickingDelete } = props;

//TODO=> additional bootstrap styling, style signin/up forms, add some sort of banner? After some basic styling, incorporate mtg API.
  
  return (
    <React.Fragment>
      <h1>Card Detail</h1>
      <div className="container">
      <h3>{card.name} - {card.color}</h3>
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