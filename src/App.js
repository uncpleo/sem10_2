// src/App.js
import React, { useState } from 'react';
import Component1 from './components/Componente1';
import Component2 from './components/Componente2';
import Component3 from './components/Componente3';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color)
  return color;
};

function App() {
  const [color1, setColor1] = useState('blue');
  const [color2, setColor2] = useState('green');
  const [color3, setColor3] = useState('lightblue');

  const changeColors1 = () => {
    setColor1(getRandomColor());
  };
  const changeColors2 = () => {
    setColor2(getRandomColor());
  };
  const changeColors3 = () => {
    setColor3(getRandomColor());
  };

  const changeColors4 = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
    setColor3(getRandomColor());
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>EJERCICIO N°1</h2>
      <Component1 color={color1} onClick1={changeColors1} />
      <Component2 color={color2} onClick2={changeColors2} />
      <Component3 color={color3} onClick3={changeColors3} />
    </div>
  );
}

export default App;
