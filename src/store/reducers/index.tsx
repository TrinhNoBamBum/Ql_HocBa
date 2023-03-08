import { combineReducers } from "redux";
import countCart from "./countCart";

import counter from "./counter";
import getId from "./getId"
 
const allReducers = combineReducers({
  counter,countCart,getId
  
  // add more reducers here
});
export default allReducers