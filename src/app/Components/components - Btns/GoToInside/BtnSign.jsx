'use client'
import { useEffect, useState } from "react";
import { StateIn } from "../func/ChangePosition";

export default function BtnSign() {

  const [TBtn,setTBtn] = useState()


  const Btn = ({Title,Function}) =>{
    return(
      <button onClick={Function} className="border p-3 w-50 rounded-3xl bg-blue-500 text-white uppercase" id="BtnForInSide">{Title}</button>
    )
  };

  useEffect(()=>{
    if(StateIn[0].State){
      setTBtn(<Btn Function={()=>{alert('funciona')}} Title={`Sign Up`}/>)
    }else{
      setTBtn(<Btn Function={()=>{alert('funciona 2')}} Title={`Sign In`}/>)
    }
  })


  return (
    <div className="flex items-start justify-center  py-5">
        {TBtn}
    </div>
  )
}
