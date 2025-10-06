export const getDifficultyColor = (difficulty) => {
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

export const filterExercises = (
  exercises,
  searchTerm,
  category,
  difficulty
) => {
  return exercises.filter((exercise) => {
    const matchesSearch =
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "Tümü" || exercise.category === category;
    const matchesDifficulty =
      difficulty === "Tümü" || exercise.difficulty === difficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });
};
