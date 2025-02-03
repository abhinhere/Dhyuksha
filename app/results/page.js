'use client';

export default function ResultsPage() {
  return (
    <div className="max-w-5xl mx-auto p-10 pt-20 text-center text-white font-makalo bg-cover">
      <h1 className="text-5xl font-extrabold mb-8 text-white">Dhyuksha Results</h1>
      <p className="mb-10 text-xl text-white">Check out the winners of each event!</p>

      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-semibold text-white">Tug of War (Men)</h2>
        <div className="grid gap-8 md:grid-cols-3">
        <div className="p-8 h-56 bg-yellow-400 rounded-xl shadow-lg text-lg flex flex-col justify-center bg-[url('/tugofwar.jpg')] bg-cover bg-center">
          <h2 className="text-3xl font-bold">1st Place</h2>
          <p className="mt-3 text-black"></p>
        </div>

          <div className="p-8 h-56 bg-gray-400 rounded-xl shadow-lg text-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold">2nd Place</h2>
            <p className="mt-3 text-black"></p>
          </div>
          <div className="p-8 h-56 bg-orange-400 rounded-xl shadow-lg text-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold">3rd Place</h2>
            <p className="mt-3 text-black"></p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-semibold text-white">Tug of War (Women)</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 h-56 bg-yellow-400 rounded-xl shadow-lg text-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold">1st Place</h2>
            <p className="mt-3 text-black"></p>
          </div>
          <div className="p-8 h-56 bg-gray-400 rounded-xl shadow-lg text-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold">2nd Place</h2>
            <p className="mt-3 text-black"></p>
          </div>
          <div className="p-8 h-56 bg-orange-400 rounded-xl shadow-lg text-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold">3rd Place</h2>
            <p className="mt-3 text-black"></p>
          </div>
        </div>
      </div>
    </div>
  );
}