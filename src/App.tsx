import React, { useState, useEffect } from 'react';
import './css/App.css';

import Book from './components/book';
import Nav from './components/nav';
import Alert from './components/alert';

import { alertType } from './components/types';

function App() {
  const [isAlert, setIsAlert] = useState<alertType>({
    message: '',
    status: false
  });

  useEffect(() => {
    if (isAlert.status) {
      setTimeout(() => {
        setIsAlert({ ...isAlert, status: false });
      }, 3000);
    }
  }, [isAlert]);

  return (
    <div className="app">
      {isAlert.status ? <Alert message={isAlert.message} /> : null}
      <Nav />
      <Book setIsAlert={setIsAlert} />
    </div>
  );
}

export default App;
