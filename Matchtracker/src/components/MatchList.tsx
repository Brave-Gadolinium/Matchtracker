import React from 'react';
import MatchCard from './MatchCard';
import { Match } from '../types.ts';

interface MatchListProps {
  matches: Match[];
}

const MatchList: React.FC<MatchListProps> = ({ matches }) => {
  return (
    <div className="match-list">
      {matches.length > 0 ? (
        matches.map((match) => <MatchCard key={match.title} match={match} />)
      ) : (
        <p>Нет доступных матчей</p>
      )}
    </div>
  );
};

export default MatchList;