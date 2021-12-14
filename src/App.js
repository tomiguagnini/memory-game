import Header from './Componets/Header/Header';
import Tablero from './Componets/Tablero/Tablero'
import { useState } from 'react';



function App() {
  const [bkg, setBkg] = useState(1)
  return (
    <div>
      {bkg}
      <Header setBkg={setBkg}></Header>
      <Tablero bkg={bkg}></Tablero>
      
    </div>
  );
}

export default App;
