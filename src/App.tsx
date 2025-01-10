import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation.component'
import Landing from './routes/landing/Landing.component';
import Categories from './routes/categories/Categories.component';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Landing />} />
          <Route path='categories' element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
