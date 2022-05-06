import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditCardForm(props) {
  const firestore = useFirestore();
  const { card } = props;

  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onClickingEdit();
    const propertiesToUpdate = {
      name: event.target.name.value,
      color: event.target.color.value
    }
    return firestore.update({ collection: 'cards', doc: card.id }, propertiesToUpdate)
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditCardFormSubmission}
      buttonText="Update card" />
    </React.Fragment>
  )
}

EditCardForm.propTypes = {
  card: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default EditCardForm;