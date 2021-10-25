import React , {Component} from 'react';
import './App.css';
import TodoItems from "./components/todoitems/Todoitem";
import AddItem from "./components/Additem/Additem";

class App extends Component {
  state = {
    items : [
      {id:1 , name: "Mahmoud", age: 25},
      {id:2 , name: "Mustafa", age: 20},
      {id:3 , name: "Ali", age: 25}
    ]
  }
  
  deleteItem = (id) =>{
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App container">
        <h1 className = "text-center">Todo List</h1>
        <TodoItems items = {this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
