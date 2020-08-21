import React, { useReducer, useState } from "react";
import Todo from "./Components/Todo";
import { reducer, initialState } from "./Reducers"
import { newTodo } from "./Components/Todo"
import { ACTIONS } from "./Actions"



function App() {
    const [todos, dispatch] = useReducer(reducer, initialState );
	const [name, setName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName("");
	}
console.log(todos)
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
            <div>
            {todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
            </div>
		</div>
	);
}

export default App;
