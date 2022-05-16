import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import EditCardForm from './EditCardForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'
//To Do =>  Configure database rules, add auth/login, collections and fields firestore, styling w/ react bootstrap

class CardControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      editing: false
    };
  }


  handleAddingNewCardToList = () => {
    const { dispatch } = this.props;
    console.log(this.props);
    const action = a.toggleForm();
    dispatch(action);
  }

  handleEditingCardInList = () => {
    this.setState({
      editing: false,
      selectedCard: null
    });
  }

  handleChangingSelectedCard = (id) => {
    this.props.firestore.get({ collection: 'cards', doc: id }).then((card) => {
      const firestoreCard = {
        name: card.get("name"),
        color: card.get("color"),
        imageURL: card.get("imageURL"),
        id: card.id
      }
      this.setState({ selectedCard: firestoreCard });
    })
  }

  handleDeletingCard = (id) => {
    this.props.firestore.delete({ collection: 'cards', doc: id });
    this.setState({
      selectedCard: null
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleClick = () => {
    if (this.state.selectedCard != null) {
      this.setState({
        selectedCard: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCardForm card={this.state.selectedCard} onClickingEdit={this.handleEditingCardInList} />
      buttonText = "Card List";
    } else if (this.state.selectedCard != null) {
      currentlyVisibleState = <CardDetail card={this.state.selectedCard} onClickingDelete={this.handleDeletingCard} onClickingEdit={this.handleEditClick} />
      buttonText = "Back to List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCardToList} />;
      buttonText = "Card List";
    } else {
      currentlyVisibleState = <CardList onCardSelection={this.handleChangingSelectedCard} />;
      buttonText = "Add Card";
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    // mainCardList: state.mainCardList, //mapping state slices to component props
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CardControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

CardControl = connect(mapStateToProps)(CardControl);

export default withFirestore(CardControl);