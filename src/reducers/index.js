import {combineReducers} from 'redux'
import { reducer as formReducer } from "redux-form";

import firstmateReducer from "./firstmate-reducer";

export default combineReducers ({
    firstmate: firstmateReducer,
    form: formReducer
})

