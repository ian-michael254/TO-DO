import React from 'react'
import Navbar from './components/Navbar'
import Hero from './assets/The Little Things - Working.png'

function HomePage() {
    
  return (
    <>
   <Navbar />
   <section id="hero " className="w-full h-content p-4 mb-2 bg-violet-200 shadow-2xl/50 shadow-violet-900 inset-shadow-sm md:h-fit md:mx-auto md:flex md:justify-evenly md:items-center md:gap-5">
    <div className=" p-4 w-full mx-auto my-2 md:w-3/4 md:flex md:justify-center md:items-center">
        <img src={Hero} alt="hero_image" />


    </div>
    <div className="p-4 w-full mx-auto h-content my-2 bg-violet-100 rounded-lg inset-shadow-sm inset-shadow-slate-300/50">
        <h2 className="text-2xl text-center my-4 font-extrabold tracking-widest font-headings md:text-3xl">Welcome to our App</h2>
        <p className="text-md font-body font-light text-justify leading-6  md:text-lg text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore dicta ex ducimus officia necessitatibus natus, expedita placeat dolores, assumenda, nostrum fuga neque sint illum culpa perspiciatis iure vel modi?
        Corrupti, voluptatum! Inventore facilis libero non aut accusantium ab, consequatur ipsum perferendis iure iste dolorum praesentium quaerat saepe repellat officiis, quas asperiores alias ipsam totam tempora quia rerum ducimus dolore.
        Dolore beatae, quae repellendus facilis, </p>
        <button className="border-none p-2 w-32 rounded-md bg-linear-to-br from-violet-800 to-violet-950 my-4 text-slate-100 relative left-40 md:relative md:left-100  cursor-pointer ">Explore</button>
    </div>
   

   </section>
   {/*ABOUT SECTION*/}
   <section id="about" className="w-full h-content py-10 px-4 bg-violet-200 mt-4 mb-2">
   <h2 className="text-2xl font-bold text-center font-heading my-6 underline underline-offset-8 decoration-violet-900">About Us</h2>
   <div className="w-full h-content py-4 px-2 bg-violet-800 mx-auto md:flex md:flex-cols-2 md:justify-around md:items-center md:gap-10 text-slate-50">
    <div className="w-full h-content p-2 mx-auto my-2  flex justify-center items-center ">
      <img className="" src={Hero} alt="about_img" />
    </div>
    <div className="w-full h-content py-4 px-2 mx-auto  md:w-4/5">
      <p className="text-md font-body text-pretty font-light leading-6 md:font-lg md:tracking-wider">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium maiores hic, possimus quos totam iusto odit nostrum dicta aperiam fugit beatae porro illo suscipit, aliquid perferendis numquam natus quo iste?
      Fuga facilis aliquam quo ut consequatur voluptas ducimus doloribus in, et maiores praesentium, expedita doloremque sed officiis, delectus adipisci ea nemo temporibus voluptatum dolorem dicta recusandae laboriosam perspiciatis. Veniam, dignissimos.
      Omnis rerum laborum incidunt voluptatibus molestiae quis, vel excepturi nulla quam in maiores, placeat, odit provident reprehenderit at ipsa accusantium dicta culpa cumque qui sequi inventore! Dolor veritatis id expedita?</p>
    </div>


   </div>

   </section>
   
   </>
   
  )
}

export default HomePage