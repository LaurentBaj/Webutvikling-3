import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from "./components/Counter";
import {Task2} from "./components/Task2";


function App() {
    return <>
        <Counter />
        <Task2 />
    </>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

