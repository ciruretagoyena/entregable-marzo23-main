import React from 'react';

function Card({ name, favoriteBook }) {
  return (
    <div className="card">
      <h2>Información del Usuario:</h2>
      <p>Nombre: {name}</p>
      <p>Libro Favorito: {favoriteBook}</p>
    </div>
  );
}

export default Card;

