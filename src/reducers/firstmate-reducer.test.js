import axios from "axios";

import * as actions from "../actions";
import { API_MAIN_BOARD_URL } from "../config";
import firstmateReducer from "./firstmate-reducer";

describe('firstmateReducer', () => {
    const mockState = {
        columnOrder: ["column1"],
        id: "5b7ce32657a288a4134d45a0",
        tasks: {
            task1: {
                id: "task1",
                content: "test task 1"
            }
        },
        columns: {
            column1: {
                id: "column1",
                title: "Process Bank",
                taskIds: ["task1"]
            }
        },
        modalStatus: {
            showModal: true,
            modalType: "taskModal"
        }
    };

    const initialState = {
        id: "",
        tasks: {},
        columns: {},
        columnOrder: [],
        modalStatus: {}
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = firstmateReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = firstmateReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('openModal', () => {
        it('Should update modal in state', () => {
            let state;
            const modalType = "taskModal";
            const values = "test values";
            state = firstmateReducer(state, actions.openModal(modalType, values));
            expect(state).toEqual({
                ...initialState,
                modalStatus: {
                    showModal: true,
                    modalType: "taskModal",
                    values: "test values"
                }
            });
        });
    });

    describe('closeModal', () => {
        it('Should update modal in state', () => {
            let state;
            state = firstmateReducer(state, actions.closeModal());
            expect(state).toEqual({
                ...initialState,
                modalStatus: {
                    showModal: false,
                    modalType: ""
                }
            });
        });
    });

    describe('addTask', () => {
        it('Should add a new task', () => {
            let state;
            const values = {newTask:"test task details"};
            state = firstmateReducer(mockState, actions.addTask(values));
            expect(state).toEqual({
                ...mockState,
                tasks: {
                    ...mockState.tasks,
                    task2:{id: "task2", content: "test task details"},
                 },
                 columns: {
                    ...mockState.columns,
                     "column1": {
                        ...mockState.columns.column1,
                         taskIds: [...mockState.columns.column1.taskIds,"task2"] 
                     }
                 }
            });
        });
    });

    describe('deleteTask', () => {
        it('Should delete a task', () => {
            let state;
            const currentTask = "task1";
            state = firstmateReducer(mockState, actions.deleteTask(currentTask));
            expect(state).toEqual({
                ...mockState,
                tasks: {},
                 columns: {
                    ...mockState.columns,
                     "column1": {
                        ...mockState.columns.column1,
                         taskIds: [] 
                     }
                 }
            });
        });
    });

    describe('addColumn', () => {
        it('Should add a new column', () => {
            let state;
            const values = {newColumn:"test column name"};
            state = firstmateReducer(mockState, actions.addColumn(values));
            expect(state).toEqual({
                ...mockState,
                columnOrder: ["column1", "column2"],
                 columns: {
                    ...mockState.columns,
                    column2: {
                        id: "column2",
                        title: "test column name",
                        taskIds: []
                    }
                 }
            });
        });
    });


    describe('deleteColumn', () => {
        it('Should delete a column', () => {
            let state;
            const columnId = "column1";
            state = firstmateReducer(mockState, actions.deleteColumn(columnId));
            expect(state).toEqual({
                ...mockState,
                columns: {},
                columnOrder:[]
            });
        });
    });

    describe('resetBoard', () => {
        it('Should move all tasks to column 1 taskID array', () => {
            let state;
            let mockState2 = Object.assign({}, mockState, {
                columns: {
                    column1: {
                        id: "column1",
                        title: "Process Bank",
                        taskIds: ["task1"]
                    },
                    column2: {
                        id: "column2",
                        title: "test 2",
                        taskIds: ["task2"]
                    }
                },
                tasks: {
                    task1: {
                        id: "task1",
                        content: "test task 1"
                    },
                    task2: {
                        id: "task2",
                        content: "test task 2"
                    }
                },
            })
            state = firstmateReducer(mockState2, actions.resetBoard());
            expect(state).toEqual({
                ...mockState2,
                columns: {
                    column1: {
                        id: "column1",
                        title: "Process Bank",
                        taskIds: ["task1","task2"]
                    },
                    column2: {
                        id: "column2",
                        title: "test 2",
                        taskIds: []
                    }
                }
            });
        });
    });

    describe('loadBoard', () => {
        it('Should load a new object into the state', () => {
            let state;
            const board = initialState;
            state = firstmateReducer(mockState, actions.loadBoard(board));
            expect(state).toEqual(initialState);
        });
    });







})