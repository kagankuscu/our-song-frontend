import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './App.css';
import { NavBarComponent } from './components/navbar/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.css';
import {
  AllSongPage,
  SongPage,
  UpdatePage,
  AddSongPage,
  RandomPage,
  NotFound,
  PlayerPage,
} from './pages/Pages';

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
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="/updatesong/:id" element={<UpdatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
