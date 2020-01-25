import { SELECT_CATEGORY, SELECT_COUNTRY, UPDATE_DATA } from "./actions";

const initialState = {
  category: "business",
  country: "in",
  feeds: []
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
    case UPDATE_DATA:
      return Object.assign({}, state, {
        feeds: action.feeds
      });

    default:
      return state;
  }
}

export default newsApp;
