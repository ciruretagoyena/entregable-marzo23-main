import React, { useState } from 'react';
import Card from './Card';
import './FormComponent.css';

function FormComponent() {
  const [name, setName] = useState('');
  const [favoriteBook, setFavoriteBook] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setShowCard(false);
  };

  const handleBookChange = (event) => {
    setFavoriteBook(event.target.value);
    setShowCard(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || name.trim().length < 3) {
      setErrorMessage('El nombre debe tener al menos 3 caracteres');
      setShowCard(false);
    } else if (startsWithWhitespace(name)) {
      setErrorMessage('El nombre no debe contener espacios en blanco al comienzo');
      setShowCard(false);
    } else if (favoriteBook.length < 6) {
      setErrorMessage('El libro favorito debe tener al menos 6 caracteres');
      setShowCard(false);
    } else {
      setErrorMessage('');
      setShowCard(true);
    }
  };

  const startsWithWhitespace = (str) => /^\s/.test(str);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="input-group">
          <label>Libro favorito:</label>
          <input type="text" value={favoriteBook} onChange={handleBookChange} />
        </div>
        <button className="submit-button" type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showCard && !errorMessage && <Card name={name} favoriteBook={favoriteBook} />}
    </div>
  );
}

export default FormComponent;
