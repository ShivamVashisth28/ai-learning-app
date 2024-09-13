import React, { useState } from 'react';
import './QuizPage.css';

const Quiz = () => {
  // Sample quiz data
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'JavaScript Basics', questions: 10 },
    { id: 2, title: 'React Fundamentals', questions: 8 },
  ]);

  // State for creating a new quiz
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    questions: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuiz({
      ...newQuiz,
      [name]: value,
    });
  };

  // Add a new quiz
  const addQuiz = () => {
    if (newQuiz.title && newQuiz.questions) {
      setQuizzes([
        ...quizzes,
        {
          id: quizzes.length + 1,
          title: newQuiz.title,
          questions: parseInt(newQuiz.questions, 10),
        },
      ]);
      setNewQuiz({ title: '', questions: '' });
    }
  };

  // Delete a quiz
  const deleteQuiz = (id) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="quiz-page">
      <h1>Quiz Management</h1>

      {/* Quiz List */}
      <section className="quiz-list">
        <h2>Existing Quizzes</h2>
        {quizzes.length ? (
          <div className="quiz-grid">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-card">
                <h3>{quiz.title}</h3>
                <p>Number of Questions: {quiz.questions}</p>
                <button onClick={() => deleteQuiz(quiz.id)}>Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No quizzes available.</p>
        )}
      </section>

      {/* Create New Quiz */}
      <section className="create-quiz">
        <h2>Create New Quiz</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addQuiz();
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Quiz Title"
            value={newQuiz.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="questions"
            placeholder="Number of Questions"
            value={newQuiz.questions}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Quiz</button>
        </form>
      </section>
    </div>
  );
};

export default Quiz;
