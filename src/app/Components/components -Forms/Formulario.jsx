import BtnSign_Up from "../components - Btns/GoToInside/BtnSign";
import Btns_Red_Social from "@/app/Btns/Btns-Red-Social";
import { Section_SignIn } from "../components - Sign/Section-SignUp";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import BtnSign from "../components - Btns/GoToInside/BtnSign";




export default function Formulario() {
  return (
    <section className="flex justify-between items-center h-[80%] w-[60%] border-1 border-gray-300 shadow-xl rounded-2xl relative"> 
        <div className="
        flex 
        flex-col 
        justify-center 
        items-center  
        w-[60%] 
        h-[100%] 
        rounded-l-2xl 
        absolute 
        bg-white
        transition-all
        duration-300
        "
        id="FormComponent"
        >
            <div className="flex flex-col items-center justify-evenly gap-2 flex-grow w-[100%] rounded-l-2xl rounded-b pt-5 ">
                <div className="text-3xl font-bold text-blue-500">
                    <h1 id="TitleSection">Create Account</h1>
                </div>
                <Btns_Red_Social/>
                <div>
                    <span className="text-gray-700">or use your email for registration:</span>
                </div>
            </div>
            <form action="" className="
            flex 
            items-center 
            justify-start 
            flex-col 
            w-[100%]
            gap-2
            py-5
            flex-grow
            rounded-bl-2xl
            
            [&form>div>div>input]:h-10
            [&form>div>div>input]:w-[90%]
            [&form>div>div>input]:outline-none
            [&form>div>div>input]:text-[18px]
            [&form>div>div>input]:text-gray-800

            
            ">
                <div className="w-[100%]  flex justify-start items-center flex-col gap-2">
                <div className="w-[75%] h-12 gap-2 flex justify-between items-center  rounded-xl px-4 bg-gray-100 -gray-100" id="Cname">
                    <FaRegUser className="text-gray-400 text-xl"/>
                    <input type="text" placeholder="Name" required/>
                </div>
                <div className="w-[75%] h-12 gap-2 flex justify-between items-center  rounded-xl px-4 bg-gray-100 -gray-100">
                    <MdOutlineMailOutline className="text-gray-400 text-xl"/>
                    <input type="email" placeholder="Email"  required/>
                </div>
                <div className="w-[75%] h-12 gap-2 flex justify-between items-center  rounded-xl px-4 bg-gray-100 -gray-100">
                    <FaLock className="text-gray-400 text-xl" required/>
                    <input type="password" placeholder="Password" required/>
                </div>
                </div>
                <BtnSign/>
            </form>
            
        </div>
        <Section_SignIn/>
    </section>
  )
}
