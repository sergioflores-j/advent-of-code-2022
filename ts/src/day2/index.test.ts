import { getInput, getMockInput } from '../utils';
import run, { getChallengeInput } from '.';

const PATH = `${__dirname}/`;

describe('day2', () => {
  console.log(`\n  🔎  Running ${PATH}`);

  describe('using test input', () => {
    const input = getChallengeInput(getMockInput(PATH));
    const testPart1Expected = 15;
    const testPart2Expected = 12;

    it('part1', () => {
      const { totalPlayerScore } = run(input);
      expect(totalPlayerScore).toBe(testPart1Expected);
    });

    it('part2', () => {
      const { totalScoreByOutcomeStrategy } = run(input);
      expect(totalScoreByOutcomeStrategy).toBe(testPart2Expected);
    });
  });

  describe('using real input', () => {
    const input = getChallengeInput(getInput({ path: PATH }));

    it('part1', () => {
      const { totalPlayerScore } = run(input);
      console.log('Result - Part 1:', totalPlayerScore);

      expect(totalPlayerScore).not.toBeUndefined();
      expect(totalPlayerScore).toBe(14069);
    });

    it('part2', () => {
      const { totalScoreByOutcomeStrategy } = run(input);
      console.log('Result - Part 2:', totalScoreByOutcomeStrategy);

      expect(totalScoreByOutcomeStrategy).not.toBeUndefined();
      expect(totalScoreByOutcomeStrategy).toBe(12411);
    });
  });
});
