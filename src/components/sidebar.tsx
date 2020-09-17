import React from 'react';

import styles from '../css/sidebar.module.css';

type Props = {
  isShowSide: boolean;
};
const Sidebar = (props: Props) => {
  const { isShowSide } = props;
  return (
    <ul className={`${styles.sidebar}  ${isShowSide ? '' : styles.slideright}`}>
      <li>All Menu</li>
      <li>Add Menu</li>
    </ul>
  );
};

export default Sidebar;
