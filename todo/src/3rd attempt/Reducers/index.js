import App from "../App"
import { ACTIONS } from "../Actions"
import { newTodo } from "../Components/Todo"
import imgArray from "../img/imgArray"

export const initialState = [
    {
        item: 'https://f4.bcbits.com/img/a0430751405_10.jpg',
        completed: false,
        id: 3892987585
    },
    {
        item: 'https://f4.bcbits.com/img/0011531284_10.jpg',
        completed: false,
        id: 3892987581
    },
    {
        item: 'https://f4.bcbits.com/img/a2378223090_10.jpg',
        completed: false,
        id: 3892987582
    },
]


export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.item)];
        case ACTIONS.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}