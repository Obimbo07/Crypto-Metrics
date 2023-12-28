import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Details from './components/Details';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
