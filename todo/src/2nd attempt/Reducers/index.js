import App from "../App"
import { ACTIONS } from "../Actions"
import { newTodo } from "../Components/Todo"

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]


export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);

        default:
            return state;
    }
}