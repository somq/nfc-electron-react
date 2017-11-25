// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


import { DatePicker } from 'antd';


export default class Home extends Component {
    
  
  // ReactDOM.render(formInstance, mountNode);

  render() {
    return (
      <div>
        <LocaleProvider locale={enUS}>
        <DatePicker />
  </LocaleProvider>
        
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="jane.doe@example.com" />
          </FormGroup>
          {' '}
          <Button type="submit">
            Send invitation
          </Button>
        </Form>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link> <br />
          <Link to="/nfc">to NfcPage</Link>
        </div>
      </div>
    );
  }
}
