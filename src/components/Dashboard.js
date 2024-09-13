import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Sample user data
  const [userData] = useState({
    name: 'Shivam Vashisth',
    email: 'shivam@example.com',
    joinedDate: 'January 2024',
  });

  // Sample generated content
  const [contentData, setContentData] = useState({
    quizzes: [
      { id: 1, title: 'JavaScript Basics', createdAt: '2024-08-30' },
      { id: 2, title: 'React Components', createdAt: '2024-09-01' },
    ],
    flashcards: [
      { id: 1, title: 'CSS Flexbox', createdAt: '2024-09-02' },
    ],
    summaries: [
      { id: 1, title: 'Machine Learning Overview', createdAt: '2024-09-03' },
    ],
  });

  // Function to delete content
  const deleteContent = (type, id) => {
    setContentData((prevData) => ({
      ...prevData,
      [type]: prevData[type].filter((content) => content.id !== id),
    }));
  };

  return (
    <div className="dashboard">
      {/* User Profile Section */}
      <section className="profile">
        <div className="profile-card">
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Joined: {userData.joinedDate}</p>
        </div>
      </section>

      {/* Generated Content Section */}
      <section className="content-section">
        <h3>Your Generated Content</h3>

        {/* Quizzes Section */}
        <div className="content-category">
          <h4>Quizzes</h4>
          <div className="content-grid">
            {contentData.quizzes.length ? (
              contentData.quizzes.map((quiz) => (
                <div key={quiz.id} className="content-card">
                  <h5>{quiz.title}</h5>
                  <p>Created on: {quiz.createdAt}</p>
                  <button onClick={() => deleteContent('quizzes', quiz.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No quizzes generated yet.</p>
            )}
          </div>
        </div>

        {/* Flashcards Section */}
        <div className="content-category">
          <h4>Flashcards</h4>
          <div className="content-grid">
            {contentData.flashcards.length ? (
              contentData.flashcards.map((flashcard) => (
                <div key={flashcard.id} className="content-card">
                  <h5>{flashcard.title}</h5>
                  <p>Created on: {flashcard.createdAt}</p>
                  <button onClick={() => deleteContent('flashcards', flashcard.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No flashcards generated yet.</p>
            )}
          </div>
        </div>

        {/* Summaries Section */}
        <div className="content-category">
          <h4>Summaries</h4>
          <div className="content-grid">
            {contentData.summaries.length ? (
              contentData.summaries.map((summary) => (
                <div key={summary.id} className="content-card">
                  <h5>{summary.title}</h5>
                  <p>Created on: {summary.createdAt}</p>
                  <button onClick={() => deleteContent('summaries', summary.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No summaries generated yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
