import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { useAuthContext } from './hooks/useAuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'


import { BrowserRouter as Router, Routes, Route, Redirect,Navigate } from "react-router-dom";



import { BrowserRouter as Router, Routes, Route, Redirect, } from "react-router-dom";

const App = () => {


   const { user } = useAuthContext()

  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route path="/products/:category" element={<ProductList/>}>
          
        </Route>

        <Route path="/product/:id" element={<Product/>}>          
          
        </Route>
        <Route path="/cart" element={<Cart/>}>

        </Route>


        <Route 
              path="/login" 
              // element={<Login /> } 
              element={!user ? <Login /> : <Navigate to="/" />} 
            > </Route>
        <Route 
              path="/signup"
              // element={<Signup /> } 
              element={!user ? <Signup /> : <Navigate to="/" />} 
         > </Route>  


        {/* <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}

      </Routes>
    </Router>
  );
};

export default App;