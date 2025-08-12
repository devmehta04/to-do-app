import React, { useState, useEffect } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, categories = [] }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editDueDate, setEditDueDate] = useState('');

  // Update local state when todo changes
  useEffect(() => {
    setEditText(todo.text || '');
    setEditCategory(todo.category || 'Other');
    setEditDueDate(todo.dueDate || '');
  }, [todo]);

  const handleEdit = () => {
    if (editText.trim()) {
      const updates = {
        text: editText.trim(),
        category: editCategory,
        dueDate: editDueDate || null
      };
      onEdit(todo.id, updates);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  const startEdit = () => {
    setIsEditing(true);
    // Ensure we have the current values
    setEditText(todo.text || '');
    setEditCategory(todo.category || 'Other');
    setEditDueDate(todo.dueDate || '');
  };

  const cancelEdit = () => {
    // Reset to original values
    setEditText(todo.text || '');
    setEditCategory(todo.category || 'Other');
    setEditDueDate(todo.dueDate || '');
    setIsEditing(false);
  };

  const formatDueDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else if (date < today) {
      return 'Overdue';
    } else {
      return date.toLocaleDateString();
    }
  };

  const getDueDateClass = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const today = new Date();
    
    if (date < today) return 'overdue';
    if (date.toDateString() === today.toDateString()) return 'today';
    return 'upcoming';
  };

  // Ensure we have valid categories to work with
  const validCategories = Array.isArray(categories) && categories.length > 0 ? categories : ['Other'];

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className="toggle-btn"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
        ) : (
          <div className="circle"></div>
        )}
      </button>

      <div className="todo-content">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="edit-input"
              autoFocus
              maxLength="100"
              placeholder="Enter task text..."
            />
            <div className="edit-options">
              <select
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
                className="edit-category"
              >
                {validCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                className="edit-due-date"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="edit-actions">
              <button
                type="button"
                className="save-btn"
                onClick={handleEdit}
                disabled={!editText.trim()}
              >
                Save
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="todo-details">
            <span 
              className="todo-text"
              onDoubleClick={startEdit}
            >
              {todo.text}
            </span>
            <div className="todo-meta">
              <span className={`category-tag ${todo.category?.toLowerCase() || 'other'}`}>
                {todo.category || 'Other'}
              </span>
              {todo.dueDate && (
                <span className={`due-date ${getDueDateClass(todo.dueDate)}`}>
                  📅 {formatDueDate(todo.dueDate)}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="todo-actions">
        <button
          className="action-btn edit-btn"
          onClick={startEdit}
          aria-label="Edit todo"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button
          className="action-btn delete-btn"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete todo"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2 0 0 1 -2,2H7a2,2 0 0 1 -2,-2V6m3,0V4a2,2 0 0 1 2,-2h4a2,2 0 0 1 2,2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
