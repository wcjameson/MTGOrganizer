import * as c from './../actions/ActionTypes';

export const deleteCard = id => ({
  type: c.DELETE_CARD,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});