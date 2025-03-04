import React, { useEffect, useState } from 'react';

interface ScoreAnimationProps {
  score: number;
}

const ScoreAnimation: React.FC<ScoreAnimationProps> = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    const animateScore = (start: number, end: number) => {
      if (start < end) {
        setCurrentScore(start + 1);
        timeoutId = setTimeout(() => animateScore(start + 1, end), 50);
      }
    };

    if (score !== currentScore) {
      setCurrentScore(score < currentScore ? score : 0);
      animateScore(currentScore, score);
    }

    return () => clearTimeout(timeoutId as NodeJS.Timeout);
  }, [score]);

  return <span>{currentScore}</span>;
};

export default ScoreAnimation;