import React from "react";

import Test from './Test';
import ToDoList from './ToDoList';
import listData from './listData';
import LogIn from './LogIn';
import Conditional from './Conditional';

class MainContent extends React.Component {

  state = {
    text: "",
    textError: "",
    listData: listData,
    isLoading: true
  };
  
  validateText = name => {
    const regex = /[A-Za-z]{3,}/;

    return (!regex.test(name) && name.length !== 0)
      ? "Должно быть хотябы 3 буквы подряд."
      : "";
  };
  
  textChange = event =>
  this.setState({
    text: event.target.value
  });

  textBlur = () =>{
    const { text } = this.state;

    const textError = this.validateText( text );

    return this.setState({ textError });
  }

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.listData.map(ToDo => {
        if (ToDo.id === id) {
          ToDo.completed = !ToDo.completed
        }
        return ToDo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
          isLoading: false
      })
    }, 1500)
  }

  render() {
    return (
      <main className="form-group">

        <div className="jumbotron">
          <input className="form-control-lg" type="text" name="text" placeholder="Только текст" onChange={this.textChange} onBlur={this.textBlur}/>
          <Test text = {this.state}/>
        </div>

        <div className="jumbotron">
          <LogIn/>
        </div>

        <div className="jumbotron">
          {
            this.state.isLoading ?
            <h5>Loading...</h5> :
            <Conditional />
          }
        </div>

        <div className="jumbotron">
        {
          this.state.listData.map( (name) => {
            return (
              <ToDoList key = {name.id} text = {name} handleChange = {this.handleChange}/>
            )
          })
        }
        </div>
        
      </main>
    )
  }
}

export default MainContent;