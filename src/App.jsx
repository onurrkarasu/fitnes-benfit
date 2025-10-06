import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ExerciseGrid from './components/ExerciseGrid';
import VideoModal from './components/VideoModal';
import { exercisesData } from './data/exercises';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tümü");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filtreleme mantığı
  const filteredExercises = exercisesData.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tümü" || exercise.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "Tümü" || exercise.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleClearFilters = () => {
    setSelectedCategory("Tümü");
    setSelectedDifficulty("Tümü");
    setSearchTerm("");
  };

  const hasActiveFilters = selectedCategory !== "Tümü" || selectedDifficulty !== "Tümü" || searchTerm;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={handleClearFilters}
          />

          <main className="flex-1">
            <div className="mb-4">
              <p className="text-slate-400">
                <span className="text-white font-semibold">{filteredExercises.length}</span> egzersiz bulundu
              </p>
            </div>

            <ExerciseGrid 
              exercises={filteredExercises}
              onSelectExercise={setSelectedExercise}
            />
          </main>
        </div>
      </div>

      {selectedExercise && (
        <VideoModal 
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}

export default App;