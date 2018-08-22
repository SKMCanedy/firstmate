import * as actions from "../actions";

const initialState = {
    id: "",
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

    columnOrder: ["column1", "column2", "column3"]
}

const firstmateReducer = (state=initialState, action)=>{
    if (action.type === actions.LOGIN_SUCCESS){
        return Object.assign({}, state, {
            authenticated: true
        });
    }

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

    
    return state;
    
}

export default firstmateReducer;