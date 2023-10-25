"use client"
import Image from 'next/image'
import Link from 'next/link'; 
import Lottie from 'lottie-react';
import animationData from "./assets/animation.json"
import animation from "./assets/animation_earth.json"

export default function Home() {
  return (
    <>
    <div className=''>
    <div className='dark:text-white p-10 flex mt-20 justify-between mb-5'>
      <div className='mt-20 ml-18 flex-wrap shrink-0'>

        <p className='text-5xl leading-relaxed tracking-normal mb-20 shrink-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-fuchsia-900 to-indigo-900 text-transparent bg-clip-text'>Bringing Climate Change to Light :<br/> Explore, Learn, Act 🚀</p>

      <p className='shrink-0'>Unveil the future of our planet with our interactive Climate Change Visualizer.<br/> Discover the impact of climate change, explore data-driven insights, and join<br/> the movement for a sustainable future.</p>
      </div>
      <div className='shrink-0'>
        <Lottie className="h-80 mr-20" animationData={animationData}/>
      </div>
    </div>
    <div className='mt-72 text-5xl ml-10 flex'>
    <p className='flex'>Explore.</p>
    <Lottie className="h-[150px] flex -mt-12 ml-4" animationData={animation}/>
    </div>
    <div className='w-full min-h-screen justify-center content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10  text-black gap-10 mb-0 grid-flow-row -mt-40'>
       <div className='bg-gradient-to-b from-orange-400 to-rose-400 p-3 rounded-lg h-40 hover:bg-white shadow-xl hover:shadow-teal-500'>
        <p className='mb-2'>Carbon Dioxide</p>
        <p>Uncover the carbon footprint with our CO2 visualizer.</p>
        <div className='relative'>
        <a href='co2/'>
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 fixed absolute bottom-[-50px] right-10 duration-300">
                Know more
              </button>
        </a>
        </div>
        </div>
       <div className='bg-gradient-to-b from-violet-300 to-violet-400 p-3 rounded-lg h-40 shadow-xl hover:shadow-teal-500'>
        <p className='mb-2'>Global Temperature</p>
        <p>Explore global temperatures over time with our interactive visualizer.</p>
        <div className='relative'>
        <a href="Temprature/" >
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 fixed absolute bottom-[-50px] right-10 duration-300">
                Know more
              </button>
        </a>
        </div>
        </div>
       <div className='bg-gradient-to-b from-teal-200 to-lime-200 p-3 rounded-lg h-40 shadow-xl hover:shadow-teal-500'>
        <p className='mb-2'>Sea level</p>
        <p>Unlock the secrets of our ancient shorelines with our past sea level visualizer.</p>
        <div className='relative'>
        <a href='Sealevel/'>
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 fixed absolute bottom-[-50px] right-10 duration-300">
                Know more
              </button>
        </a>
        </div>
        </div>
       <div className='bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 p-3 rounded-lg h-40 shadow-xl hover:shadow-teal-500'>
        <p className='mb-2'>Methane</p>
        <p>Unearth the hidden methane history of our climate with our past methane visualizer.</p>
        <div className='relative'>
        <a href='Methane/'>
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 fixed absolute bottom-[-50px] right-10 duration-300">
                Know more
              </button>
        </a>
        </div>
        </div>
       <div className='bg-gradient-to-t from-red-200 via-red-300 to-yellow-200 p-3 rounded-lg h-40 shadow-xl hover:shadow-teal-500'>
        <p className='mb-2'>Upper Atmosphere</p>
        <p>Journey through Earth's upper atmosphere history with our past climate visualizer.</p>
        <div className='relative'>
        <a href='Uppera/'>
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 fixed absolute bottom-[-50px] right-10 duration-300">
                Know more
              </button>
        </a>
        </div>
        </div>
       <div className='bg-gradient-to-b from-cyan-200 to-cyan-400 p-3 rounded-lg h-40 shadow-xl hover:shadow-teal-500'>
        <p className='mb-2'>Ocean Warming</p>
        <p>Dive into the depths of ocean warming with our interactive climate visualizer</p>
        <div className='relative'>
        <a href='Oceanw/'>
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 absolute bottom-[-50px] right-10">
                Know more
              </button>
        </a>
        </div>
        </div>
        
       
    </div>
  
    
    {/* WHAT IS CLIMATE CHANGE */}
    <div>
      <p className="text-white tracking-wide font-bold text-4xl ml-10 mb-10">What is climate change?</p>
      <div className='w-full h-50 justify-center content-center justify-items-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 px-10  gap-y-10 mb-40'>
       

<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
<p className='absolute m-auto top-5 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4'>Evidence</p>
<p className='absolute m-auto top-20 bottom-0 left-0 right-0 hover:opacity-0  text-white font-bold tracking-wider text-center text-2xl mb-4 duration-100'>How Do We Know Climate Change Is Real?</p>

      <div class="w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbWF0ZSUyMGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p class="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Climate change is unequivocally real, supported by compelling evidence. Long-term temperature records reveal a steady and concerning increase in global temperatures over the past century. This warming has led to the widespread retreat of glaciers and the melting of polar ice, causing a rise in sea levels that threatens coastal communities. Ocean acidification, driven by the absorption of excess carbon dioxide, has harmed marine ecosystems. The uptick in extreme weather events, such as hurricanes and wildfires, aligns with climate change predictions. Moreover, a consensus among climate scientists, along with the accuracy of climate models in predicting these trends, underscores the undeniable reality of climate change, primarily driven by human activities.</p>
        <a href='https://climate.nasa.gov/evidence/' target="_blank" ><button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
      </div>
    </div>
<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
<p className='absolute m-auto top-5 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4'>Causes</p>
<p className='absolute m-auto top-20 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4 duration-100'>Why Is Climate Change Happening?</p>

      <div class="w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p class="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Climate change is primarily driven by the increasing concentration of greenhouse gases, such as carbon dioxide, in the Earth's atmosphere. Human activities, including the burning of fossil fuels for energy, deforestation, and industrial processes, release these gases, trapping heat and causing the planet's average temperature to rise. This phenomenon, known as global warming, leads to a wide range of environmental consequences, such as melting polar ice caps, more frequent and severe weather events, and disruptions in ecosystems. Natural factors, like volcanic eruptions and solar radiation, also play a role in climate variability, but the current trend of rapid warming is primarily attributed to human actions. Mitigating climate change requires reducing greenhouse gas emissions and transitioning to cleaner, sustainable energy sources.</p>
        <a href='https://climate.nasa.gov/causes/' target="_blank" ><button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
      </div>
    </div>
<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
<p className='absolute m-auto top-5 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4'>Effects</p>
<p className='absolute m-auto top-20 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4 duration-100'>What Are The Effects Of Climate Change?</p>

      <div class="w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1634009653379-a97409ee15de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p class="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Climate change has far-reaching impacts, including rising global temperatures that intensify extreme weather events, such as hurricanes, droughts, and heatwaves. Melting polar ice caps and glaciers contribute to rising sea levels, leading to coastal erosion and threatening coastal communities. Altered precipitation patterns can disrupt agriculture, causing food shortages and increased competition for resources. Ecosystems are under stress, with species facing extinction and habitats shifting. Furthermore, health risks increase as diseases spread in a changing climate. Climate change poses a critical global challenge, necessitating immediate action to mitigate its consequences and adapt to the changes already underway.</p>
        <a href='https://climate.nasa.gov/effects/' target="_blank" ><button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
      </div>
    </div>
<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
<p className='absolute m-auto top-5 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4'>Solutions</p>
<p className='absolute m-auto top-20 bottom-0 left-0 right-0 hover:opacity-0 text-white font-bold tracking-wider text-center text-2xl mb-4 duration-100'>What Is Being Done To Solve Climate Change?</p>

      <div class="w-full">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p class="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
Efforts to combat climate change involve a multi-pronged approach. Nations are implementing policies to reduce greenhouse gas emissions, transitioning to renewable energy sources, and enhancing energy efficiency. International agreements like the Paris Agreement set targets for emission reductions and encourage global cooperation. Technological innovations in areas like electric vehicles and carbon capture are advancing. Reforestation and sustainable land management are also prioritized to absorb carbon dioxide. Climate awareness campaigns and individual actions, such as reducing energy consumption and waste, are contributing to the broader fight against climate change. Collaborative, global actions are crucial to addressing this urgent issue.</p>
        <a href='https://climate.nasa.gov/solutions' target="_blank" ><button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
      </div>
    </div>    
      </div>
    </div>

      <div className='h-100 flex'>
       <p className="text-white tracking-wide font-bold text-4xl ml-10 mb-10">News 📢</p>
       <p className='ml-5 pt-2'>Check Out The Latest News By Clicking:  </p>
       <a href='https://climate.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2C+created_at+desc&search=&category=19%2C98' target='_blank'>
       <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-300 ml-5">
                HERE
              </button>
        </a>
     
       {/* <section className='flex flex-nowrap overflow-x-auto gap-5 snap-x snap-mandatory text-black px-10 snap-x scroll-smooth'>

        <div className='bg-white rounded flex-none w-[350px] p-5 snap-center snap-always'>
        
        </div>
        <div className='bg-white rounded flex-none w-[350px] p-5 snap-center snap-always'>
        <p>CONTENT</p>
        </div>
        <div className='bg-white rounded flex-none w-[350px] p-5 snap-center snap-always'>
        <p>CONTENT</p>
        </div>
        <div className='bg-white rounded flex-none w-[350px] p-5 snap-center snap-always'>
        <p>CONTENT</p>
        </div>
        <div className='bg-white rounded flex-none w-[350px] p-5 snap-center snap-always'>
        <p>CONTENT</p>
        </div>
        <div className='bg-white rounded flex-none w-[350px] p-5 snap-center snap-always'>
        <p>CONTENT</p>
        </div>
        <div className='rounded flex-none w-[350px] p-5 snap-center snap-always'>
        
        <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 bottom-[-50px] right-10 duration-300">
                Know more
              </button>

        </div>



      </section>  */}

    </div> 
    
    
    
    </div>
    </>
  )
}
