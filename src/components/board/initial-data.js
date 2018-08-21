const initialData = {
        tasks: {
            "process-1":{id:"process-1", content: "Practice Process 1"},
            "process-2":{id:"process-2", content: "Practice Process 2"},
            "process-3":{id:"process-3", content: "Practice Process 3"},
            "process-4":{id:"process-4", content: "Practice Process 4"},
        },
    
        columns: {
            "staff-1": {
                id:"staff-2",
                title: "Process Bank",
                taskIds: ["task1", "task2", "task3", "task4"] 
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
    
        columnOrder: ["staff-1", "staff-1", "staff-1"]
    }

export default initialData;