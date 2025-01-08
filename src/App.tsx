import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation.component'
import Home from './routes/home/Home.component';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
