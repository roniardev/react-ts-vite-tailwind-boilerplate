import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
