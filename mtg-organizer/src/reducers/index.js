import formVisibleReducer from "./form-visible-reducer";
import cardListReducer from "./card-list-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainCardList: cardListReducer,
  firestore: firestoreReducer
});

export default rootReducer;