class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoValue: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      todoValue: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {todoValue} = this.state;
    const todo = {
      name: todoValue,
      done: false
    }
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  handleDelete = (e) => {
    const id = e.target.id;
    const allTodos = [...this.state.todos];
    const deleteTodo = allTodos.splice(id, 1);
    this.setState({
      todos: [...allTodos],
      lastDeletedTodos: [{
        todo: deleteTodo[0],
        id
      }]
    })
  }
  render() {
    const{todos} = this.state;
    // let item = '';
    // if (todos.length) {
    //   item = todos.map(todo => (
    //     <div>{todo.name}</div>
    //   ))
    // }
    return <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input>
        <button type="submit">Add todo</button>
      </form>
      {
        todos && todos.map((todo, i) => (
          <div id={i}>
            <span>{todo.name}</span>
            <button id={i} onClick={this.handleDelete}>X</button>
          </div> 
        ))
      }
    </React.Fragment>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));