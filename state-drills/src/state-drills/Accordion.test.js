import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe(`Accordion Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders an empty li when sections prop is not given', ()=>{
    const tree = renderer.create(<Accordion />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders no sections as active by default',() => {
    const tree = renderer.create(<Accordion sections={sections}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

})