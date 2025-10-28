import { AppView } from '../sections/view';
import Navbar from '../sections/view/navbar';
import Footer from '../sections/view/footer';
// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <AppView />
      <Footer />
    </>
  );
}