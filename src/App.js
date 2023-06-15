import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./Screens/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpScreen from "./Screens/SignUpScreen";
import ProductBar from "./Component/ProductBar/ProductBar";
import PrivateRoutes from "./PrivateRoutes";

import AddProduct from "./Component/AddProductBar/AddProduct";
// import GeneralProduct from "./Component/AddProductBar/GeneralProduct";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <LoginScreen /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LoginIn" element={<LoginScreen />} />
            <Route path="/SignUp" element={<SignUpScreen />} />
            <Route path="/" element={<PrivateRoutes />}>
            <Route path="/ProductPage" element={<ProductBar />} />
            <Route path="/AddProduct" element={<AddProduct />} />          
          </Route>
          </Routes>
        </BrowserRouter>
        {/* <Home/> */}
      </div>
    </>
  );
}

export default App;
