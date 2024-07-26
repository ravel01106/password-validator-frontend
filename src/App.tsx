import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomeScreen from './screen/WelcomeScreen'
import FormValidatorScreen from './screen/FormValidatorScreen'
import PasswordValidatorScreen from './screen/PasswordValidatorScreen'
import CustomProvider from './provider/CustomProvider'

function App() {

  return (
      <CustomProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path="/validator" element={<FormValidatorScreen />} />
          <Route path="/validator/password" element={<PasswordValidatorScreen />} />
        </Routes>
      </BrowserRouter>
      </CustomProvider>
  )
}

export default App
