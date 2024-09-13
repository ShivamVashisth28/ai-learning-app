import React, { useState } from 'react';
import './SummaryPage.css';

const Summary = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle text input changes
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to generate summary
  const generateSummary = async () => {
    if (inputText) {
      setLoading(true);

      // Simulate an API call to generate summary
      setTimeout(() => {
        // Fake summary generation logic
        const generatedSummary = inputText.length > 100 
          ? inputText.substring(0, 100) + '...'
          : inputText;

        setSummary(generatedSummary);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="summary-page">
      <div className="summary-container">
        <h1>Generate Summary</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Paste or type your text here..."
        ></textarea>
        <button onClick={generateSummary} disabled={loading}>
          {loading ? 'Summarizing...' : 'Generate Summary'}
        </button>

        {summary && (
          <div className="summary-result">
            <h2>Summary</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
