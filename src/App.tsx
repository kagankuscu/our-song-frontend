import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './App.css';
import { NavBarComponent } from './components/navbar/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.css'
import { AllSongPage } from './pages/AllSongPage';
import { SongPage } from './pages/SongPage';


function App() {
  return (
    <>
    <NavBarComponent/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/allsongs" element={<AllSongPage />} />
      <Route path="/song/:id" element={<SongPage />} />
      <Route path="/randomsongs" element={<AllSongPage />} />
      <Route path="/updatesongs" element={<AllSongPage />} />
    </Routes>
    </>
  );
}

export default App;
