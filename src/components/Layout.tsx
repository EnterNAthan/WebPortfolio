import { Outlet } from 'react-router-dom';
import CursorGlassEffect from './CursorGlassEffect';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Cursor Glass Effect - Global */}
      <CursorGlassEffect />

      {/* Header Component */}
      <Header />

      {/* Main Content with top padding to account for fixed header */}
      <main className="pt-32 flex-grow">
        <Outlet />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
