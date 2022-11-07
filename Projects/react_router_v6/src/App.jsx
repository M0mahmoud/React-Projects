import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="newuser" element={<h3>New User</h3>}></Route>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductsDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
