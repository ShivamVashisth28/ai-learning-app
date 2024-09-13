import React from 'react';
import './Home.css'; // For landing page specific styles

const Home = () => {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Powered Learning Content Generator</h1>
          <p>Revolutionize your learning with AI-generated quizzes, flashcards, and summaries.</p>
          <div className="cta-buttons">
            <a href="/dashboard" className="cta-button">Get Started</a>
            <a href="/login" className="cta-button cta-secondary">Login</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Generate Quizzes Instantly</h2>
          <p>Use AI to create customizable quizzes from any text or document.</p>
        </div>
        <div className="feature">
          <h2>Interactive Flashcards</h2>
          <p>Review key concepts with dynamic AI-generated flashcards.</p>
        </div>
        <div className="feature">
          <h2>Summarize Content</h2>
          <p>Get concise summaries of long documents, perfect for quick revision.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>AI Learning Generator &copy; 2024. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
