
import Chat from "./Chat";
import React from 'react';
  import './App.css';
import Sidebar from './Sidebar';



//BEM naming conventions
function App() {
  return (
    <div className="app">
      <div class="app__body">
      <Sidebar/>      
      <Chat/> 


      </div>
           
     </div>
  );
}

export default App;
