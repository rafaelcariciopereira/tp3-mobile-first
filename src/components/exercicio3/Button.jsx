import React from 'react';

function Button({ label }) {
  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return <button style={buttonStyle}>{label}</button>;
}

export default Button;
