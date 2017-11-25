// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import { NFC } from 'nfc-pcsc';

class Nfc extends Component {

  props: {
    getText: () => void,
    nfc: string
  };

  render() {
    const { getText, nfc } = this.props;
    console.log('nfc', NFC);
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <button className={styles.btn} onClick={getText} data-tclass="btn"> </button>
       <div> {nfc}</div>
      </div>
    );
  }
}

export default Nfc;
