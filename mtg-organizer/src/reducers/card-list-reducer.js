import * as c from './../actions/ActionTypes';

const cardListReducer =  (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
    case c.DELETE_CARD:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default cardListReducer;