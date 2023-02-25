import './style/app.scss';
import Root from './pages/Root/Root';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import NotImplemented from './pages/NotImplemented/NotImplemented';
import {Routes, Route} from 'react-router-dom';
import TodayScore from './pages/TodayScore/TodayScore';
import Activity from './pages/Activity/Activity';
import Performance from './pages/Performance/Performance';
import AverageSessions from './pages/AverageSessions/AverageSessions';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="/user/:id/todayscore" element={<TodayScore />} />
        <Route path="/user/:id/activity" element={<Activity />} />
        <Route path="/user/:id/performance" element={<Performance />} />
        <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
