import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PasswordValidatorPage from './infrastructure/UI/pages/PasswordValidatorPage/PasswordValidatorPage'
import CustomProvider from './infrastructure/UI/provider/CustomProvider'
import WelcomePage from './infrastructure/UI/pages/WelcomePage/WelcomePage'
import FormValidatorPage from './infrastructure/UI/pages/FormValidatorPage/FormValidatorPage'

function App() {

  return (
      <CustomProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path="/validator" element={<FormValidatorPage />} />
          <Route path="/validator/password" element={<PasswordValidatorPage />} />
        </Routes>
      </BrowserRouter>
      </CustomProvider>
  )
}

export default App
