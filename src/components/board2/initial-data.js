const initialData = {
    tasks: {
        "task1":{id:"task1", content: "Practice Process 1"},
        "task2":{id:"task2", content: "Practice Process 2"},
        "task3":{id:"task3", content: "Practice Process 3"},
        "task4":{id:"task4", content: "Practice Process 4"},
    },

    columns: {
        "column1": {
            id:"column1",
            title: "Practice Staff 1",
            taskIds: ["task1", "task2", "task3", "task4"] 
        },
        "column2": {
            id:"column2",
            title: "Practice Staff 2",
            taskIds: [] 
        },
        "column3": {
            id:"column3",
            title: "Practice Staff 3",
            taskIds: [] 
        },

    },

    columnOrder: ["column1", "column2", "column3"]
}

export default initialData;