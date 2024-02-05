import { Routes , Route , Navigate } from "react-router-dom";
import Cart from "./cart/Cart";
import NotFound from "./error/NotFound";
import Login from "./login/Login";
import MainPage from "./mainpage/MainPage";
import Product from "./product/Product";
import Register from "./register/Register";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/mainpage" replace />}></Route>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
