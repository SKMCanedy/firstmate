import * as actions from "../actions";

const initialState = {
    id: "5b7ce32657a288a4134d45a0",
    tasks: {
        "task1":{id:"task1", content: "Practice Process 1"},
        "task2":{id:"task2", content: "Practice Process 2"},
        "task3":{id:"task3", content: "Practice Process 3"},
        "task4":{id:"task4", content: "Practice Process 4"},
    },

    columns: {
        "column1": {
            id:"column1",
            title: "Process Bank",
            taskIds: ["task1", "task2", "task3", "task4"] 
        },
        "column2": {
            id:"column2",
            title: "Practice Staff 1",
            taskIds: [] 
        },
        "column3": {
            id:"column3",
            title: "Practice Staff 2",
            taskIds: [] 
        },

    },

    columnOrder: ["column1", "column2", "column3"],

    modalStatus: {
        showModal: false,
        modalType: ""
    }
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
                modalType: action.modalType
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
        delete stateCopy.tasks[deletedTask];
        const columnArray = stateCopy.columnOrder;
        for (let index=1; index<=columnArray.length; index++){
            const columnName = "column"+index;
            const columnObject = stateCopy.columns[columnName]
            const taskIdArray = columnObject.taskIds;
            if (taskIdArray.includes(action.currentTask)){
                const taskIndex = taskIdArray.indexOf(action.currentTask);
                taskIdArray.splice(taskIndex,1)
            }
        }
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
        const stateCopy = JSON.parse(JSON.stringify( state ));
        const columnIndex = stateCopy.columnOrder.indexOf(action.columnId)

        delete stateCopy.columns[action.columnId];
        stateCopy.columnOrder.splice(columnIndex,1)
        
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
    if (action.type === actions.UPDATE_SERVER_BOARD){
        console.log("Update Server Board action worked")
        //add post connection to api/board
    }
    
    return state;
    
}

export default firstmateReducer;