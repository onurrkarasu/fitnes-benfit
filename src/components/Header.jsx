import React from "react";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
import { IoTrendingUpSharp } from "react-icons/io5";

const Header = ({ searchTerm, setSearchTerm, showFilters, setShowFilters }) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <IoTrendingUpSharp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">FitnessPro</h1>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <BiFilterAlt className="w-4 h-4" />
            Filtreler
          </button>
        </div>

        <div className="relative">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Egzersiz ara... (örn: squat, bench press)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
