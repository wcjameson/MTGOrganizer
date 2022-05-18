import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <div className="container col-md-4 align-items-center">
          <form onSubmit={props.formSubmissionHandler}>
            <input className="form-control"
              type='text'
              name='name'
              placeholder='card name' />
            <input className="form-control"
              type='text'
              name='color'
              placeholder='card color' />
            <input className="form-control"
              type='text'
              name='imageURL'
              placeholder='image URL' />
            <button type='submit' class="btn btn-dark">{props.buttonText}</button>
          </form>
        </div>
      
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func

}

export default ReusableForm;