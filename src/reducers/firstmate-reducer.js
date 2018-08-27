import axios from "axios";

import * as actions from "../actions";

const initialState = {
    id: "5b7ce32657a288a4134d45a0",
    tasks: {},
    columns: {},
    columnOrder: [],
    modalStatus: {}
}

const firstmateReducer = (state=initialState, action)=>{

    //---Landing Page Actions---

    if (action.type === actions.LOGIN_SUCCESS){
        return Object.assign({}, state, {
            authenticated: true
        });
    }

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
        console.log("Open Modal action worked!")
        return Object.assign({}, state, {
            modalStatus: {
                showModal: true,
                modalType: action.modalType,
                values: action.values
            }
        });
    }

    if (action.type === actions.CLOSE_MODAL){
        console.log("Close Modal action worked!")
        return Object.assign({}, state, {
            modalStatus: {
                showModal: false,
                modalType: ""
            }
        });
    }

    if (action.type === actions.ADD_TASK){
        console.log("Add Task action worked!");
        const taskIndex = Object.keys(state.tasks).length + 1;
        const newTask = 'task' + taskIndex;
        return Object.assign({}, state, {
            tasks: {
               ...state.tasks,
               [newTask]:{id: newTask, content: action.values.newTask},
            },
            columns: {
                ...state.columns,
                "column1": {
                    ...state.columns.column1,
                    taskIds: [...state.columns.column1.taskIds, newTask] 
                }
            }
        });
    }

    if (action.type === actions.DELETE_TASK){
        console.log("Delete Task action worked")
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
        //takes new column (staff card) and put on screen
        console.log("Add Column action worked!");
        const columnIndex = Object.keys(state.columns).length + 1;
        const newColumn = 'column' + columnIndex;
        return Object.assign({}, state, {
            columns: {
                ...state.columns,
                [newColumn]: {
                    id:newColumn,
                    title: action.values.newColumn,
                    taskIds: []
                }
            },
            columnOrder: [...state.columnOrder, newColumn]
        });
    }

    if (action.type === actions.DELETE_COLUMN){
        console.log("Delete Column action worked!");
        console.log(action.columnId)
        const stateCopy = JSON.parse(JSON.stringify( state ));
        const columnIndex = stateCopy.columnOrder.indexOf(action.columnId)

        delete stateCopy.columns[action.columnId];
        stateCopy.columnOrder.splice(columnIndex,1)
        console.log(stateCopy)
        return Object.assign({}, state, stateCopy)
    }

    if (action.type === actions.RESET_BOARD){
        console.log("Reset board action worked");
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
        console.log(colObject);
        return Object.assign({}, state, colObject)
    }
    
    //---Server Interactions--
    if (action.type === actions.LOAD_BOARD){
        console.log("Load Board worked")
        return Object.assign({}, state, action.board);
    }

    if (action.type === actions.UPDATE_SERVER_BOARD){
        console.log("Update Server Board action worked")
        //Updates main board. In future iterations, the action will be set up to take in the board id
        //so a custom url can be inputted
        const stateData = state;
        const authInfo = { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        axios.put("http://localhost:8080/api/board/5b7ce32657a288a4134d45a0", stateData, {headers: authInfo})
    }
    
    return state;
    
}

export default firstmateReducer;