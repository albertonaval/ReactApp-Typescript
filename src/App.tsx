
import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub, SubsResponseFromApi } from './types';
import axios from 'axios';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<Sub[]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  useEffect(() => {
    const fetchSubs = async (): Promise<SubsResponseFromApi> => {
      const response = await axios
        .get('http://locahost:3000/subs');
      return response.data;
    }
  }, [])

  return (
    <div className="App" ref={divRef} >
      <h1>SUBSCRISTORES</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;

