import MouseGlow from '../components/MouseGlow.jsx';
import Navbar from '../components/Navbar.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <ScrollProgress />
      <MouseGlow />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.035] [background-image:radial-gradient(circle_at_center,white_0.7px,transparent_0.7px)] [background-size:4px_4px]"
      />
      <Navbar />
      <main id="top" className="mx-auto min-h-screen max-w-7xl px-5 pb-10 pt-24 sm:px-8 lg:px-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;
