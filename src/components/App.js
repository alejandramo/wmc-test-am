import React from 'react';

//Components
import Login from './Login/Login';

//CSS
import './App.css';

function App() {
  const myname = 'Alejandra';
  return (
    <div className="App">   
      <Login name = {myname} />
    </div>
  );
}

export default App;
