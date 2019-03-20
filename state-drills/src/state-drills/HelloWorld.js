import React from 'react';

class HelloWorld extends React.Component{
  
  state = {
    who: 'World',
  }

  handleClick = (value) =>{
    this.setState({
      who: value,
    });
  };

  render(){
    return(
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={() => this.handleClick('World')}>World</button>
        <button onClick={() => this.handleClick('Friend')}>Friend</button>
        <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    )
  }
}

export default HelloWorld;