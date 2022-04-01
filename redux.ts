import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: [
        { id: 1, name: "Je fais un test", done: false }
    ],
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask = {
                id: state.length + 1,
                name: action.payload,
                done: false
            }

            state.push(newTask);
        },
        toggleTaskFinish: (state, action: PayloadAction<number>) => {
            const task = state.find(t => t.id === action.payload);
            
            //@ts-ignore
            task.done = !task.done;
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state = state.filter(t => t.id !== action.payload);
        }
    }
});

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
});

export const { addTask, toggleTaskFinish, deleteTask } = tasksSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectTasks = (state: RootState) => state.tasks;