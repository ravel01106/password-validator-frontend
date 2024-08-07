import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PasswordValidatorScreen from './screen/PasswordValidatorScreen'
import CustomProvider from './infrastructure/UI/provider/CustomProvider'
import WelcomePage from './infrastructure/UI/pages/WelcomePage/WelcomePage'
import FormValidatorScreen from './infrastructure/UI/pages/FormValidatorPage/FormValidatorScreen'

function App() {

  return (
      <CustomProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path="/validator" element={<FormValidatorScreen />} />
          <Route path="/validator/password" element={<PasswordValidatorScreen />} />
        </Routes>
      </BrowserRouter>
      </CustomProvider>
  )
}

export default App
