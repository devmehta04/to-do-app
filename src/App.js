import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoStats from './components/TodoStats';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [categories] = useState([
    'Work', 'Personal', 'Shopping', 'Health', 'Learning', 'Home', 'Other'
  ]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category, dueDate) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        category: category || 'Other',
        dueDate: dueDate || null,
        createdAt: new Date().toISOString()
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, updates) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const openFilterPanel = () => {
    setIsFilterPanelOpen(true);
  };

  const closeFilterPanel = () => {
    setIsFilterPanelOpen(false);
  };

  // Filter todos based on current filter, search query, and category
  const filteredTodos = todos.filter(todo => {
    // First filter by completion status
    let matchesFilter = true;
    if (filter === 'active') matchesFilter = !todo.completed;
    else if (filter === 'completed') matchesFilter = todo.completed;
    else if (filter === 'overdue') matchesFilter = !todo.completed && todo.dueDate && new Date(todo.dueDate) < new Date();
    
    // Then filter by category
    let matchesCategory = true;
    if (selectedCategory !== 'all') matchesCategory = todo.category === selectedCategory;
    
    // Finally filter by search query
    let matchesSearch = true;
    if (searchQuery.trim()) {
      matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     todo.category.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return matchesFilter && matchesCategory && matchesSearch;
  });

  // Get unique categories from existing todos
  const existingCategories = [...new Set(todos.map(todo => todo.category))];
  const allCategories = [...new Set([...categories, ...existingCategories])];

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>✨ Todo App</h1>
          <p>Stay organized, one task at a time</p>
        </header>
        
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery}
          onFilterClick={openFilterPanel}
        />
        
        <TodoForm onAdd={addTodo} categories={categories} />
        
        <TodoStats 
          todos={todos} 
          onClearCompleted={clearCompleted}
          selectedCategory={selectedCategory}
        />
        
        <TodoList 
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
          categories={allCategories}
        />

        <FilterPanel
          isOpen={isFilterPanelOpen}
          onClose={closeFilterPanel}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          filter={filter}
          onFilterChange={setFilter}
          categories={allCategories}
        />
      </div>
    </div>
  );
}

export default App;
