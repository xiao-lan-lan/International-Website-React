import { createStore } from "redux";
import reducer from "../reducer/index";

const state = {
  lang: "zh"
};

const store = createStore(reducer, state);

export default store;
