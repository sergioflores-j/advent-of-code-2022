export const getChallengeInput = (input: string[]): number[][] => {
  let currentGroup: number[] = [];

  return input.reduce<number[][]>((groups, line) => {
    // End of group
    if (line === '') {
      groups.push(currentGroup);
      currentGroup = [];
    } else {
      currentGroup.push(Number(line));
    }

    return groups;
  }, []);
};

const run = (
  elfsFoodList: number[][]
): { mostCalories: number; totalTopThree: number } => {
  const totalCaloriesByElf: number[] = [];

  elfsFoodList.forEach(foodList => {
    totalCaloriesByElf.push(
      foodList.reduce((total, calorie) => calorie + total, 0)
    );
  }, 0);

  totalCaloriesByElf.sort((a, b) => b - a);

  return {
    mostCalories: totalCaloriesByElf[0],
    totalTopThree: totalCaloriesByElf.slice(0, 3).reduce((a, b) => a + b, 0),
  };
};

export default run;
