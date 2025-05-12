# React Todo Management App

## Overview

This is a Todo Management App built with React 18, Redux Toolkit, Redux Saga, and Tailwind CSS. The application demonstrates proficiency in modern React development with a focus on state management using Redux.

## Features

- **CRUD Operations**:

  - Create: Add new todos to your list
  - Read: View all your todos with their completion status
  - Update: Mark todos as completed or update their details
  - Delete: Remove todos from your list

- **State Management**:

  - Redux Toolkit for efficient state management
  - Redux Saga for handling asynchronous operations

- **UI**:
  - Responsive design using Tailwind CSS 3.4.17
  - Clean and intuitive user interface

## Project Structure

```
react-todo-app/
├── mock-api/               # Mock API for development
│   └── db.json             # Mock database file
├── public/                 # Public assets
├── src/
│   ├── assets/             # Static assets
│   ├── components/         # React components
│   │   ├── TodoForm.jsx    # Form for adding todos
│   │   ├── TodoItem.jsx    # Individual todo item
│   │   └── TodoList.jsx    # List of todos
│   ├── redux/              # Redux related files
│   │   ├── slices/         # Redux slices
│   │   │   └── todoSlice.js # Todo slice with reducers
│   │   ├── sagas/          # Redux sagas
│   │   │   ├── rootSaga.js  # Root saga
│   │   │   └── todoSaga.js  # Todo-specific sagas
│   │   └── store.js        # Redux store configuration
│   ├── services/           # API services
│   │   └── todoService.js  # Todo API service
│   ├── App.css             # App-specific styles
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles with Tailwind
│   └── main.jsx            # Entry point
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code

2. Navigate to the project directory:

   ```bash
   cd react-todo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the mock API server:

   ```bash
   npm run server
   ```

   This will start the JSON server on port 3001.

2. In a separate terminal, start the development server:

   ```bash
   npm run dev
   ```

   This will start the Vite development server.

3. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## Technologies Used

- **React 18**: For building the user interface
- **Redux Toolkit**: For state management
- **Redux Saga**: For handling side effects and asynchronous operations
- **Tailwind CSS 3.4.17**: For styling
- **Vite**: For fast development and building
- **JSON Server**: For creating a mock REST API

## Development

### Adding New Features

To add new features to the application:

1. Create new components in the `src/components` directory
2. Update the Redux store as needed in the `src/redux` directory
3. Add new API services in the `src/services` directory

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

## License

This project is open source and available under the MIT License.
