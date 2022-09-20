import React from 'react';
import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  console.log(styles);
  return (
    <div className={styles.root}>
      <h1>
        <span>🤷🏼‍♂️</span>
        <br />
        Nothing found...
      </h1>
    </div>
  );
}
