import React, { useEffect, useState } from 'react';
import styles from './Colors.module.scss';
import { allColors } from '../../colorDataBase';
import Color from '../Color/Color';

export function getRandomInt(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const generateArray = (length, max) => {
  const rands = [];
  while (rands.length < length) {
    const r = Math.floor(Math.random() * max);
    if (rands.indexOf(r) === -1) { rands.push(r) }
  }
  return rands;
};



function Colors() {

  const [colorIndex1, setColorsIndex1] = useState(getRandomInt());
  const [colorIndex2, setColorsIndex2] = useState(getRandomInt());
  const [colorIndex3, setColorsIndex3] = useState(getRandomInt());

  const [colorsArray, setColorsArray] = useState(generateArray(5, allColors[colorIndex3].length - 1));
  const spaceBarHandler = (e) => {
    if (e.code === 'Space') {
      setColorsIndex1(getRandomInt());
      setColorsIndex2(getRandomInt());
      setColorsIndex3(getRandomInt());
      setColorsArray(generateArray(5, allColors.length - 1));
    }
  }
  useEffect(() => {
    document.addEventListener('keypress', spaceBarHandler);
    return () => {
      document.removeEventListener('keypress', spaceBarHandler);
    }
  }, [])


  return (
    <div className={styles.container}>
      <Color
        myColor={allColors[colorIndex3]}
        myIndex={colorsArray[0]}
      />
      <Color
        myColor={allColors[colorIndex3]}
        myIndex={colorsArray[1]}
      />
      <Color
        myColor={allColors[colorIndex3]}
        myIndex={colorsArray[2]}
      />
      <Color
        myColor={allColors[colorIndex1]}
        myIndex={colorsArray[3]}
      />
      <Color
        myColor={allColors[colorIndex2]}
        myIndex={colorsArray[4]}
      />
    </div>
  );
}

export default Colors;