import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './App.css';
import { NavBarComponent } from './components/navbar/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { AllSongPage } from './pages/AllSongPage';
import { SongPage } from './pages/SongPage';
import { UpdatePage } from './pages/UpdatePage';
import { AddSongPage } from './pages/AddSongPage';
import { RandomPage } from './pages/RandomPage';
import { NotFound } from './components/404/NotFound';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allsongs" element={<AllSongPage />} />
        <Route path="/song/:id" element={<SongPage />} />
        <Route path="/addsong" element={<AddSongPage />} />
        <Route path="/randomsong" element={<RandomPage />} />
        <Route path="/updatesong/:id" element={<UpdatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
