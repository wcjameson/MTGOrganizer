import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import PropTypes from "prop-types";



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