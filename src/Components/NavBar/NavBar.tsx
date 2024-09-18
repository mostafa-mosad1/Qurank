import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open,setOpen] =useState(false)
  return (
    <>
    <div className="bg-green-700 sticky top-0 left-0 z-[1000]">

    
      <div className="pc  hidden md:flex text-right text-xl text-white font-bold  container py-6 justify-between">
        <div className="">
          <NavLink className="title text-4xl" to={""}>
          قـّرّأنـّگـ
          </NavLink>
        </div>
        <div>
          <NavLink className={"md:mx-5"} to={""}>
            {" "}
            الصفحة الرئيسية{" "}
          </NavLink>

          <NavLink className={"md:mx-5"} to={"/Quran"}>
            {" "}
            القرأن الكريم{" "}
          </NavLink>

          <NavLink className={"md:mx-5"} to={"/Explanation"}>
            {" "}
            تفسير القرأن الكريم{" "}
          </NavLink>

          <NavLink className={"md:mx-5"} to={"/Hadiths"}>
            {" "}
            أحاديث{" "}
          </NavLink>
          <NavLink className={"md:mx-5"} to={"/radio"}>
            {" "}
            راديو{" "}
          </NavLink>
        </div>
      </div>
      </div>
      <div className="mobile sticky top-0 left-0 z-[1000] md:hidden    text-right text-xl text-white font-bold bg-green-700 p-10 ">
        <div className="flex justify-between">
          <NavLink className="title" to={""}>
          قـّرّأنـّگـ
          </NavLink>
        <i 
        onClick={()=>{
          setOpen(!open)
        }}
         className="fa-solid fa-bars text-4xl cursor-pointer"></i>
        </div>
        {open&& <div className="flex flex-col">
          <NavLink onClick={()=>setOpen(false)}  className={"mt-2"} to={""}> الصفحة الرئيسية </NavLink>

          <NavLink onClick={()=>setOpen(false)}  className={"mt-2"} to={"/Quran"}> القرأن الكريم </NavLink>

          <NavLink onClick={()=>setOpen(false)}  className={"mt-2"} to={"/Explanation"}> تفسير القرأن الكريم </NavLink>
          
          <NavLink onClick={()=>setOpen(false)}  className={"mt-2"} to={"/Hadiths"}> أحاديث </NavLink>
          <NavLink onClick={()=>setOpen(false)}  className={"mt-2"} to={"/radio"}> راديو </NavLink>
        </div>}
      </div>
    </>
  );
}

export default NavBar;
