import React from 'react';
import randomData from './dataGenerator';

import './style.css';

import MyComponent from './components/MyComponent/MyComponent';
export default function App() {
  return (
    <div id="main-container">
      <MyComponent data={randomData(15)} />
    </div>
  );
}
