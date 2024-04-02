import React from 'react';
import { render } from '@testing-library/react';
import './App.css';

class  App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  render(){
    
    return(
      <div>
        <h2>
          Test
        </h2>
      </div>
    )
  }

}

export default App;