//---Landing Page Actions---
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const loginSubmit= ()=>({
    type: LOGIN_SUBMIT,
})

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = ()=>({
    type: LOGIN_SUCCESS,
})

//---Board Actions---

//Drag and Drop actions
export const DND_END_SAME_COLUMN = "DND_END_SAME_COLUMN";
export const dndEndSameColumn= (dndResults, start)=>({
    type: DND_END_SAME_COLUMN,
    dndResults,
    start
})

export const DND_END_NEW_COLUMN = "DND_END_NEW_COLUMN";
export const dndEndNewColumn= (dndResults, start, finish)=>({
    type: DND_END_NEW_COLUMN,
    dndResults,
    start,
    finish
})

//User Actions

export const ADD_TASK = "ADD_TASK";
export const addTask = (values)=>({
    type: ADD_TASK,
    values
})

export const ADD_COLUMN = "ADD_COLUMN";
export const addColumn = (values)=>({
    type: ADD_COLUMN,
    values
})


//---Server Interactions---

export const UPDATE_SERVER_BOARD = "UPDATE_SERVER_BOARD";
export const updateServerBoard= ()=>({
    type: UPDATE_SERVER_BOARD
})