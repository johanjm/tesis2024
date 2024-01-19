import { Formulario } from './components/Formulario';
import './Css/App.css';
import { Home } from './components/Home';
import { useState } from 'react';


function App() {

  const [user, SetUser] = useState([])

  return (
    <div className="App">
      hola {user}
      {
        !user.length > 0
        ? <Formulario setUser={SetUser} />
        : <Home user={user} setUser={SetUser} />
      }
    </div>
  );
}

export default App;
