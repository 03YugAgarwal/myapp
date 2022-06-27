import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('Light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message)=>{
    setAlert({
      msg: message
    })
  }

  const toggleMode=()=>{
    if(mode==='Light'){
      setmode('Dark');
      document.body.style.background = '#393E46';
      showAlert('Dark Mode Enabled');
    }else{
      setmode('Light');
      document.body.style.background = 'white';
      showAlert('Light Mode Enabled');
    }
  }

  return (
    <> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
    </>
  );
}

export default App;
