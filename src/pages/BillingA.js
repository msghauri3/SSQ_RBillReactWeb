import { useState } from 'react';

export default function MainPage() {
  const [btNumber, setBtNumber] = useState('');
  const [location, setLocation] = useState('Mohlanwan');

  const handleSubmit = () => {
    console.log('BT Number:', btNumber);
    console.log('Location:', location);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* First Header - Orange Background */}
      <header className="bg-orange-500 text-white py-6 px-6">
        <h1 className="text-3xl font-bold text-center">Welcome to BT Management System</h1>
      </header>

      {/* Second Header - White Background */}
      <header className="bg-white text-gray-800 py-4 px-6 shadow-md">
        <h2 className="text-xl font-semibold text-center">Please Enter Your Information Below</h2>
      </header>

      {/* Main Content - BT Form */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">BT Information Form</h3>
          
          <div className="space-y-8">
            {/* BT Number Input Field */}
            <div>
              <label htmlFor="btNumber" className="block text-lg font-semibold text-gray-700 mb-3">
                BT Number
              </label>
              <input
                id="btNumber"
                type="text"
                value={btNumber}
                onChange={(e) => setBtNumber(e.target.value)}
                placeholder="Enter your BT Number"
                className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label htmlFor="location" className="block text-lg font-semibold text-gray-700 mb-3">
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white transition"
              >
                <option value="Mohlanwan">Mohlanwan</option>
                <option value="Orchards">Orchards</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm">&copy; 2024 BT Management System. All rights reserved.</p>
          <p className="text-center text-sm mt-2">For support, please contact: support@btmanagementsystem.com</p>
        </div>
      </footer>
    </div>
  );
}