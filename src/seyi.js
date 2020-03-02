import React from 'react';
// import Inside from './inside';

function Seyi(props) {
  return (
    <div className="Seyi">

        <p>
          My name is {props.name}, and i am a stutern developer
        </p>
  <h4>I live at {props.location}</h4>
       
      {/* <Inside/> */}
    </div>
  );
}

export default Seyi;