import { LayoutRoot } from 'components/layout';
import { Home, NotFound /* PLOP_INJECT_IMPORT */ } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <LayoutRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </LayoutRoot>
    </BrowserRouter>
  );
}
