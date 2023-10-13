import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './DragDrop';
import Navbar from './Navbar/Navbar';
import './index.css';

const MyComponent = props => {
  return (
    <>
      <Navbar/>
      <DragDrop mode={"edit"} {...props} />
    </>
  );
};

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <MyComponent />
  </DndProvider>,
  document.getElementById('root')
);
