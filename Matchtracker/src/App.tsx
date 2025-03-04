import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchList from './components/MatchList';
import EventFilter from './components/EventFilter';
import { Match } from './types.ts';
import Loader from './components/Loader';
import './App.css'

interface ApiResponse {
    data: {
      matches: Match[];
    };
  }

const App: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'finished' | 'scheduled'>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const fetchMatches = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500)); 
        try {
            const response = await axios.get<ApiResponse>('https://app.ftoyd.com/fronttemp-service/fronttemp');
            setMatches(response.data.data.matches);
            } catch (err) {
            setError('Ошибка: не удалось загрузить информацию');
            } finally {
            setLoading(false);
        }
    };

    fetchMatches();
  }, []);

//   useEffect(() => {
//     const socket = new WebSocket('https://app.ftoyd.com/fronttemp-service/fronttemp');

//     socket.onmessage = (event) => {
//         try {
//           const updatedData: Partial<Match> = JSON.parse(event.data);
  
//           setMatches((prevMatches) =>
//             prevMatches.map((match) =>
//               match.time === updatedData.time ? { ...match, ...updatedData } : match
//             )
//           );
//         } catch (error) {
//           console.error('Ошибка обработки сообщения WebSocket:', error);
//         }
//       };

//     return () => socket.close();
//   }, []);

  const filteredMatches = matches.filter((match) => {
    if (filter === 'ongoing') return match.status === 'Ongoing';
    if (filter === 'finished') return match.status === 'Finished';
    if (filter === 'scheduled') return match.status === 'Scheduled';
    return true;
  });
    
    console.log(matches)

    return (
        <div className="App">
            <div className='HeaderBox'>
                <div className='HeaderBoxFirst'>
                    <h1>Match Tracker</h1>
                    <EventFilter filter={filter} setFilter={setFilter} />
                </div>
                {loading && <Loader />}
                <div className='HeaderBoxSecond'>
                    <button>
                        <span>Обновить</span>
                        <img src="./assets/Refresh.png" alt="Refresh" />
                    </button>
                </div>
            </div>
            {error &&<div>Ошибка: не удалось загрузить информацию</div>}
            <MatchList matches={filteredMatches} />
        </div>
    );
};

export default App;