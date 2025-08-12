import React, { useState } from 'react';

const TodoForm = ({ onAdd, categories }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Other');
  const [dueDate, setDueDate] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text, category, dueDate);
    setText('');
    setCategory('Other');
    setDueDate('');
    setShowAdvanced(false);
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-section">
        <label htmlFor="todo-input" className="input-label">
          What needs to be done?
        </label>
        <div className="input-group">
          <input
            id="todo-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your task here..."
            className="todo-input"
            maxLength="100"
          />
          <button type="submit" className="add-btn" disabled={!text.trim()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="advanced-options">
        <button
          type="button"
          className="advanced-toggle"
          onClick={toggleAdvanced}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={showAdvanced ? 'rotated' : ''}
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
          Advanced Options
        </button>
        
        {showAdvanced && (
          <div className="advanced-fields">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-select"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="dueDate">Due Date (optional):</label>
                <input
                  type="date"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
