import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import React, { useState } from 'react';

const App = () => {
  const [headerTitle, setHeaderTitle] = useState('Заполните анкету');

  const renameHeaderTitle = (name, lastName) => {
    let newHeaderTitle = `${name} ${lastName}`;
    setHeaderTitle(newHeaderTitle);
  };

  return (
    <div className="App">
      <Header headerTitle={headerTitle} />
      <Main renameHeaderTitle={renameHeaderTitle} />
    </div>
  );
};

export default App;
