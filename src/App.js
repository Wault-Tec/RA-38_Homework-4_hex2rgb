import './App.css';
import HexToRgb from './components/HexToRgb';
import { useState } from 'react';

const App = () => {
  const [form, setForm] = useState({
    color: '',
    finishInput: false,
  });

  const handleChange = (evt) => {
    setForm(prevForm => ({...prevForm, color: evt.target.value}));
    if(evt.target.value.length === 7) {
      setForm(prevForm => ({...prevForm, finishInput: true}));
    } else if (evt.target.value.length < 7) {
        setForm(prevForm => ({...prevForm, finishInput: false}));
      } 
  }

  return (
    <HexToRgb form={form} onChange={handleChange}/>
  )
}

export default App;
