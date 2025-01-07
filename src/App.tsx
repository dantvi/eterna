import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.component'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigation />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
