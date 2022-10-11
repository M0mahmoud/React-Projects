import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo_2/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

// Last Version

// return (
//   <div className="app">
//     <h1>Hello !</h1>
//     <DemoOutput show={showP} />
//     <Button onClick={allowToggleHandler}>allowToggle</Button>
//     <Button onClick={toggglePHandler}>Show Paragraph</Button>
//   </div>
// );
