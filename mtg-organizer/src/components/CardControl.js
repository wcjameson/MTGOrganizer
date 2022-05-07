import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import PropTypes from "prop-types";

//To Do => CardControl conditionals to show components and create/define methods for 'CRUD' capabilities. Update src/index.js entrypoint/add Firebase/Firestore context.  Create reducers card-list and form-visible for deleting a card and toggleing between components

class CardControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      editing: false
    };
  }

  render() {


    return(
      <React.Fragment>

      </React.Fragment>
    )
  }
}

export default CardControl