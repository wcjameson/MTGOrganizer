import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded,} from 'react-redux-firebase';

function CardList(props) {

  useFirestoreConnect([
    { collection: 'cards' }
  ]);

  const cards = useSelector(state => state.firestore.ordered.cards);

  if (isLoaded(cards)) {

    return(
      <React.Fragment>
        {cards.map((card) => {
          return <Card
          whenCardClicked={props.onCardSelection}
          name={card.name}
          color={card.color}
          imageURL={card.imageURL}
          id={card.id}
          key={card.id} />
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Summoning collection...</h3>
      </React.Fragment>
    )
  }
}

CardList.propTypes = {
  onCardSelection: PropTypes.func
}

export default CardList;