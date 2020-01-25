import { createStore } from "redux";
import newsApp from "./reducer";
const store = createStore(newsApp);

export default store;
