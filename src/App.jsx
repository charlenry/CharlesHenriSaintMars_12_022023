import './style/app.scss';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Community from './pages/Community/Community';
import NotFound from './pages/NotFound/NotFound';
import {Routes, Route} from 'react-router-dom';


/**
 * A function that returns a JSX element.
 * Returns the routes of the pages.
 * 
 * @component
 * @name App
 * @kind function
 * @returns { JSX.Element }
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/user/:id/settings" element={<Settings />} />
        <Route path="/user/:id/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
