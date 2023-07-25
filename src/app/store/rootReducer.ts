import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "features/ListPage";

const rootReducer = combineReducers({
  list: postsReducer,
});

export default rootReducer;
