import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomeScreen from './screen/WelcomeScreen'
import FormValidatorScreen from './screen/FormValidatorScreen'
import PasswordValidatorScreen from './screen/PasswordValidatorScreen'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomeScreen />}/>
        <Route path="/validator" element={<FormValidatorScreen />}/>
        <Route path="/validator/password" element={<PasswordValidatorScreen />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
