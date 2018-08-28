import axios from "axios";

import * as actions from "../actions";
import { API_MAIN_BOARD_URL } from "../config";

const initialState = {
    id: "",
    tasks: {},
    columns: {},
    columnOrder: [],
    modalStatus: {}
}

const firstmateReducer = (state=initialState, action)=>{

    //---Board Actions---

    //Drag and Drop actions
    if (action.type === actions.DND_END_SAME_COLUMN){
        const dndResults = action.dndResults;
        const start = action.start;
        const source = dndResults.source;
        const destination = dndResults.destination;
        const draggableId = dndResults.draggableId;
        
        const newTaskIds = Array.from(start.taskIds);

        //modifies the newTaskIds array - saying we want to remove 1 item
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...start,
            taskIds: newTaskIds
        }

        return Object.assign({}, state, {
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            }
        });
    }

    if (action.type === actions.DND_END_NEW_COLUMN){
        const dndResults = action.dndResults;
        const start = action.start;
        const finish = action.finish;
        const source = dndResults.source;
        const destination = dndResults.destination;
        const draggableId = dndResults.draggableId;

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
    
        const newStart = {
        ...start,
        taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinish = {
        ...finish,
        taskIds: finishTaskIds
        };

        return Object.assign({}, state, {
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        });
    }

    //User Actions
    if (action.type === actions.OPEN_MODAL){
        return Object.assign({}, state, {
            modalStatus: {
                showModal: true,
                modalType: action.modalType,
                values: action.values
            }
        });
    }

    if (action.type === actions.CLOSE_MODAL){
        return Object.assign({}, state, {
            modalStatus: {
                showModal: false,
                modalType: ""
            }
        });
    }

    if (action.type === actions.ADD_TASK){
        function createTaskId(){ //creates random id number
            const randStr = Math.random().toString(36).substring(7);
            const randNum = Math.floor((Math.random() * 100000) + 1);
            let newTaskName = 'column' + randNum +randStr;

            if (state.columnOrder.includes(newTaskName)){
                newTaskName = newTaskId + randNum + randStr;
            }
            return newTaskName;
        }

        const newTaskId = createTaskId();
        return Object.assign({}, state, {
            tasks: {
               ...state.tasks,
               [newTaskId]:{id: newTaskId, content: action.values.newTask},
            },
            columns: {
                ...state.columns,
                "column1": {
                    ...state.columns.column1,
                    taskIds: [...state.columns.column1.taskIds, newTaskId] 
                }
            }
        });
    }

    if (action.type === actions.DELETE_TASK){
        const deletedTask = action.currentTask;
        const stateCopy = JSON.parse(JSON.stringify( state ));
        delete stateCopy.tasks[deletedTask]; //delete task object from "tasks"
        const columnArray = stateCopy.columnOrder;

        //find the column object that contains the task in it's taskIds array and remove it
        columnArray.forEach((column)=>{
            const columnObject = stateCopy.columns[column];
            const taskIdArray = columnObject.taskIds;

            if (taskIdArray.includes(action.currentTask)){
                const taskIndex = taskIdArray.indexOf(action.currentTask);
                taskIdArray.splice(taskIndex,1)
            }
        });

        return Object.assign({}, state, stateCopy)
    }

    if (action.type === actions.ADD_COLUMN){
        //takes new column (staff card) and puts into state so can be displayed on screen
        function createColumnId(){ //creates random id number
            const randStr = Math.random().toString(36).substring(7);
            const randNum = Math.floor((Math.random() * 100000) + 1);
            let newColName = 'column' + randNum +randStr;

            if (state.columnOrder.includes(newColName)){
                newColName = newColName + randNum + randStr;
            }
            return newColName;
        }

        const newColId = createColumnId();
        return Object.assign({}, state, {
            columns: {
                ...state.columns,
                [newColId]: {
                    id:newColId,
                    title: action.values.newColumn,//newColumn is the only key brought in through values
                    taskIds: []
                }
            },
            columnOrder: [...state.columnOrder, newColId]
        });
    }

    if (action.type === actions.DELETE_COLUMN){
        const stateCopy = JSON.parse(JSON.stringify( state ));
        const columnIndex = stateCopy.columnOrder.indexOf(action.columnId)

        delete stateCopy.columns[action.columnId];
        stateCopy.columnOrder.splice(columnIndex,1)
        return Object.assign({}, state, stateCopy)
    }

    if (action.type === actions.RESET_BOARD){
        const allTasks = Object.keys(state.tasks);
        const colName = Object.keys(state.columns);
        const colObject = {
            columns:{}
        }
        colName.forEach(col=>{
            colObject.columns[col]={
                ...state.columns[col],
                taskIds:[]
            }
        })
        
        colObject.columns.column1 = {
            ...state.columns.column1,
            taskIds:allTasks
        }
        return Object.assign({}, state, colObject)
    }
    
    //---Server Interactions--
    if (action.type === actions.LOAD_BOARD){
        return Object.assign({}, state, action.board);
    }

    if (action.type === actions.UPDATE_SERVER_BOARD){
        //Updates main board. In future iterations, the action will be set up to take in the board id
        //so a custom url can be inputted
        const stateData = state;
        const authInfo = { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        axios.put(API_MAIN_BOARD_URL, stateData, {headers: authInfo})
    }
    
    return state;
    
}

export default firstmateReducer;