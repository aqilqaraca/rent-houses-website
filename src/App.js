import React,{useEffect} from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import AllApartment from './Components/AllApartment'
import ContactPage from './Components/ContactPage'
import Register from './Components/Register'
import ApartmentSingle from './Components/ApartmentSingle'
import { Route } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router'
import { useHistory } from 'react-router'




export default function App() {
  const loginUsername = localStorage.getItem('username')
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    if(loginUsername){
      if(location.pathname === '/register'){
        history.push('/')
      }
    }
  })
  return (
    <>
      <ToastContainer position="bottom-left"/>
      <Header/>
      <div className="components-container" style={{marginTop:'65px'}}>
      <Route exact path="/" component={Home}/>
      <Route path="/all-apartment" component={AllApartment} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/register" component={Register} />
      <Route path="/apartment-single/:id" component={ApartmentSingle} />
      </div>
    </>
  )
}
