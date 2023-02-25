import './style/app.scss';
import Root from './pages/Root/Root';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import NotImplemented from './pages/NotImplemented/NotImplemented';
import {Routes, Route} from 'react-router-dom';
import BigTodayScore from './pages/BigTodayScore/BigTodayScore';
import BigActivity from './pages/BigActivity/BigActivity';
import BigPerformance from './pages/BigPerformance/BigPerformance';
import BigAverageSessions from './pages/BigAverageSessions/BigAverageSessions';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="/user/:id/score" element={<BigTodayScore />} />
        <Route path="/user/:id/activity" element={<BigActivity />} />
        <Route path="/user/:id/performance" element={<BigPerformance />} />
        <Route path="/user/:id/average-sessions" element={<BigAverageSessions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
