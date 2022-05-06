import React from "react";
import PropTypes from "prop-types";

function CardDetail(props) {
  const { card, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Card Detail</h1>
      <h3>{card.name} - {card.color}</h3>
      <button onClick={ props.onClickingEdit }>Edit card</button>
      <button onClick= {() => props.onClickingDelete(card.id)}>Delete card</button>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CardDetail;