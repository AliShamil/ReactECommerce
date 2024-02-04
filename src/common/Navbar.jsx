import { useState } from "react";
import Logo from "../assets/Logo.svg";
import CartIcon from "../assets/Cart.svg";
function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    return (
      <nav>
        <div className="hidden lg:flex justify-between">
          <ul className="flex w-[50%] gap-8">
            <li className="flex flex-col  text-center w-[70px] h-[56px]">
              <p className="text-[#5ECE7B] max-auto font-semibold mb-[30px] mt-[26px]">
                WOMEN
              </p>
              <span className="w-[70px] border border-[#5ECE7B]"></span>
            </li>
            <li className="flex flex-col text-center w-[70px] h-[56px]">
              <p className="text-black mx-auto mb-[30px] mt-[26px]">MEN</p>
              <span className="invisible w-[70px] border border-[#5ECE7B]"></span>
            </li>
            <li className="flex flex-col text-center w-[70px] h-[56px]">
              <p className="text-black mx-auto mb-[30px] mt-[26px]">KIDS</p>
              <span className="invisible w-[70px] border border-[#5ECE7B]"></span>
            </li>
          </ul>
          <img src={Logo} className="mt-[24px] mb-[15px]" alt="my_logo" />
          <ul className="flex w-[50%] items-center justify-end gap-8">
            <li className="flex">
              <select className="rounded py-2 px-4 leading-tight focus:outline-none">
                <option key="$" value="$">
                  $
                </option>
                <option key="₼" value="₼">
                  ₼
                </option>
              </select>
            </li>
            <li>
              <img src={CartIcon} className="w-[20px] h-[20px]" alt="cart_icon" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:hidden">
          <div className="flex h-[75px] items-center justify-between">
            <div className="ml-5">
              <button
                onClick={() => {
                  setOpenNav((preVal) => !preVal);
                }}
                className="text-black"
              >
                ☰
              </button>
            </div>
            <img
              src={Logo}
              className="mt-[24px] mb-[15px] mr-5"
              alt="my_logo"
            />
          </div>
          <div className={`${openNav ? "" : "hidden"}`}>
            <ul className="flex flex-col items-center mb-[25px] gap-8">
              <li className="flex px-5 flex-col text-center w-full h-[56px]">
                <p className="text-[#5ECE7B] max-auto font-semibold mb-[30px] mt-[26px]">
                  WOMEN
                </p>
                <div className="w-full border border-[#5ECE7B]"></div>
              </li>
              <li className="flex px-5 flex-col text-center w-full h-[56px]">
                <p className="text-black mx-auto mb-[30px] mt-[26px]">MEN</p>
                <div className="invisible w-full border border-[#5ECE7B]"></div>
              </li>
              <li className="flex px-5 flex-col text-center w-[70px] h-[56px]">
                <p className="text-black mx-auto mb-[30px] mt-[26px]">KIDS</p>
                <div className="invisible w-[70px] border border-[#5ECE7B]"></div>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-16">
              <li className="flex">
                <select className="rounded py-2 px-4 leading-tight focus:outline-none">
                  <option key="$" value="$">
                    $
                  </option>
                  <option key="₼" value="₼">
                    ₼
                  </option>
                </select>
              </li>
              <li>
                <img
                  src={CartIcon}
                  className="w-[20px] h-[20px]"
                  alt="cart_icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar