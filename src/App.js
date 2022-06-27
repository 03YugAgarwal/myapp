import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

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
    {/* <Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

        {/* <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}> </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>  </Route>
        </Routes> */}
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      <About mode={mode}/>
    {/* </Router> */}
    </>
  );
}

export default App;
