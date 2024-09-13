import React, { useState } from 'react';
import './GenerateContent.css';

const GenerateContent = () => {
  // State for form data and generated content
  const [formData, setFormData] = useState({
    textInput: '',
    fileInput: null,
  });
  const [generatedContent, setGeneratedContent] = useState({
    quizzes: [],
    flashcards: [],
    summaries: [],
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'fileInput' ? files[0] : value,
    });
  };

  // Simulate content generation (replace with API call)
  const generateContent = async () => {
    // Simulate content generation logic
    setGeneratedContent({
      quizzes: [
        { id: 1, title: 'Sample Quiz', createdAt: new Date().toISOString().split('T')[0] },
      ],
      flashcards: [
        { id: 1, title: 'Sample Flashcard', createdAt: new Date().toISOString().split('T')[0] },
      ],
      summaries: [
        { id: 1, title: 'Sample Summary', createdAt: new Date().toISOString().split('T')[0] },
      ],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    generateContent();
  };

  return (
    <div className="generate-content">
      <h1>Generate Learning Content</h1>
      <form onSubmit={handleSubmit} className="generate-form">
        <textarea
          name="textInput"
          placeholder="Enter text to generate content..."
          value={formData.textInput}
          onChange={handleChange}
        />
        <input
          type="file"
          name="fileInput"
          accept=".txt,.doc,.pdf"
          onChange={handleChange}
        />
        <button type="submit">Generate Content</button>
      </form>

      <section className="results">
        <h2>Generated Content</h2>

        {/* Quizzes Section */}
        <div className="results-category">
          <h3>Quizzes</h3>
          {generatedContent.quizzes.length ? (
            generatedContent.quizzes.map((quiz) => (
              <div key={quiz.id} className="result-item">
                <h4>{quiz.title}</h4>
                <p>Created on: {quiz.createdAt}</p>
              </div>
            ))
          ) : (
            <p>No quizzes generated yet.</p>
          )}
        </div>

        {/* Flashcards Section */}
        <div className="results-category">
          <h3>Flashcards</h3>
          {generatedContent.flashcards.length ? (
            generatedContent.flashcards.map((flashcard) => (
              <div key={flashcard.id} className="result-item">
                <h4>{flashcard.title}</h4>
                <p>Created on: {flashcard.createdAt}</p>
              </div>
            ))
          ) : (
            <p>No flashcards generated yet.</p>
          )}
        </div>

        {/* Summaries Section */}
        <div className="results-category">
          <h3>Summaries</h3>
          {generatedContent.summaries.length ? (
            generatedContent.summaries.map((summary) => (
              <div key={summary.id} className="result-item">
                <h4>{summary.title}</h4>
                <p>Created on: {summary.createdAt}</p>
              </div>
            ))
          ) : (
            <p>No summaries generated yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default GenerateContent;
