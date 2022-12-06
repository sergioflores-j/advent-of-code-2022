export const getChallengeInput = (input: string[]): string[][] =>
  input
    .map(line => !!line && line.split(' '))
    .filter((line): line is string[] => !!line);

const SCORE_PER_HAND = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

type Hand = keyof typeof SCORE_PER_HAND;

const SCORE_PER_OUTCOME = {
  win: 6,
  draw: 3,
  lose: 0,
};

type Outcome = keyof typeof SCORE_PER_OUTCOME;

const getHandNameByPlayKey = (playKey: string): Hand => {
  if (playKey === 'A' || playKey === 'X') return 'rock';
  if (playKey === 'B' || playKey === 'Y') return 'paper';
  if (playKey === 'C' || playKey === 'Z') return 'scissors';

  throw new Error(`Invalid play key: ${playKey}`);
};

const getDesiredOutcome = (desiredOutcomeKey): Outcome => {
  const outcomeByKey: Record<string, Outcome> = {
    X: 'lose',
    Y: 'draw',
    Z: 'win',
  };

  return outcomeByKey[desiredOutcomeKey];
};

const getHandNameByOutcome = (
  opponentHand: Hand,
  desiredOutcomeKey: string
): Hand => {
  const outcome = getDesiredOutcome(desiredOutcomeKey);
  if (outcome === 'draw') return opponentHand;
  if (outcome === 'win') {
    if (opponentHand === 'rock') return 'paper';
    if (opponentHand === 'paper') return 'scissors';
    if (opponentHand === 'scissors') return 'rock';
  }
  if (outcome === 'lose') {
    if (opponentHand === 'rock') return 'scissors';
    if (opponentHand === 'paper') return 'rock';
    if (opponentHand === 'scissors') return 'paper';
  }

  throw new Error(`Invalid play key: ${desiredOutcomeKey}`);
};

const getRoundResultForPlayer = (
  opponentHand: Hand,
  playerHand: Hand
): number => {
  if (opponentHand === playerHand) {
    return SCORE_PER_OUTCOME.draw;
  }

  if (
    (opponentHand === 'rock' && playerHand === 'scissors') ||
    (opponentHand === 'scissors' && playerHand === 'paper') ||
    (opponentHand === 'paper' && playerHand === 'rock')
  ) {
    return SCORE_PER_OUTCOME.lose;
  }

  return SCORE_PER_OUTCOME.win;
};

const run = (
  roundStrategies: string[][]
): { totalPlayerScore: number; totalScoreByOutcomeStrategy: number } => {
  const totalPlayerScore = roundStrategies.reduce(
    (totalPlayerScore, [opponent, player]) => {
      const opponentHand = getHandNameByPlayKey(opponent);

      const playerHand = getHandNameByPlayKey(player);
      const playerScore = SCORE_PER_HAND[playerHand];

      const roundResult = getRoundResultForPlayer(opponentHand, playerHand);

      return totalPlayerScore + roundResult + playerScore;
    },
    0
  );

  const totalScoreByOutcomeStrategy = roundStrategies.reduce(
    (totalPlayerScore, [opponent, desiredOutcome]) => {
      const opponentHand = getHandNameByPlayKey(opponent);

      const playerHand = getHandNameByOutcome(opponentHand, desiredOutcome);

      const playerScore = SCORE_PER_HAND[playerHand];
      const roundScore = SCORE_PER_OUTCOME[getDesiredOutcome(desiredOutcome)];

      return totalPlayerScore + playerScore + roundScore;
    },
    0
  );

  return {
    totalPlayerScore,
    totalScoreByOutcomeStrategy,
  };
};

export default run;
