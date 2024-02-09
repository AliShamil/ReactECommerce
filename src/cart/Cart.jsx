import React, { useContext} from 'react'
import CartInfo from "./components/CartInfo";
import Navbar from '../common/Navbar';
import Context from '../context/GlobalContext';
import { useCookieContext } from '../context/CookieContext';
function Cart() {
  const { cookies } = useCookieContext();
  const { orders, currency,totalQuantity } = useContext(Context);

  const totalPrice = orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  const tax = 18
  const taxValue = (totalPrice / 100)*tax
  const totalWithTax = (totalPrice - ((totalPrice / 100)*tax)).toFixed(2)
  async function sendOrders() {
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "PUT",
        body: JSON.stringify({ orderItems: orders }),
        headers:
        {
          "Content-type": "application/json",
          "Authorization": `Bearer ${cookies.accessToken}`
        }
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
      else {
        console.log(response.status)
        console.log(response.json())
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="md:px-20 lg:px-28">
      <Navbar></Navbar>
      <div className="mx-10 lg:mx-0">
        <h1 className="text-5xl font-semibold mt-[80px] mb-[40px]">CART</h1>
        <div className="border border-zinc-200 w-full mt-[75px]"></div>
        <div>
          {orders.length ? orders.map((product) => (<CartInfo key={product.id} data={product} />)) : null}
        </div>
        <div className="flex flex-col text-2xl font-light">
          <label>Tax {tax}%: <span className="ml-2 font-bold"><span>{currency}</span>{currency==="$"?taxValue.toFixed(2):(taxValue*1.7).toFixed(2)}</span></label>
          <label>Quantity: <span className="ml-2 font-bold">{totalQuantity}</span></label>
          <label>Total: <span className="ml-2 font-bold"><span>{currency}</span>{currency === "$" ? Number(totalWithTax).toFixed(2) : (totalWithTax * 1.7).toFixed(2)}</span></label>
        </div>
        <button onClick={() => sendOrders()} className="bg-[#5ECE7B] my-9 text-white w-full max-w-[300px] py-4 font-medium">
          ORDER
        </button>
      </div>
    </div>
  )
}

export default Cart