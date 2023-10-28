import React from 'react'
import Graph from './ch4graph'
export default function page() {
  return (
    <>
        
      <div
        className="bg-fixed bg-cover bg-center w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("/M1.jpg")',
        }}
      >

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center font-serif text-green-200">
         Methane
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-xl text-center w-full text-green-300 font-sans:[Helevicta]">
          <p className="  p-4 rounded-md ">
          Methane is a potent greenhouse gas with a global warming potential much greater than carbon dioxide over a short timeframe. It is emitted from various sources, including natural processes like wetlands and human activities such as livestock farming, oil and gas production, and landfills. Methane contributes to climate change by trapping heat in the atmosphere, leading to temperature rise and impacts like sea-level rise and extreme weather events.
          
          </p>
        </div>
      </div>

    <div  >
    <div className='mt-20'>
      <strong class="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-50 pl-4 mx-0.5">Methane</strong>
      <br>
      </br>      
      <h3 class="text-lg font-bold bg-clip-text  text-transparent bg-gradient-to-r from-green-500 to-green-100 pl-4">LATEST MEASUREMENT: 2022</h3>
      
      <strong class="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-100 pl-4">1912 (± 0.6) ppb</strong>
     

      <Graph/>
      
      </div>  
    </div>
    <div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    <strong class="text-green-600 pl-3 pt-4" >Source: NASA, ISRO, Mauna Loa, NOAA ~ </strong>

    <br>
    </br>
          <div className="font-sans text-green-100 subpixel- antialiased text- justify pl-5 pr-5 mx-4 mt-3">CMethane (CH4) is a powerful greenhouse gas, and is the second-largest contributor to climate warming after carbon dioxide (CO2). A molecule of methane traps more heat than a molecule of CO2, but methane has a relatively short lifespan of 7 to 12 years in the atmosphere, while CO2 can persist for hundreds of years or more.
Methane comes from both natural sources and human activities. An estimated 60% of today’s methane emissions are the result of human activities. The largest sources of methane are agriculture, fossil fuels, and decomposition of landfill waste. Natural processes account for 40% of methane emissions, with wetlands being the largest natural source. (Learn more about the Global Methane Budget.)
The concentration of methane in the atmosphere has more than doubled over the past 200 years. Scientists estimate that this increase is responsible for 20 to 30% of climate warming since the Industrial Revolution (which began in 1750).
<br> 
</br>
<strong>Tracking Methane</strong>

<p>Although it’s relatively simple to measure the amount of methane in the atmosphere, it’s harder to pinpoint where it’s coming from. NASA scientists are using several methods to track methane emissions.
One tool that NASA uses is the Airborne Visible InfraRed Imaging Spectrometer - Next Generation, or AVIRIS-NG. This instrument, which gets mounted onto research planes, measures light that is reflected off Earth’s surface. Methane absorbs some of this reflected light. By measuring the exact wavelengths of light that are absorbed, the AVIRIS-NG instrument can determine the amount of greenhouse gases present.
NASA added the Earth Surface Mineral Dust Source Investigation (EMIT) instrument to the International Space Station in 2022. Though built principally to study dust storms and sources, researchers found that it could also detect large methane sources, known as “super-emitters.”
These aircraft and satellite instruments are finding methane rising from oil and gas production, pipelines, refineries, landfills, and animal agriculture. In some cases, these measurements have led to leaks being fixed, including suburban gas leaks and faulty equipment in oil and gas fields.
The Arctic is a source of natural methane from wetlands, lakes, and thawing permafrost. Although a warming climate could change these emissions, scientists do not yet think it will drive a major increase. To this end, NASA’s Arctic Boreal and Vulnerability Experiment, or ABoVE, has been measuring methane coming from natural sources like thawing permafrost in Alaska and Canada.</p>

</div>

    </div>
    <div>
      
      <br>  
      </br>
    <h3 class="text-lg font-bold text-green-600 pl-3">Get Data:-</h3>
                 <p class="font-sans pl-5 text-green-200">NOAA CH4:
                   
                 <a href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/94JD01245" class=" hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📖 Read the article online |</a>
                 <a href="https://gml.noaa.gov/webdata/ccgg/trends/ch4/ch4_annmean_gl.txt" class="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📥  Download as raw data |</a>
                 <a href="https://climate.metoffice.cloud/formatted_data/ch4_NOAA%20CH4.csv" class="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📊  Download as CSV  |</a>
                 {/* <a href="https://doi.org/https://doi.org/10.15138/P8XG-AA107">   View the dataset online</a> */}
                   
                 </p>
                 
                 <p class="font-sans pl-5 text-green-200">WDCGG CH4:
                   
                 <a href="https://library.wmo.int/index.php?lvl=notice_display&id=21795"  class="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📖 Read the article online |</a>
                 <a href="https://gaw.kishou.go.jp/static/publications/global_mean_mole_fractions/2022/ch4_monthly_20221026.csv "class="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📥  Download as raw data |</a>
                 <a href="https://climate.metoffice.cloud/formatted_data/ch4_WDCGG%20CH4.csv "class ="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📊 Download as CSV |</a>
                  
                 </p>
                 <p class="font-sans pl-5 text-green-200">NASA CH4:
                  
                 <a href="https://climate.nasa.gov/vital-signs/methane/"  class="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📖 Read the article online |</a>
                 <a href="https://gml.noaa.gov/webdata/ccgg/trends/ch4/ch4_annmean_gl.txt "class="hover:underline hover:text-green-700 text-green-100 visited:text-green-400 transition ease-in-out delay-150"> 📥 Download as raw data |</a>
                 </p>
                 <br>
                 </br>
                 
 </div>


 </>
  )
}