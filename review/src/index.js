import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const Person =  ()=> {
  return(<div>
    <h1>Hello</h1>
  </div>);
}

const App = () => {
  return(
    <div>
      <Person/>
      <button>Button 1</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);