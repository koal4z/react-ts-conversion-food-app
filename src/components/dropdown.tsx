import React from 'react';

import styles from '../css/dropdown.module.css';

type Props = {
  setConvert(e: React.FormEvent<HTMLSelectElement>): void;
};

const Dropdown = (props: Props) => {
  const { setConvert } = props;
  return (
    <select className={styles.dropdown} onChange={setConvert}>
      <option>--select unit--</option>
      <option value="g">g</option>
      <option value="kg">kg</option>
    </select>
  );
};

export default Dropdown;
