import { useReducer, useState } from 'react'
import './App.css'
import AnnouncementBar from './components/AnnouncementBar'
import ProductList from './components/e-products/ProductList'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import { ProductContext } from './context'
import { cartReducer, initialState } from './reducers/CartReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <ProductContext.Provider value={{ state, dispatch, searchQuery, setSearchQuery }}>

        <AnnouncementBar />
        <Header />
        <ProductList />
        <Newsletter />
        <Footer />

        <ToastContainer />

      </ProductContext.Provider>
    </>
  )
}

export default App
