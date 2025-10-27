import './global.css';

import { useScrollToTop } from './hooks/use-scroll-to-top';

import IndexPage from './pages/app';
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <IndexPage />
    </ThemeProvider>
  );
}