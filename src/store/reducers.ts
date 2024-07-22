// src/store/reducers.ts
import { combineReducers } from 'redux';

const exampleReducer = (state = {}, action: { type: any; }) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
