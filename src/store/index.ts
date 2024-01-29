import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reduces/index";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

