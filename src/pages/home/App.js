import logo from '../../images/logo.svg';
import './App.css';
import AButton from '../../components/AButton/AButton';
import { TextField } from '@mui/material'

function App() {
  return (
    <div className="App">
      <img src={logo} />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <AButton name="haoran" />
    </div>
  );
}

export default App;
