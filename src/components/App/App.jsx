import { useState, useEffect } from 'react';
import Header from '../Header/Header';

function App () {
  const [headerColor, setHeaderColor] = useState('red');
  return (
    <div>
      <Header color={headerColor} />
      <input
        value={headerColor} 
        onChange={(event) => setHeaderColor(event.target.value)} 
      />
    </div>
  );

}

export default App
