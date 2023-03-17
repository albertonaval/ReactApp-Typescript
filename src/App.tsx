
import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';
import userEvent from '@testing-library/user-event';




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
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
}


  return (
    <div className="App" ref={divRef} >
      <h1>SUBSCRISTORES</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;

