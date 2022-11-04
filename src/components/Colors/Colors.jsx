import React from 'react';
import styles from './Colors.module.scss';
import {allColors} from '../../colorDataBase';
import Color from '../Color/Color';

function Colors() {
  console.log(allColors[0])
  return (
    <div className={styles.container}>
      <Color/>
      <Color/>
      <Color/>
      <Color/>
      <Color/>
    </div>
  );
}

export default Colors;