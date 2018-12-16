class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoValue: ''
    }
  }
  handleClick = (e) => {
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
        <input type="text" onChange={this.handleClick}></input>
        <button type="submit">Add todo</button>
      </form>
      {
        todos && todos.map((todo, i) => (
          <div id={i}>
            <span>{todo.name}</span>
          </div> 
        ))
      }
    </React.Fragment>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));