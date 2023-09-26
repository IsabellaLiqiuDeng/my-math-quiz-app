import React from 'react';
import './Addition.css'; 

function ReloadQuizButton({ onClick }) {
  return (
    <button className="reload-button" onClick={onClick}>
      Reload Quiz
    </button>
  );
}

export default ReloadQuizButton;
