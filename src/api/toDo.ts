import axios from 'axios';
import { BASE_URL } from 'data/data';
import { AddToDoInterface, EditToDoInterface } from 'features/toDo/toDoInterfaces';

const toDoApi = axios.create({
    baseURL: `${BASE_URL}/todolist`,
    headers: { 'Content-Type': 'application/json' },
});

const getToDoList = async () => {
    try {
        const response = await toDoApi.get('/all');
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};

const addToDo = async (object: AddToDoInterface) => {
    try {
        await toDoApi.post('/add', object);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};

const editToDo = async (object: EditToDoInterface) => {
    try {
        await toDoApi.patch('/edit', object);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};

const deleteToDo = async (id: string) => {
    try {
        await toDoApi.delete(`/delete/${id}`);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`error: ${err.message}`);
            }
        } else {
            throw new Error('different error than axios');
        }
    }
};

export default { getToDoList, addToDo, editToDo, deleteToDo };
