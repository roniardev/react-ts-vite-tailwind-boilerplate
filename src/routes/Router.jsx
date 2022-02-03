import { LayoutRoot } from 'components/layout';
import { Home, NotFound } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutRoot>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </LayoutRoot>
    </BrowserRouter>
  );
}
