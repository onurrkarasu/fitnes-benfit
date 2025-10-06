import React from "react";
import { AiOutlineClose } from "react-icons/ai";
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

const VideoModal = ({ exercise, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {exercise.name}
              </h2>
              <span
                className={`px-3 py-1 rounded text-sm font-medium ${getDifficultyColor(
                  exercise.difficulty
                )}`}
              >
                {exercise.difficulty}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>

          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              width="100%"
              height="100%"
              src={exercise.videoUrl}
              title={exercise.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Açıklama</h3>
              <p className="text-slate-300">{exercise.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BiTargetLock className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white font-semibold">Hedef Kaslar</h4>
                </div>
                <p className="text-slate-300">{exercise.targetMuscles}</p>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AiOutlineClockCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-white font-semibold">Set & Tekrar</h4>
                </div>
                <p className="text-slate-300">{exercise.duration}</p>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <IoTrendingUpSharp className="w-5 h-5 text-orange-400" />
                  <h4 className="text-white font-semibold">Yakılan Kalori</h4>
                </div>
                <p className="text-slate-300">{exercise.calories}</p>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Kategori</h4>
                <p className="text-slate-300">{exercise.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
