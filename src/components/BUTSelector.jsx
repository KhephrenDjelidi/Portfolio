import { useState } from 'react';
import './BUTSelector.css';

const BUTSelector = ({ onSelect, initialValue }) => {
  const [activeBUT, setActiveBUT] = useState(initialValue);

  const handleSelect = (but) => {
    setActiveBUT(but);
    onSelect(but);
  };

  return (
    <div className="but-selector">
      <button onClick={() => handleSelect(1)} className={activeBUT === 1 ? 'active' : ''}>BUT 1</button>
      <button onClick={() => handleSelect(2)} className={activeBUT === 2 ? 'active' : ''}>BUT 2</button>
      <button onClick={() => handleSelect(3)} className={activeBUT === 3 ? 'active' : ''}>BUT 3</button>
    </div>
  );
};

export default BUTSelector;
