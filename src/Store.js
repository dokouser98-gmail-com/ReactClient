import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productDetailReducer } from "./reducers/ProductDetailReducer";
import { productListReducer } from "./reducers/ProductReducer";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
