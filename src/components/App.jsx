import React from 'react';
import Navigation from './Navigation';
import TapList from './TapList';
import Router from './Router';

function App(){
  return(
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins');
        *{
          margin:0;
          padding:0;
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <Navigation/>
      <Router/>
    </div>
  );
}

export default App;
