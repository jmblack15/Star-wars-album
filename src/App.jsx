import { AlbumPage } from './pages/AlbumPage';
import { MyAlbumPage } from './pages/MyAlbumPage';
import { SheetsPage } from './pages/SheetsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<AlbumPage />} />
          <Route path="/myAlbum" element={<MyAlbumPage />} />
          <Route path="/sheets" element={<SheetsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
