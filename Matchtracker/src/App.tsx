import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchList from './components/MatchList';
import EventFilter from './components/EventFilter';
import { Match } from './types.ts';
import './App.css'

const App: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'finished' | 'scheduled'>('all');

  // Загрузка матчей при монтировании компонента
  useEffect(() => {
    const fetchMatches = async () => {
      try {
          const response = await axios.get<Match[]>('https://app.ftoyd.com/fronttemp-service/fronttemp');
          console.log(response.data.data.matches)
          setMatches(response.data.data.matches); // Извлекаем массив матчей из ответа
        } catch (err) {
        setError('Ошибка: не удалось загрузить информацию');
      }
    };

    fetchMatches();
  }, []);

  // Подключение к WebSocket для обновления данных
  useEffect(() => {
    const socket = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws');

    socket.onmessage = (event) => {
        try {
          const updatedData: Partial<Match> = JSON.parse(event.data); // Получаем обновленные данные
  
          // Обновляем состояние матчей на основе времени проведения матча (time)
          setMatches((prevMatches) =>
            prevMatches.map((match) =>
              match.time === updatedData.time ? { ...match, ...updatedData } : match
            )
          );
        } catch (error) {
          console.error('Ошибка обработки сообщения WebSocket:', error);
        }
      };

    return () => socket.close();
  }, []);

  // Фильтрация матчей
  const filteredMatches = matches.filter((match) => {
    if (filter === 'ongoing') return match.status === 'Ongoing';
    if (filter === 'finished') return match.status === 'Finished';
    if (filter === 'scheduled') return match.status === 'Scheduled';
    return true; // 'all'
  });

    return (
        <div className="App">
            <div className='HeaderBox'>
                <div className='HeaderBoxFirst'>
                    <h1>Match Tracker</h1>
                    <EventFilter filter={filter} setFilter={setFilter} />
                </div>
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