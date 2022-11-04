import React, { useState } from 'react';
import styles from './Color.module.scss';
import { getRandomInt } from '../Colors/Colors';

function Color({ myColor }) {
  function getRGB(c) {
    return parseInt(c, 16) || c
  }

  function getsRGB(c) {
    return getRGB(c) / 255 <= 0.03928
      ? getRGB(c) / 255 / 12.92
      : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4)
  }

  function getLuminance(hexColor) {
    return (
      0.2126 * getsRGB(hexColor.substr(1, 2)) +
      0.7152 * getsRGB(hexColor.substr(3, 2)) +
      0.0722 * getsRGB(hexColor.substr(-2))
    )
  }

  function getContrast(f, b) {
    const L1 = getLuminance(f)
    const L2 = getLuminance(b)
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
  }

  function getTextColor(bgColor) {
    const whiteContrast = getContrast(bgColor, '#ffffff')
    const blackContrast = getContrast(bgColor, '#000000')

    return whiteContrast > blackContrast ? '#ffffff' : '#000000'
  }
  const [thisColor, setThisColor] = useState(myColor)
  const thisIndex = getRandomInt(0, thisColor.length);
  return (
    <div
      className={styles.color}
      style={{
        'backgroundColor': `${thisColor ? thisColor[thisIndex].rgb : null}`,
        'color': `${getTextColor(thisColor[thisIndex].hex)}`
      }}
    >
      <h2 className={styles['this-color']}>{thisColor[thisIndex].hex}</h2>
      <h3 className={styles['color-name']}>{thisColor[thisIndex].name}</h3>
    </div>
  );
}

export default Color;