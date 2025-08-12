import React from 'react';

const FilterPanel = ({ 
  isOpen, 
  onClose, 
  selectedCategory, 
  onCategoryChange, 
  filter, 
  onFilterChange, 
  categories = [] 
}) => {
  if (!isOpen) return null;

  // Ensure we have valid categories to work with
  const validCategories = Array.isArray(categories) && categories.length > 0 ? categories : [];

  return (
    <div className="filter-panel-overlay" onClick={onClose}>
      <div className="filter-panel" onClick={(e) => e.stopPropagation()}>
        <div className="filter-panel-header">
          <h3>Filter Tasks</h3>
          <button className="close-filter-btn" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="filter-section">
          <h4>Filter by Status</h4>
          <div className="filter-options">
            <label className="filter-option">
              <input
                type="radio"
                name="status"
                value="all"
                checked={filter === 'all'}
                onChange={(e) => onFilterChange(e.target.value)}
              />
              <span className="filter-label">All Tasks</span>
            </label>
            <label className="filter-option">
              <input
                type="radio"
                name="status"
                value="active"
                checked={filter === 'active'}
                onChange={(e) => onFilterChange(e.target.value)}
              />
              <span className="filter-label">Active Tasks</span>
            </label>
            <label className="filter-option">
              <input
                type="radio"
                name="status"
                value="completed"
                checked={filter === 'completed'}
                onChange={(e) => onFilterChange(e.target.value)}
              />
              <span className="filter-label">Completed Tasks</span>
            </label>
            <label className="filter-option">
              <input
                type="radio"
                name="status"
                value="overdue"
                checked={filter === 'overdue'}
                onChange={(e) => onFilterChange(e.target.value)}
              />
              <span className="filter-label">Overdue Tasks</span>
            </label>
          </div>
        </div>
        
        <div className="filter-section">
          <h4>Filter by Category</h4>
          <div className="filter-options">
            <label className="filter-option">
              <input
                type="radio"
                name="category"
                value="all"
                checked={selectedCategory === 'all'}
                onChange={(e) => onCategoryChange(e.target.value)}
              />
              <span className="filter-label">All Categories</span>
            </label>
            {validCategories.map(category => (
              <label key={category} className="filter-option">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                />
                <span className="filter-label">{category}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="filter-panel-footer">
          <button className="apply-filters-btn" onClick={onClose}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
