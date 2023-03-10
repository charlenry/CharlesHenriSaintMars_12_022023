import './style/app.scss';
import Root from './pages/Root/Root';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import NotImplemented from './pages/NotImplemented/NotImplemented';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
