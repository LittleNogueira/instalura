import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const timeline = (state=[],action) => {

  if(action.type === 'LISTAGEM'){
    return action.fotos;
  }

  return state;

}

const store = createStore(timeline, applyMiddleware(thunk));


class App extends Component {
  render() {    
    return (
    <div id="root">
      <div className="main">
        <Header/>
        <Timeline login={this.props.params.login} store={store}/>
      </div>
    </div>
    );
  }
}

export default App;
