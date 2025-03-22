import { Route, Routes } from "react-router"
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import SignUpPage from "./pages/signUpPage"
import TransactionPage from "./pages/transactionPage"
import NotFoundPage from "./pages/notFoundPage"
import Header from "./siteComponents/ui/header"
import Footer from "./siteComponents/ui/footer"


function App() {
  const authUser = true;

  return (
    <>
    {authUser && <Header/>}
      <Routes>
      <Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/transaction/:id' element={<TransactionPage />} />
				<Route path='*' element={<NotFoundPage />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
