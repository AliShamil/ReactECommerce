import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./cart/Cart";
import NotFound from "./error/NotFound";
import Login from "./login/Login";
import MainPage from "./mainpage/MainPage";
import Product from "./product/Product";
import Register from "./register/Register";
import { CookieProvider } from "./context/CookieContext";
import Context from "./context/GlobalContext";
import { useContext } from "react";
function App() {
  const { cookies } = useContext(Context)
  return (
    <>
      <CookieProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/mainpage" replace />}></Route>

          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CookieProvider>
    </>
  )
}

export default App
