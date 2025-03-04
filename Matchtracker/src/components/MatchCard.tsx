import React, { useState } from 'react';
import ScoreAnimation from './ScoreAnimation';
import { Match } from '../types.ts';
import '../styles/matchcard.css'
interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="match-card">
      <div className="match-header" onClick={() => setDetailsVisible(!detailsVisible)}>
        <div className="team-info">
          <img width='48px' height='48px' src='./assets/teamLogo.png' alt={`${match.awayTeam.name} logo`} />
          <h3>{match.awayTeam.name}</h3>
        </div>
        <div className="score-status">
          <ScoreAnimation score={match.awayScore} />
          <span>:</span>
          <ScoreAnimation score={match.homeScore} />
          <p className={`status ${match.status.toLowerCase()}`}>{match.status}</p>
        </div>
        <div className="team-info">
          <img width='48px' height='48px' src='./assets/teamLogo.png' alt={`${match.homeTeam.name} logo`} />
          <h3>{match.homeTeam.name}</h3>
        </div>
      </div>
      {detailsVisible && (
        <div className="match-details">
            <div className="team-stats">
                <div className='listTeam'>
                    <div className='listTeamUL'>
                        {match.awayTeam.players.map((player, index) => (
                            <div key={index} className='pesronalStats'>
                                <span className='boxElem'><img src="./assets/avatar_global.png" alt="" />{player.username}</span>
                                <span className='boxElem'>Kills: {player.kills}</span>
                            </div>
                        ))}
                    </div>
                    {/* <h2>{match.awayTeam.name}</h2> */}
                    <ul className='listTeamUL'>
                        <li className='pesronalStats'><strong>Place:</strong> {match.awayTeam.place}</li>
                        <li className='pesronalStats'><strong>Points:</strong> {match.awayTeam.points}</li>
                        <li className='pesronalStats'><strong>Kills:</strong> {match.awayTeam.total_kills}</li>
                    </ul>
                </div>
          </div>
          <div className="team-stats">
                <div className='listTeam'>
                    <div className='listTeamUL'>
                        {match.homeTeam.players.map((player, index) => (
                            <li key={index} className='pesronalStats'>
                                <span className='boxElem'><img src="./assets/avatar_global.png" alt=""/>{player.username}</span>
                                <span className='boxElem'>Kills: {player.kills}</span>
                            </li>
                        ))}
                    </div>
                    {/* <h2>{match.homeTeam.name}</h2> */}
                    <ul className='listTeamUL'>
                        <li className='pesronalStats'><strong>Place:</strong> {match.homeTeam.place}</li>
                        <li className='pesronalStats'><strong>Points:</strong> {match.homeTeam.points}</li>
                        <li className='pesronalStats'><strong>Kills:</strong> {match.homeTeam.total_kills}</li>
                    </ul>
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;