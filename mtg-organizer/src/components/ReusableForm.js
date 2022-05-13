import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='card name' />
        <input
          type='text'
          name='color'
          placeholder='card color' />
          <input
          type='text' 
          name='imageURL'
          placeholder='image URL' />
          <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func

}

export default ReusableForm;