import { combineReducers } from "redux";
import ParagraphReducer from "./paragraph/paragraph.reducer";

const rootReducer = combineReducers({
    paragraph: ParagraphReducer,
})

export default rootReducer