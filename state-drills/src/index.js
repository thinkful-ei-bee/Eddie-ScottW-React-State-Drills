import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun.js'
import Accordion from './state-drills/Accordion.js'

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

ReactDOM.render(<Accordion sections={sections} />, document.getElementById('root'));

//what we rendered for RouletteGun
/* <RouletteGun bulletInChamber={8} /> */