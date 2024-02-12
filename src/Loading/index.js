import React from 'react';
import './Loading.css'
function Loading() {
  return (
    <div className="loader-container">
      <div className="loader">Cargando, espera un poquito amor...</div>
      <img className="gif-cats" src='https://i.pinimg.com/originals/5e/a5/c7/5ea5c7eea88a26915e4eede44e86a495.gif'></img>
    </div>
  );
}

export default Loading;
 