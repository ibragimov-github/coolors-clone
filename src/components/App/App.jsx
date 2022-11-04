import React from 'react';
import Colors from '../Colors/Colors';
import Header from '../Header/Header';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <Colors/>
    </div>
  );
}

export default App;