import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation.component';
import Landing from './routes/landing/Landing.component';
import Categories from './routes/categories/Categories.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Landing />} />
          <Route path='categories' element={<Categories />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
