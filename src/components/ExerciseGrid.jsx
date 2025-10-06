import React from "react";
import ExerciseCard from "./ExerciseCard";

const ExerciseGrid = ({ exercises, onSelectExercise }) => {
  if (exercises.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <p className="text-slate-400 text-lg">
            Aradığınız kriterlere uygun egzersiz bulunamadı.
          </p>
          <p className="text-slate-500 mt-2">
            Lütfen farklı filtreler deneyin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          onSelect={onSelectExercise}
        />
      ))}
    </div>
  );
};

export default ExerciseGrid;
