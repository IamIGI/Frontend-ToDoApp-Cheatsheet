import { configureStore } from '@reduxjs/toolkit';

import toDoReducer from 'features/toDo/toDoSlice';

export const store = configureStore({
    reducer: {
        toDo: toDoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
