import React from 'react';
import Component1 from './Componente1';

const Component2 = ({ color, onClick2 }) => {
  return <Component1 color={color} onClick1={onClick2} />;
};

export default Component2;
