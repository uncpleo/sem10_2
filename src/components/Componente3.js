import React from 'react';

const Component3 = ({ color, onClick3 }) => {
  const divStyle = {
    backgroundColor: color,
    height: '300px',
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    backgroundImage: `url('./assets/totoro.png')`,
    backgroundSize: 'cover',
  };

  return (
    <div style={divStyle}>
      <button onClick={onClick3}>Change Color</button>
    </div>
  );
};

export default Component3;
