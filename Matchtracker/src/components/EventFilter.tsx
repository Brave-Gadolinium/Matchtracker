import React from 'react';
import '../styles/eventfilter.css'

interface EventFilterProps {
  filter: 'all' | 'ongoing' | 'finished';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'ongoing' | 'finished' | 'scheduled'>>;
}

const EventFilter: React.FC<EventFilterProps> = ({ filter, setFilter }) => {
  return (
    <select className="event-filter">
        <option onClick={() => setFilter('all')}>Все статусы</option>
        <option onClick={() => setFilter('ongoing')}>Live</option>
        <option onClick={() => setFilter('scheduled')}>Match preparing</option>
        <option onClick={() => setFilter('finished')}>Finished</option>
    </select>
  );
};

export default EventFilter;