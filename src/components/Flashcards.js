import React, { useState } from 'react';
import './FlashcardsPage.css';

const Flashcards = () => {
  // Sample flashcard data
  const [flashcards, setFlashcards] = useState([
    { id: 1, term: 'JavaScript', definition: 'A high-level programming language.' },
    { id: 2, term: 'React', definition: 'A JavaScript library for building user interfaces.' },
  ]);

  // State for creating a new flashcard
  const [newFlashcard, setNewFlashcard] = useState({
    term: '',
    definition: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlashcard({
      ...newFlashcard,
      [name]: value,
    });
  };

  // Add a new flashcard
  const addFlashcard = () => {
    if (newFlashcard.term && newFlashcard.definition) {
      setFlashcards([
        ...flashcards,
        {
          id: flashcards.length + 1,
          term: newFlashcard.term,
          definition: newFlashcard.definition,
        },
      ]);
      setNewFlashcard({ term: '', definition: '' });
    }
  };

  // Delete a flashcard
  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  return (
    <div className="flashcards-page">
      <h1>Flashcard Management</h1>

      {/* Flashcard List */}
      <section className="flashcard-list">
        <h2>Existing Flashcards</h2>
        {flashcards.length ? (
          <div className="flashcard-grid">
            {flashcards.map((flashcard) => (
              <div key={flashcard.id} className="flashcard-card">
                <h3>{flashcard.term}</h3>
                <p>{flashcard.definition}</p>
                <button onClick={() => deleteFlashcard(flashcard.id)}>Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No flashcards available.</p>
        )}
      </section>

      {/* Create New Flashcard */}
      <section className="create-flashcard">
        <h2>Create New Flashcard</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addFlashcard();
          }}
        >
          <input
            type="text"
            name="term"
            placeholder="Term"
            value={newFlashcard.term}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="definition"
            placeholder="Definition"
            value={newFlashcard.definition}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Flashcard</button>
        </form>
      </section>
    </div>
  );
};

export default Flashcards;
