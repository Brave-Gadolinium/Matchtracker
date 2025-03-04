import React from 'react';
import '../styles/eventfilter.css';

interface EventFilterProps {
  filter: 'all' | 'ongoing' | 'finished' | 'scheduled';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'ongoing' | 'finished' | 'scheduled'>>;
}

const EventFilter: React.FC<EventFilterProps> = ({ filter, setFilter }) => {
  return (
    <select 
      className="event-filter" 
      value={filter} 
      onChange={(e) => setFilter(e.target.value as 'all' | 'ongoing' | 'finished' | 'scheduled')}
    >
      <option value="all">Все статусы</option>
      <option value="ongoing">Live</option>
      <option value="scheduled">Match preparing</option>
      <option value="finished">Finished</option>
    </select>
  );
};

export default EventFilter;