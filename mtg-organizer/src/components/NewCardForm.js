import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewCardForm(props) {

  const firestore = useFirestore();

  function addCardToFirestore(event) {
    event.preventDefault();
    props.onNewCardCreation();
    return firestore.collection('cards').add({
      name: event.target.name.value,
      color: event.target.color.value,
      timeOpen: firestore.FieldValue.serverTimestamp()
    });
  }



  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={addCardToFirestore}
      buttonText="Add card to database" />
    </React.Fragment>
  );
}

NewCardForm.propTypes = {
onNewCardCreation: PropTypes.func
};

export default NewCardForm;