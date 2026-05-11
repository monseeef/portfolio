import Navbar from '../components/Navbar.jsx';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main id="top" className="mx-auto min-h-screen max-w-7xl px-5 pb-10 pt-24 sm:px-8 lg:px-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;
