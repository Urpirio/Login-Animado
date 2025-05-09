'use client';


export default function BtnSignIn({Function,Title}) {

  return (
    <div>
        <button 
        onClick={Function}
        className="
        border-2 
        uppercase 
        p-3 
        w-50 
        rounded-3xl 
        hover:opacity-75 
        cursor-pointer 
        transition-all 
        duration-300
        hover:scale-103
        ">{Title}</button>
    </div>
  )
}
