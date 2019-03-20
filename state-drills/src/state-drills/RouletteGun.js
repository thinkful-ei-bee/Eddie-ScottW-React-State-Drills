import React from 'react';

class RouletteGun extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    }
  }

  

  handleTrigger = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(()=>{
      let ranNum = Math.ceil(Math.random()*8);
      this.setState({
        chamber: ranNum,
        spinningTheChamber: false,
      })
    },2000)
  }

  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  handleRender = () => {
    if (this.state.spinningTheChamber){
      return 'spinning the chamber and pulling the trigger! ...';
    } if (this.state.chamber === this.props.bulletInChamber){
      return 'BANG!!!!'
    } else {
      return `you're safe!`;
    }
  }

  render(){
    return(
      <div>
        <p>{this.handleRender()}</p>
        <button onClick={this.handleTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;