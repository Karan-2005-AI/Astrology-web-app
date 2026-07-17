import Navbar from "../Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#12082d] to-black text-white">

      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;