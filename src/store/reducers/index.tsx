import { combineReducers } from "redux";
import countCart from "./countCart";

import counter from "./counter";
import getId from "./getId"
import getBlog from "./getBlog";
import ReCart from "./cart";
 
const allReducers = combineReducers({
  counter,countCart,getId,getBlog,ReCart
  
  // add more reducers here
});
export default allReducers