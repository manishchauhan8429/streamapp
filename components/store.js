import {
    applyMiddleware,
    combineReducers
} from "redux";
import AnimationReducer from "@/tailwind/animation/animation.reducer";
import { createStore } from 'redux'
import thunk from "redux-thunk";
import logger from "redux-logger";
const middleware = applyMiddleware(    
    logger,
    thunk
);
const root = combineReducers({
   AnimationReducer
});
const store = createStore(root,{},middleware);

export default store;