import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoTrendingUpSharp } from "react-icons/io5";

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Başlangıç":
      return "bg-green-100 text-green-700";
    case "Orta":
      return "bg-yellow-100 text-yellow-700";
    case "İleri":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ExerciseCard = ({ exercise, onSelect }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white">{exercise.name}</h3>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
              exercise.difficulty
            )}`}
          >
            {exercise.difficulty}
          </span>
        </div>

        <p className="text-slate-400 text-sm mb-4">{exercise.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <BiTargetLock className="w-4 h-4 text-blue-400" />
            <span className="font-medium">Hedef:</span>
            <span className="text-slate-400">{exercise.targetMuscles}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <AiOutlineClockCircle className="w-4 h-4 text-green-400" />
            <span className="font-medium">Süre:</span>
            <span className="text-slate-400">{exercise.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <IoTrendingUpSharp className="w-4 h-4 text-orange-400" />
            <span className="font-medium">Kalori:</span>
            <span className="text-slate-400">{exercise.calories}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onSelect(exercise)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 font-medium"
          >
            <BsPlayFill className="w-5 h-5" />
            Video İzle
          </button>
          <span className="bg-slate-700 text-slate-300 px-3 py-2 rounded-lg text-sm font-medium">
            {exercise.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
