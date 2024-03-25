
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Navigation from "./Navigation";
import ProductByCategory from "./ProductsByCategory";
import Provider from "./Provider";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <ToastContainer />
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductByCategory />} />
            <Route path="/mycart" element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}