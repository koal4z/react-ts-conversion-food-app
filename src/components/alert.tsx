import React from 'react';
import { MDBIcon } from 'mdbreact';

import styles from '../css/alert.module.css';

type Props = {
  message: string;
};

const Alert = (props: Props) => {
  const { message } = props;
  return (
    <div className={styles.alert}>
      <div className={styles.icon__box}>
        <MDBIcon icon="ban" />
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Alert;
