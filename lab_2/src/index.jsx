import React from 'react';

import ReactDOM from 'react-dom';
import {Task1} from "./components/Task1";
import {Task2} from "./components/Task2";
import {Task3} from "./components/task3";
import {Task4} from "./components/Task4";


function App() {
    return <>
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
    </>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

