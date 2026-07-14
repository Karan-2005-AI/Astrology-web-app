import Navbar from "./components/Navbar";
import BirthForm from "./components/BirthForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0524] via-[#1a0938] to-black relative overflow-hidden">

      {/* Stars effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex justify-center items-center min-h-[80vh] px-4">
          <BirthForm />
        </main>
      </div>

    </div>
  );
}

export default App;