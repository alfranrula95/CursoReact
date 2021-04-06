import React, { useState } from 'react';
import './../App.css';

function Focus() {
    let manejarFoco = (event) => {
        if(event.type === 'focus') console.log("El elemento tiene foco");
        if(event.type === 'blur') console.log("El elemento pierde el foco");
      }
          
      return (
        <div className="App">
          <header className="App-header">
            <h1>Eventos en React</h1>
      
            <input type="text" onFocus={manejarFoco} onBlur={manejarFoco} />
          </header>
        </div>
      );
}
export default Focus;