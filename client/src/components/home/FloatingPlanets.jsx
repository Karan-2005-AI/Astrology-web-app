const FloatingPlanets = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Purple Planet */}
      <div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 opacity-40 animate-float"
        style={{
          top: "15%",
          left: "10%",
        }}
      />

      {/* Blue Planet */}
      <div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 opacity-20 animate-float-slow"
        style={{
          bottom: "12%",
          right: "8%",
        }}
      />

      {/* Pink Planet */}
      <div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 opacity-30 animate-float-fast"
        style={{
          top: "25%",
          right: "20%",
        }}
      />

    </div>
  );
};

export default FloatingPlanets;