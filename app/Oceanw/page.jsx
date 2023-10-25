import React from 'react'
import Graph from './oceanwgraph'
export default function page() {
  return (
    <>
      <div
        className="bg-fixed bg-cover bg-center w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://www.techexplorist.com/wp-content/uploads/2020/08/Arctic-sea-ice.jpg")',
        }}
      >

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center font-serif text-purple-200">
         Ocean Warming
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-white text-xl text-center w-full text-purple-300 font-sans:[Helevicta]">
          <p className="  p-4 rounded-md ">
          Averaged over Earth's surface, the 1993–2022 heat-gain rates were 0.38 (±0.05) to 0.44 (±0.10) Watts per square meter for depths from 0–700 meters (down to 0.4 miles), depending on which research group's analysis you consult. Meanwhile, heat gain rates were 0.17 (±0.03) to 0.32 (±0.04) Watts per square meter for depths of 700–2,000 meters (0.4–1.2 miles). For depths between 2000–6000 meters (1.2–3.7 miles), the estimated increase was 0.07 (±0.03) Watts per square meter for the period from September
            
          </p>
        </div>
      </div>

        <div className='mt-20'>
      <strong class="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-100 pl-4 mx-0.5 mt-5">Ocean Warming</strong>
      <h2 class ="text-lg font-bold text-purple-500 pl-4">LATEST MEASUREMENT: December 2022</h2>
      <strong class="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-100 pl-4 mx-0.5">345 (± 2) zettajoules </strong>
      <br>
      </br>
      <br>
      </br>

      <Graph/>    
    </div>
    <div>
      <br> 
        </br>
        <br>
        </br>

    <strong class="text-purple-600 pl-3 pt-4 mt-5">Source: NASA, ISRO, Mauna Loa, NOAA ~ </strong>
    
      <p class="font-sans text-purple-200 subpixel- antialiased text-justify pl-5 pr-5 mx-4 mt-3">Ninety percent of global warming is occurring in the ocean, causing the water’s internal heat to increase since modern recordkeeping began in 1955, as shown in the upper chart. (The shaded blue region indicates the 95% margin of uncertainty.) This chart shows annual estimates for the first 2,000 meters of ocean depth.
Each data point in the upper chart represents a five-year average. For example, the 2020 value represents the average change in ocean heat content (since 1955) for the years 2018 up to and including 2022.
The lower chart tracks monthly changes inocean heat content for the entire water column (from the top to the bottom of the ocean) from 1992 to 2019, integrating observations from satellites, in-water instruments, and computer models. Both charts are expressed in zettajoules.
Heat stored in the ocean causes its water to expand, which is responsible for one-third to one-half of global sea level rise. Most of the added energy is stored at the surface, at a depth of zero to 700 meters. The last 10 years were the ocean’s warmest decade since at least the 1800s. The year 2022 was the ocean’s warmest recorded year and saw the highest global sea level.</p>

    </div>
    <div>
      <br>
      </br>
      <br>
      </br>
      <h3 class="text-lg font-bold text-purple-600 pl-4">Get Data:-</h3>
    <p class="text-base text-purple-300 pl-7">IAP:

     <a href="https://science.sciencemag.org/content/363/6423/128" class=" hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150">  📖 Read the article online |</a>
    <a href="http://www.ocean.iap.ac.cn/ftp/images_files/IAP_OHC_estimate_update.txt"  class=" hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150"> 📥 Download as raw data |</a>
    <a href="https://climate.metoffice.cloud/formatted_data/ohc_IAP.csv" class=" hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150"> 📊 Download as CSV  |</a>
    </p>
    <p class="text-base text-purple-300 pl-7">JMA:
    <a href="https://www.jstage.jst.go.jp/article/sola/13/0/13_2017-030/_article"  class=" hover:underline hover:text-purple-500 text-purple-100 visited:text-purple-400 transition ease-in-out delay-150"> 📖 Read the article online |</a>
    <a href="https://www.data.jma.go.jp/gmd/kaiyou/data/english/ohc/ohc_global_1955.txt"  class="hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150"> 📥  Download as raw data |</a>
    <a href="https://climate.metoffice.cloud/formatted_data/ohc_JMA.csv"  class=" hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150">  📊 Download as CSV | </a>
    </p>
    <p class="text-base text-purple-300 pl-7 mb-5">EN.4.2.2.l09:
    <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JC009067"  class=" hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150"> 📖 Read the article online |</a>
    <a href="https://climate.metoffice.cloud/formatted_data/ohc_EN.4.2.2.l09.csv"  class=" hover:underline hover:text-purple-500 text-purple-200 visited:text-purple-400 transition ease-in-out delay-150"> 📥  Download as raw data |</a>
    </p>
  </div>
  
    </>
  )
}