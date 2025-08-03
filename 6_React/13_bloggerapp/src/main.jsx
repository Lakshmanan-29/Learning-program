import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Make sure this path is correct
import './app.css'     // Or './App.css' if you moved all styles there

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)