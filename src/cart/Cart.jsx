import React, { useState, useEffect, useContext } from 'react';
import CartInfo from "./components/CartInfo";
import Navbar from '../common/Navbar';
import Context from '../context/GlobalContext';

function Cart() {
  const { orders, currency, totalQuantity } = useContext(Context);
  const totalPrice = orders.reduce((total, order) => total + (order.price * order.quantity), 0);
  const tax = 18;
  const taxValue = (totalPrice / 100) * tax;
  const totalWithTax = (totalPrice - ((totalPrice / 100) * tax)).toFixed(2);

  const [showModal, setShowModal] = useState(false);
  

  const youtubeVideoId = 'rcVb6l4TpHw';

  useEffect(() => {
    if (showModal) {

      const iframe = document.getElementById('youtubePlayer');
      iframe.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
    }
  }, [showModal]);

  const handleOrderClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
          <label>Tax {tax}%: <span className="ml-2 font-bold"><span>{currency}</span>{currency === "$" ? taxValue.toFixed(2) : (taxValue * 1.7).toFixed(2)}</span></label>
          <label>Quantity: <span className="ml-2 font-bold">{totalQuantity}</span></label>
          <label>Total: <span className="ml-2 font-bold"><span>{currency}</span>{currency === "$" ? Number(totalWithTax).toFixed(2) : (totalWithTax * 1.7).toFixed(2)}</span></label>
        </div>
        <button onClick={handleOrderClick} className="bg-[#5ECE7B] my-9 text-white w-full max-w-[300px] py-4 font-medium">
          ORDER
        </button>

        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center" onClick={closeModal}>
            <div className="bg-white p-4 md:p-8 max-w-full md:w-[50%] md:h-96 max-h-[400px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <iframe
                id="youtubePlayer"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
