# ✨ Todo App

A beautiful, responsive, and minimalist todo application built with React 19. Stay organized with this elegant and intuitive task management app featuring advanced organization tools.

## ✨ Features

- **Beautiful UI**: Modern, minimalist design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Task Management**: Add, edit, toggle, and delete todos
- **Smart Filtering**: View all, active, completed, or overdue tasks
- **Task Categories**: Organize tasks by project, priority, or custom categories
- **Due Dates**: Set optional deadlines with smart overdue detection
- **Search & Filter**: Find tasks quickly with text search and category filtering
- **Local Storage**: Your todos are automatically saved in your browser
- **Keyboard Shortcuts**: Edit with double-click, save with Enter, cancel with Escape
- **Accessibility**: Built with accessibility in mind
- **Real-time Stats**: See your progress and category breakdowns at a glance

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd to-do
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Use

### Adding Tasks
- Type your task in the input field
- Click "Advanced Options" to set category and due date
- Press Enter or click the + button to add it

### Managing Tasks
- **Complete**: Click the circle button to mark as done
- **Edit**: Double-click on any task text to edit
- **Delete**: Click the trash icon to remove a task
- **Save**: Press Enter to save edits, Escape to cancel

### Organizing with Categories
- **Predefined Categories**: Work, Personal, Shopping, Health, Learning, Home, Other
- **Custom Categories**: Add new categories as you create tasks
- **Category Filtering**: Use the dropdown to view tasks by category
- **Category Stats**: See how many tasks you have in each category

### Due Date Management
- **Set Deadlines**: Add optional due dates when creating or editing tasks
- **Smart Display**: Shows "Today", "Tomorrow", or "Overdue" for better readability
- **Overdue Detection**: Automatically identifies and highlights overdue tasks
- **Overdue Filter**: Filter to see only overdue tasks

### Search & Filter
- **Text Search**: Search through task text and categories
- **Category Filter**: Filter by specific categories
- **Status Filter**: View all, active, completed, or overdue tasks
- **Combined Filtering**: Use search and filters together for precise results

### Clearing Completed
- Click "Clear completed" to remove all finished tasks

## 🛠️ Built With

- **React 19** - Modern React with hooks
- **CSS3** - Custom styling with animations and gradients
- **Local Storage** - Persistent data storage
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Features

- **Desktop**: Full-featured interface with hover effects
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with stacked elements

## 🎨 Design Features

- **Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Semi-transparent container with backdrop blur
- **Smooth Animations**: Subtle transitions and micro-interactions
- **Modern Typography**: Clean, readable fonts
- **Color Psychology**: Carefully chosen colors for optimal user experience
- **Category Color Coding**: Each category has its own distinct color scheme
- **Due Date Indicators**: Visual cues for today, upcoming, and overdue tasks

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoForm.js      # Task input form with advanced options
│   ├── TodoList.js      # Main todo list container
│   ├── TodoItem.js      # Individual todo item with editing
│   ├── TodoStats.js     # Statistics, filters, and category breakdowns
│   └── SearchBar.js     # Search and category filtering
├── App.js               # Main application component
├── App.css              # Application styles
└── index.js             # Application entry point
```

## 🌟 Key Features Explained

### Task Categories
Organize your tasks by project, priority, or any custom category you create. Each category has its own color scheme for easy visual identification.

### Due Date Management
Set optional deadlines for your tasks. The app intelligently displays due dates as "Today", "Tomorrow", or "Overdue" for better readability.

### Advanced Search & Filtering
Find tasks quickly with text search that works across task text and categories. Combine search with category and status filters for precise results.

### Local Storage Persistence
Your todos, categories, and due dates are automatically saved to your browser's local storage, so they persist between sessions.

### Responsive Design
The app automatically adapts to different screen sizes, providing an optimal experience on any device.

### Accessibility
Built with accessibility in mind, including proper ARIA labels and keyboard navigation support.

### Performance
Optimized with React 19 features and efficient state management for smooth performance.

## 🎯 Use Cases

- **Project Management**: Organize work tasks by project or priority
- **Personal Organization**: Keep track of daily tasks and goals
- **Shopping Lists**: Categorize items by store or priority
- **Health & Fitness**: Track workouts, appointments, and health goals
- **Learning & Development**: Organize study materials and learning goals
- **Home Management**: Keep track of household tasks and maintenance

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Create React App
- Icons from Feather Icons
- Color inspiration from modern design trends
- Responsive design patterns from industry best practices

---

**Happy organizing! ✨**
