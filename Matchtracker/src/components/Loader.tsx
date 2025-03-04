import React from 'react';
import '../styles/modalOverlay.css'

const Loader: React.FC = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="loader-text">Загрузка...</span>
      </div>
    </div>
  );
};

export default Loader;