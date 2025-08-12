import React from 'react';

const TodoStats = ({ todos, onClearCompleted, selectedCategory }) => {
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  // Category-specific counts
  const categoryCounts = todos.reduce((acc, todo) => {
    acc[todo.category] = (acc[todo.category] || 0) + 1;
    return acc;
  }, {});

  // Overdue tasks count
  const overdueCount = todos.filter(todo => 
    !todo.completed && todo.dueDate && new Date(todo.dueDate) < new Date()
  ).length;

  if (totalCount === 0) return null;

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <div className="stats-left">
          <span className="stat-item">
            <strong>{activeCount}</strong> {activeCount === 1 ? 'task' : 'tasks'} left
          </span>
          {overdueCount > 0 && (
            <span className="stat-item overdue-warning">
              ⚠️ {overdueCount} overdue
            </span>
          )}
        </div>
        
        {completedCount > 0 && (
          <button 
            className="clear-completed-btn"
            onClick={onClearCompleted}
          >
            Clear completed ({completedCount})
          </button>
        )}
      </div>
      
      {selectedCategory === 'all' && Object.keys(categoryCounts).length > 1 && (
        <div className="category-stats">
          <span className="category-stats-label">By category:</span>
          {Object.entries(categoryCounts).map(([category, count]) => (
            <span key={category} className="category-stat">
              {category}: {count}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoStats;
