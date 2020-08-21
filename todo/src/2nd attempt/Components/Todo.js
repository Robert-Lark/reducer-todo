import React from 'react';
import { ACTIONS } from '../Actions'

export function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}


function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={{color: todo.complete ? "#AAA" : "#000"}}>{todo.name}</span>
        <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>
            Completed?
        </button>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
                Delete
        </button>
        </div>
    );
}

export default Todo;