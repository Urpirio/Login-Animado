
import { useEffect,useState } from "react";
import BtnSignIn from "../components - Btns/ChangeForm/BtnSignIn";
import { ChangePosition, StateIn } from "../components - Btns/func/ChangePosition";
import BtnSign from "../components - Btns/GoToInside/BtnSign";

export  function Section_SignIn() {

    const  [Aside,setAside] = useState();
    const [AsideBtn,setAsideBtn] = useState();


    const ContentLogin = () =>{
        return(
            <div>
                <div className="flex  justify-center text-4xl font-bold">
                    <h1>Welcome back</h1>
                </div>
                <div>
                    <span>
                     To keep connect with us please login with your
                     personal info
                    </span>
                </div>
            </div>
        )
    }

    const ContentRegister = () => {
        return(
            <div>
                <div className="flex justify-center text-4xl font-bold">
                 <h1>Hello, friend</h1>
             </div>
             <div>
                 <span>
                     To keep connect with us please login with your
                     personal info
                 </span>
             </div>
            </div>
        )
    }

    useEffect(()=>{
        if(StateIn[0].State){
            setAside(<ContentLogin/>)
            setAsideBtn(<BtnSignIn Function={ChangePosition} Title={`Sign Up`}/>)
        }else{
            setAside(<ContentRegister/>)
            setAsideBtn(<BtnSignIn Function={ChangePosition} Title={`Sign In`}/>)
        }
    })


  return (
        <section className="
        flex 
        bg-gradient-to-t 
        from-green-500 
        to-blue-500 
        text-white 
        flex-col 
        justify-center 
        items-center 
        text-center 
        gap-10 
        p-5 
        rounded-tr-2xl 
        rounded-br-2xl 
        h-[100%]
        absolute
        left-135
        z-20
        transition-all
        duration-300
        "
        id="SignComponent"
        >
            {Aside}
            {AsideBtn}
        </section>
  )
};



