import React from "react";
import CartWIcon from "../../assets/Cart_white.svg";

function Main() {
  return (
    <div className="px-[25px] ">
      <div>
        <h1 className="text-4xl lg:text-5xl font-light mt-[80px] mb-[40px]">
          Category name
        </h1>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px] gap-x-[10px]">
        <div className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
          <div className="w-full relative max-w-[356px] h-[340px]">
            <img
              className="object-cover w-full max-w-[356px] h-[340px]"
              src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
              alt="hehe"
            />
            <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
              <img
                className="w-[24px] h-[24px] mr-1"
                src={CartWIcon}
                alt="cart_white"
              />
            </button>
          </div>
          <p className="font-light mt-[24px]">Apollo Running Short</p>
          <p className="font-semibold">
            <span>$</span>50.00
          </p>
        </div>
        <div className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
          <div className="w-full relative max-w-[356px] h-[340px]">
            <img
              className="object-cover w-full max-w-[356px] h-[340px]"
              src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
              alt="hehe"
            />
            <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
              <img
                className="w-[24px] h-[24px] mr-1"
                src={CartWIcon}
                alt="cart_white"
              />
            </button>
          </div>
          <p className="font-light mt-[24px]">Apollo Running Short</p>
          <p className="font-semibold">
            <span>$</span>50.00
          </p>
        </div>
        <div className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
          <div className="w-full relative max-w-[356px] h-[340px]">
            <img
              className="object-cover w-full max-w-[356px] h-[340px]"
              src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
              alt="hehe"
            />
            <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
              <img
                className="w-[24px] h-[24px] mr-1"
                src={CartWIcon}
                alt="cart_white"
              />
            </button>
          </div>
          <p className="font-light mt-[24px]">Apollo Running Short</p>
          <p className="font-semibold">
            <span>$</span>50.00
          </p>
        </div>
        <div className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
          <div className="w-full relative max-w-[356px] h-[340px]">
            <img
              className="object-cover w-full max-w-[356px] h-[340px]"
              src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
              alt="hehe"
            />
            <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
              <img
                className="w-[24px] h-[24px] mr-1"
                src={CartWIcon}
                alt="cart_white"
              />
            </button>
          </div>
          <p className="font-light mt-[24px]">Apollo Running Short</p>
          <p className="font-semibold">
            <span>$</span>50.00
          </p>
        </div>
        <div className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
          <div className="w-full relative max-w-[356px] h-[340px]">
            <img
              className="object-cover w-full max-w-[356px] h-[340px]"
              src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
              alt="hehe"
            />
            <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
              <img
                className="w-[24px] h-[24px] mr-1"
                src={CartWIcon}
                alt="cart_white"
              />
            </button>
          </div>
          <p className="font-light mt-[24px]">Apollo Running Short</p>
          <p className="font-semibold">
            <span>$</span>50.00
          </p>
        </div>
        <div className="flex w-full transition-shadow ease-in-out max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
          <div className="w-full relative max-w-[356px] h-[340px]">
            <img
              className="object-cover w-full max-w-[356px] h-[340px]"
              src="https://s3-alpha-sig.figma.com/img/b950/a3bd/b5e3087a92bcdb9503e38bbf905ae3a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz6AjP32OM8P8HgOJAEkne0pdFznU5IQgXH8pbGmbARebIusUJXA98l9R9jxVkCr4MqBnYU4YuIItq4lO8FAD70Dgs9jI6F-OUFFOaYYmRzUNKM0~ECvUPaL1otyBrNj0ew4AAYZa6koBusTOJvTse8XGQW1w-KpyFqqJtCTXth8fwoGkCS0iYDQ-FtLAi0QEog6GahalkFcY2z5XBfbhASeeUcBw2YSgBk0LSUDaOj5V1yDp7CB2iByOKF~pRbpn2wRUOjz2J6Y10siYOukwZQxlnVqk28ofsD0qPyCtx-NP2sXZ3tuibcVG2dmTW3mcjP5yODGgRPQO14rbRGYag__"
              alt="hehe"
            />
            <button className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
              <img
                className="w-[24px] h-[24px] mr-1"
                src={CartWIcon}
                alt="cart_white"
              />
            </button>
          </div>
          <p className="font-light mt-[24px] mr-1">Apollo Running Short</p>
          <p className="font-semibold">
            <span>$</span>50.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
