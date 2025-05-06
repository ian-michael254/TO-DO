import React from 'react'
import Hamburger from '../assets/hamburger.svg'
import {useState} from 'react'

function Navbar() {
    const [isOpen, setIsOpen] =useState(false);
    const menuToggle =()=>{
        setIsOpen(!isOpen);
    }
  return (
    <nav className="bg-violet-950 p-10 flex justify-between items-center md:flex md:justify-between md:items-center scroll-smooth">
        <div className='text-slate-100 font-bold text-2xl cursor-pointer mr-auto'>
            MY LOGO

        </div>
        {/*HAMBURGER MENU SVG*/}
        <div className="w-12 md:hidden rounded-md drop-shadow-lg bg-slate-100 cursor-pointer" onClick={menuToggle}>
            <img src={Hamburger} alt="" />

        </div>
        <ul className="hidden md:flex space-x-6">
            <li className="py-2 px-1 transition-all ease-in-out delay-250 duration-250 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg" href="#">Home</a></li>
            <li className="py-2 px-1 transition-all ease-in-out delay-250 duration-250 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg" href="#">About</a></li>
            <li className="py-2 px-1 transition-all ease-in-out delay-250 duration-250 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg" href="#">Plans</a></li>
            <li className="py-2 px-1 transition-all ease-in-out delay-250 duration-250 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg" href="#">Talk to Us</a></li>
        </ul>

        {/*MOBILE LINKS*/}
        {isOpen ? (
            <ul className="absolute top-30 right-0 bg-violet-950 w-full h-screen flex flex-col items-center justify-center space-y-6 md:hidden -z-50">
                <li className="py-2 px-2 transition-all ease-in-out delay-300 duration-300 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg " href="#">Home</a></li>
                <li className="py-2 px-2 transition-all ease-in-out delay-300 duration-300 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg " href="#">About</a></li>
                <li className="py-2 px-2 transition-all ease-in-out delay-300 duration-300 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg " href="#">Plans</a></li>
                <li className="py-2 px-2 transition-all ease-in-out delay-300 duration-300 hover:rounded-md hover:bg-violet-800"><a className="text-slate-100 text-lg " href="#">Talk to Us</a></li>
            </ul>
           
            

        ):null};

       
        


    </nav>
  )
}

export default Navbar