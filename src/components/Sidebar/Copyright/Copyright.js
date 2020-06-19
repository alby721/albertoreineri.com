// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    {copyright}
    <br />
    <a href="/pages/privacy">
    Privacy Policy
    </a>
  </div>
);

export default Copyright;
