const {useState} = React; 

function App(){
	const [todos, setTodos] = useState([]);

	function addTodo(newTodo){
		setTodos([...todos, newTodo]);
	}

	return (
		<>
			<AddTodo addTodo={addTodo}/>
			<List data={todos}/>
		</>
	);
}

function AddTodo({addTodo}){
	const [todo, setTodo] = useState("");

	function handleChange(e){
		setTodo(e.target.value);
	}

	function handleSubmit(e){
		e.preventDefault();
		addTodo(todo);
		setTodo("");
	}	

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Add todo..." onChange={handleChange}/>
			<button type="submit"> Add </button>
		</form>
	);
}

function List({data}){
	const arr = data;
	const items = arr.map((item, index) => {
		return (
			<li key={index}> {item} </li>
		);
	});

	return (
		<ul> {items} </ul>
	);
}

ReactDOM.render(<App/>, document.querySelector("#app"));