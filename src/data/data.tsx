export interface ToDoDataInterface {
    _id: string;
    userName: string;
    title: string;
    date: string;
    __v?: number;
}

export const toDoData: ToDoDataInterface[] = [
    {
        _id: '63cbed3188ecf2cbe166b52c',
        userName: 'Maciej',
        title: 'Umyc sie',
        date: '2023.01.21-14:48',
        __v: 0,
    },
    {
        _id: '63cbe65fabcf9e35eb3a67a7',
        userName: 'Krzysiek',
        title: 'Umyc naczynia',
        date: '2023.01.21-14:19',
        __v: 0,
    },
    {
        _id: '63cbe49b16288211b3392090',
        userName: 'Grzesiek',
        title: 'Pozbierac drzewo',
        date: '2023.01.21-14:47',
        __v: 0,
    },
];
