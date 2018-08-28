import * as actions from "./index.js";

describe('dndEndSameColumn', () => {
    it('Should return the action', () => {
        const dndResults = "column1";
        const start = "column2";
        const action = actions.dndEndSameColumn(dndResults,start);
        expect(action.type).toEqual("DND_END_SAME_COLUMN");
        expect(action.dndResults).toEqual(dndResults);
        expect(action.start).toEqual(start);
    });
});

describe('dndEndNewColumn', () => {
    it('Should return the action', () => {
        const dndResults = "column1";
        const start = "column2";
        const finish = "column3";
        const action = actions.dndEndNewColumn(dndResults, start, finish);
        expect(action.type).toEqual("DND_END_NEW_COLUMN");
        expect(action.dndResults).toEqual(dndResults);
        expect(action.start).toEqual(start);
        expect(action.finish).toEqual(finish);
    });
});

describe('openModal', () => {
    it('Should return the action', () => {
        const modalType = "testData1";
        const values = "testData2";
        const action = actions.openModal(modalType, values);
        expect(action.type).toEqual("OPEN_MODAL");
        expect(action.modalType).toEqual(modalType);
        expect(action.values).toEqual(values);
    });
});

describe('closeModal', () => {
    it('Should return the action', () => {
        const action = actions.closeModal();
        expect(action.type).toEqual("CLOSE_MODAL");
    });
});

describe('addTask', () => {
    it('Should return the action', () => {
        const values = "testData2";
        const action = actions.addTask(values);
        expect(action.type).toEqual("ADD_TASK");
        expect(action.values).toEqual(values);
    });
});

describe('deleteTask', () => {
    it('Should return the action', () => {
        const currentTask = "testData2";
        const action = actions.deleteTask(currentTask);
        expect(action.type).toEqual("DELETE_TASK");
        expect(action.currentTask).toEqual(currentTask);
    });
});

describe('addColumn', () => {
    it('Should return the action', () => {
        const values = "testData2";
        const action = actions.addColumn(values);
        expect(action.type).toEqual("ADD_COLUMN");
        expect(action.values).toEqual(values);
    });
});

describe('deleteColumn', () => {
    it('Should return the action', () => {
        const columnId = "testData2";
        const action = actions.deleteColumn(columnId);
        expect(action.type).toEqual("DELETE_COLUMN");
        expect(action.columnId).toEqual(columnId);
    });
});

describe('resetBoard', () => {
    it('Should return the action', () => {
        const action = actions.resetBoard();
        expect(action.type).toEqual("RESET_BOARD");
    });
});

describe('updateServerBoard', () => {
    it('Should return the action', () => {
        const action = actions.updateServerBoard();
        expect(action.type).toEqual("UPDATE_SERVER_BOARD");
    });
});

describe('loadBoard', () => {
    it('Should return the action', () => {
        const board = "testData2";
        const action = actions.loadBoard(board);
        expect(action.type).toEqual("LOAD_BOARD");
        expect(action.board).toEqual(board);
    });
});