import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact /> 
          <Route path='/edit' element={<Edit/>}  />       
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
