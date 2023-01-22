import { ToDoDataInterface, ToDoDataMock } from 'data/data';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import toDo from 'api/toDo';
import { AddToDoInterface, EditToDoInterface, ToDoInitialStateInterface } from './toDoInterfaces';
import { RootState } from 'app/store';

const initialState: ToDoInitialStateInterface = {
    data: [],
    status: 'idle',
    error: null,
    dataById: ToDoDataMock,
    refresh: false,
};

export const fetchToDoList = createAsyncThunk('toDo/get', async (): Promise<ToDoDataInterface[]> => {
    const response = await toDo.getToDoList();
    return response;
});

export const addToDo = createAsyncThunk('toDo/add', async (object: AddToDoInterface): Promise<void> => {
    await toDo.addToDo(object);
});

export const editToDo = createAsyncThunk('toDo/edit', async (object: EditToDoInterface): Promise<void> => {
    await toDo.editToDo(object);
});

export const deleteToDo = createAsyncThunk('toDo/delete', async (id: string): Promise<void> => {
    await toDo.deleteToDo(id);
});

const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        refreshTodoList(state) {
            state.refresh = !state.refresh;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchToDoList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchToDoList.fulfilled, (state, action: PayloadAction<ToDoDataInterface[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchToDoList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(editToDo.pending, (state) => {
                // state.status = 'loading';
            })
            .addCase(editToDo.fulfilled, (state) => {
                // state.status = 'succeeded';
            })
            .addCase(editToDo.rejected, (state) => {
                // state.status = 'failed';
            })
            .addCase(deleteToDo.pending, (state) => {
                // state.status = 'loading';
            })
            .addCase(deleteToDo.fulfilled, (state) => {
                // state.status = 'succeeded';
            })
            .addCase(deleteToDo.rejected, (state) => {
                // state.status = 'failed';
            })
            .addCase(addToDo.pending, (state) => {
                // state.status = 'loading';
            })
            .addCase(addToDo.fulfilled, (state) => {
                // state.status = 'succeeded';
            })
            .addCase(addToDo.rejected, (state) => {
                // state.status = 'failed';
            });
    },
});

export const getToDoList = (state: RootState) => state.toDo.data;
export const getToDoStatus = (state: RootState) => state.toDo.status;
export const isRefreshToDoList = (state: RootState) => state.toDo.refresh;
export const getToDoItem = (state: RootState, toDoId: string) => state.toDo.data.find((toDo) => toDo._id == toDoId);

export const { refreshTodoList } = toDoSlice.actions;
export default toDoSlice.reducer;
