import React from 'react'
import CartInfo from "./components/CartInfo";
import Navbar from '../common/Navbar';
function Cart() {
    return (
        <div className="lg:px-[117px]">
          <Navbar/>
          <div className="mx-10 lg:mx-0">
            <h1 className="text-5xl font-semibold mt-[80px] mb-[40px]">CART</h1>
            <div className="border border-zinc-200 w-full mt-[75px]"></div>
            <div className="">
              <CartInfo />
              <CartInfo />
            </div>
            <div className="flex flex-col text-2xl font-light">
                <label>Tax 18%: <span className="ml-2 font-bold"><span>$</span>18.00</span></label>
                <label>Quantity: <span className="ml-2 font-bold">2</span></label>
                <label>Total: <span className="ml-2 font-bold"><span>$</span>100</span></label>
            </div>
            <button className="bg-[#5ECE7B] my-9 text-white w-full max-w-[300px] py-4 font-medium">
                ORDER
              </button>
          </div>
        </div>
      );
}

export default Cart