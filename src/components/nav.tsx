import React, { useState } from 'react';

import styles from '../css/nav.module.css';
import Sidebar from './sidebar';

const Nav = () => {
  const [showSide, setShowSide] = useState<boolean>(false);
  const handleSidebar = (): void => {
    setShowSide(!showSide);
  };

  return (
    <nav className={styles.nav__box}>
      <div className={styles.nav__box_ham} onClick={handleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Sidebar isShowSide={showSide} />
    </nav>
  );
};

export default Nav;
