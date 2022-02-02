import { Home, NotFound } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutRoot } from 'components/layout';

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
