import React from 'react';

import styles from '../css/dropdown.module.css';

const Dropdown = () => {
  return (
    <select className={styles.dropdown}>
      <option value="g">g</option>
      <option value="kg">kg</option>
    </select>
  );
};

export default Dropdown;
