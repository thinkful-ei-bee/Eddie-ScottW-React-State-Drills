import React from 'react';

class Accordion extends React.Component{


  static defaultProps = {
    sections: [],
  }

  state = {
   currentSection: null,
  }

  handleClick = (index) => {

    if (index === this.state.currentSection) {
      this.setState({
        currentSection: null,
      });
    }
    else {
      this.setState({
        currentSection: index,
      });
    }
  }

  render(){

    const buttons = this.props.sections.map((section, index) => (

      <li key={index}>
      <button onClick={() => this.handleClick(index)}>
      {section.title}
      </button>
      {
      this.state.currentSection === index &&
      <p>{section.content}</p>
      }
      </li>

    ))

    return (
      <ul>
        {buttons}
      </ul>
    )
  }
}

export default Accordion;