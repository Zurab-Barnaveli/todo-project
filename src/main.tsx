import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Todos from './Todos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
)
