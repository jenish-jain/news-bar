import { SELECT_CATEGORY, SELECT_COUNTRY } from "./actions";

const initialState = {
  category: "business",
  country: "in"
};

function newsApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        category: action.category
      });
    case SELECT_COUNTRY:
      return Object.assign({}, state, {
        country: action.country
      });

    default:
      return state;
  }
}

export default newsApp;
