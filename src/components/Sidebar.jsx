import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { categories, difficulties } from "../data/exercises";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  showFilters,
  setShowFilters,
  hasActiveFilters,
  onClearFilters,
}) => {
  return (
    <aside className={`lg:w-64 ${showFilters ? "block" : "hidden"} lg:block`}>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 sticky top-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <BiFilterAlt className="w-5 h-5" />
            Filtreler
          </h2>
          {showFilters && (
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-slate-300 mb-3">Kategori</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-300 mb-3">
            Zorluk Seviyesi
          </h3>
          <div className="space-y-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === difficulty
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Filtreleri Temizle
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
