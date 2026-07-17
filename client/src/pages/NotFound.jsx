import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#050816] via-[#12082d] to-black text-white px-6">

      <h1 className="text-8xl font-extrabold text-purple-400">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-300 mt-4 text-center max-w-xl">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold transition"
      >
        🏠 Back to Home
      </Link>

    </div>
  );
}

export default NotFound;