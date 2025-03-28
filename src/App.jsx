import { Navigate, Route, Routes } from "react-router"
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import SignUpPage from "./pages/signUpPage"
import TransactionPage from "./pages/transactionPage"
import NotFoundPage from "./pages/notFoundPage"
import Header from "./siteComponents/ui/header"
import Footer from "./siteComponents/ui/footer"
import { useQuery } from "@apollo/client"
import { GET_AUTH_USER } from "./queries/user.query"
import { Toaster } from "react-hot-toast"


function App() {
  //const authUser = true;
  const {loading, data, error} = useQuery(GET_AUTH_USER);
  console.log("Auth User:", data);

  console.log("loading", loading);
  console.log("error", error);
  
  if(loading) return null;
  

  return (
    <>
    {data?.authUser && <Header/>}
      <Routes>
      <Route path='/' element={data.authUser? <HomePage />: <Navigate to='/login'/>} />
				<Route path='/login' element={!data.authUser? <LoginPage /> : <Navigate to='/'/>} />
				<Route path='/signup' element={!data.authUser? <SignUpPage />: <Navigate to='/'/>} />
				<Route path='/transaction/:id' element={data.authUser?<TransactionPage />: <Navigate to='/login'/>} />
				<Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Toaster/>
    <Footer/>
    </>
  )
}

export default App
