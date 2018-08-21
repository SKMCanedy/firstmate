import * as actions from "../actions";

const initialState = {
    tasks: {
        "process-1":{id:"process-1", content: "Practice Process 1"},
        "process-2":{id:"process-2", content: "Practice Process 2"},
        "process-3":{id:"process-3", content: "Practice Process 3"},
        "process-4":{id:"process-4", content: "Practice Process 4"},
    },

    columns: {
        "staff-1": {
            id:"staff-1",
            title: "Process Bank",
            taskIds: ["process-1", "process-2", "process-3", "process-4"] 
        },
        "staff-2": {
            id:"staff-2",
            title: "Bob",
            taskIds: [] 
        },
        "staff-3": {
            id:"staff-3",
            title: "Sally",
            taskIds: [] 
        },

    },

    columnOrder: ["staff-1", "staff-2", "staff-3"]
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
            base: {
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn
                }
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
            base: {
                columns: {
                    ...this.state.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish
                }
            }
        });
    }

    
    return state;
    
}

export default firstmateReducer;