import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Seyi from './seyi';
// import Inside from './inside';

// const arr = [
//   {name: "feyi", training: "london"},
//   {name: "Tobi", training: "ibadan"},
//   {name: "Deola", training: "abuja"}
// ]


const arr = [
{name: "Ayodele", location:"Yaba"},
  {name: "Jelili", location:"Ketu"},
  {name: "Seyi", location:"Berger"},
  {name: "Tolani", location:"Ikosi"},
  {name: "Bethel", location:"Shomolu"},
  {name: "Opeyemi", location:"Bariga"},
  {name: "Joseph", location:"Ikeja"},
  {name: "Obinna", location:"Surulere"},
  {name: "Tobi", location:"Yaba"},
  {name: "Damola", location:"Bariga"},
  {name: "Osaze", location:"Oshodi"},
  {name: "Tochukwu", location:"Gbagada"},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Sga 0.7 class
        </h1>
        
        
        {
arr.map(_arr=>{
  return (
    <Seyi  name={_arr.name} location={_arr.location}/>
  )})
        }
        

       
      </header>
    </div>
  );
}

export default App;
