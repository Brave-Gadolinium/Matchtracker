export interface Player {
    username: string;
    kills: number;
}
  
export interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
}
  
export interface Match {
    time: string;
    title: string;
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    status: 'Scheduled' | 'Ongoing' | 'Finished';
}