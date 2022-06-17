import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/SASS/main.css';
import LandingPage from './Pages/LandingPage';
import MainPage from './Pages/MainPage';
import PageSkeleton from './Pages/PageSkeleton';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PageSkeleton />}>

          <Route index element={<LandingPage />} />
          <Route path="home" element={<MainPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
