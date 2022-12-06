import { getInput, getMockInput } from 'utils';
import run, { getChallengeInput } from '.';

const PATH = `${__dirname}/`;

describe('day1', () => {
  console.log(`\n  🔎  Running ${PATH}`);

  describe('using test input', () => {
    const input = getChallengeInput(getMockInput(PATH));
    const testPart1Expected = 24000;
    const testPart2Expected = 45000;

    it('part1', () => {
      const { mostCalories } = run(input);
      expect(mostCalories).toBe(testPart1Expected);
    });

    it('part2', () => {
      const { totalTopThree } = run(input);
      expect(totalTopThree).toBe(testPart2Expected);
    });
  });

  describe('using real input', () => {
    const input = getChallengeInput(getInput({ path: PATH }));

    it('part1', () => {
      const { mostCalories } = run(input);
      console.log('Result - Part 1:', mostCalories);

      expect(mostCalories).not.toBeUndefined();
    });

    it('part2', () => {
      const { totalTopThree } = run(input);
      console.log('Result - Part 2:', totalTopThree);

      expect(totalTopThree).not.toBeUndefined();
    });
  });
});
