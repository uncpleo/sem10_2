import React from 'react';

const Component1 = ({ color, onClick1 }) => {
  const divStyle = {
    backgroundColor: color,
    height: '300px',
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  };

  return (
    <div style={divStyle}>
      <button onClick={onClick1}>Change Color</button>
    </div>
  );
};

export default Component1;
