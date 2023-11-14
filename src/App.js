import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
