import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: 'Fatima Garcia',
          phone: '000-000-0000',
          DOB: '07/13/2002'
        },
        {
          name: 'Ana Ruiz',
          phone: '000-000-0000',
          DOB: '10/27/2001'
        },
        {
          name: 'Darwin Buezo',
          phone: '000-000-0000',
          DOB: '10/22/2001'
        },
        {
          name: 'Katherine Juarez',
          phone: '000-000-0000',
          DOB: '11/05/1995'
        },
        {
          name: 'Allan Hernandez',
          phone: '000-000-0000',
          DOB: '12/28/1994'
        },
        {
          name: 'Dean Doukas',
          phone: '000-000-0000',
          DOB: '07/13/2002'
        },
      ]
    };
  }

  render() {
    return <BasicInfo persons={this.state.persons} />;
  }
}

export default App;
