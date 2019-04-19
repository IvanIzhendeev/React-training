import React from "react";

class LogIn extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    let logInState = (this.state.isLoggedIn) ? "in" : "out"
    return(
      <div>
        <h3>You are currently logged {logInState}</h3>
      </div>
    )
  }
}

export default LogIn;
