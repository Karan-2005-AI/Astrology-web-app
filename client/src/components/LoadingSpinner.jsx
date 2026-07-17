function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-8">

      <div className="w-16 h-16 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>

      <p className="text-white mt-5 text-lg font-medium">
        Reading the stars...
      </p>

      <p className="text-purple-300 text-sm mt-2">
        Please wait while AstroAI generates your horoscope.
      </p>

    </div>
  );
}

export default LoadingSpinner;