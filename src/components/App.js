import React from 'react';

// npm i -s react-router-dom
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

//Componentes
import Login from './Login/Login';
import Header from './Header/Header';
import List from './List/List';

function App() {
  const items = [
    {id: '1', name: 'Name 1', description: 'Description 1', value: 2},
    {id: '2', name: 'Name 2', description: 'Description 2', value: 1},
    {id: '3', name: 'Name 3', description: 'Description 3', value: 0},
    {id: '4', name: 'Name 4', description: 'Description 4', value: 5},
  ];
  return (
    <BrowserRouter>
      <Route component ={Header}/>
      <Route exact path ="/" component = {Login}/>
      <Route path = "/list" component={List} />
    </BrowserRouter>
  );
}

export default App;