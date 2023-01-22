import { ToDoDataInterface } from 'data/data';

export interface ToDoInitialStateInterface {
    data: ToDoDataInterface[];
    status: string;
    error: undefined | string | null;
    dataById: ToDoDataInterface;
    refresh: boolean;
}

export interface AddToDoInterface {
    userName: string;
    title: string;
}

export interface EditToDoInterface {
    id: string;
    title: string;
}
