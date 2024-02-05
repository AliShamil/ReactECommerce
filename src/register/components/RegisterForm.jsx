import { Link } from "react-router-dom";
import LetterIcon from "../../assets/Letter.svg";
import LockIcon from "../../assets/Lock.svg";
import UserIcon from "../../assets/User.svg";

function RegisterForm() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Hello Again!</h2>
            <p className="text-2xl">Welcome Back</p>
            <form className="flex flex-col items-center justify-center sm:grid grid-cols-2 sm:gap-4 w-full max-w-[850px] mt-6 px-10" action="">
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                <img
                        className="w-[24px] h-[24px] text-[#C2C2C2]"
                        src={UserIcon}
                        alt="letterIcon"
                    />
                    <input className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Name' type="text" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                <img
                        className="w-[24px] h-[24px] text-[#C2C2C2]"
                        src={UserIcon}
                        alt="letterIcon"
                    />
                    <input className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Surname' type="text" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                <img
                        className="w-[24px] h-[24px] text-[#C2C2C2]"
                        src={LetterIcon}
                        alt="letterIcon"
                    />
                    <input className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Email Address' type="email" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                <img
                        className="w-[24px] h-[24px] text-[#C2C2C2]"
                        src={LockIcon}
                        alt="letterIcon"
                    />
                    <input className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Password' type="password" />
                </div>
                <div className="w-full flex col-span-2 justify-center">
                    <button className="bg-green-400 w-full sm:max-w-[400px]  mt-4 text-white py-2 " type="submit">Register</button>
                </div>
            </form>
            <div className="text-teal-800 mt-3">
                <span>Do you have account? </span>
                <Link  to="/login" className="underline">Log In</Link>
            </div>
        </div>
    )
}

export default RegisterForm