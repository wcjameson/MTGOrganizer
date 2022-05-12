import * as c from './../actions/ActionTypes';

const formVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_FORM:
    return !state;
    default:
      return state;
  }
}

export default formVisibleReducer;