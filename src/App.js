import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Details from './components/Details';
import Status from './components/Status';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/alltimestatus" element={<Status />} />
      </Routes>
    </>
  );
}

export default App;
