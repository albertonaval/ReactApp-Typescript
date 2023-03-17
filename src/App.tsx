
import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';




interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
      {
      nick: 'coscorron',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=coscorron',
      description: 'Coscorron es buena gente'
    },
    {
      nick: 'Gofio',
      subMonths: 2,
      avatar: 'https://i.pravatar.cc/150?u=gofio',
    }
]

function App() {
  const [subs, setSubs] = useState<Sub[]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])




  return (
    <div className="App">
      <h1>SUBSCRISTORES</h1>
      <List subs={subs} />
      <Form/>
    </div>
  );
}

export default App;

