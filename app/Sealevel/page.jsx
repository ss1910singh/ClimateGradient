import React from 'react'
import Graph from './sealevelgraph'
export default function page() {
  return (
    <>
  <div className='bg-black'>
          <div className='mt-20 bg-black'>
          <div
        className="bg-fixed bg-cover bg-center w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("/SL.avif")',
        }}
      >

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center font-serif text-blue-300">
         Sea Level
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-xl text-center w-full text-blue-200 font-sans:[Helevicta]">
          <div className="  p-4 rounded-md ">
          Global mean sea level has risen about 8–9 inches (21–24 centimeters) since 1880. The rising water level is mostly due to a combination of melt water from glaciers and ice sheets and thermal expansion of seawater as it warms. In 2023, global mean sea level was 101.2 millimeters (4 inches) above 1993 levels, making it the highest annual average in the satellite record (1993-present).

          </div>
        </div>
      </div>

      <div className='pt-10'>
        <div className='mb-5'><strong className='text-blue-500'>Sea Level</strong>
      <h2 className=' text-white font-bold text-blue-200'>LATEST MEASUREMENT: April 2023</h2>
      <h3 className=' text-white font-bold text-blue-200'>98 (± 4.0) mm</h3>
</div>
      <Graph/>    
    </div>
    <div>
    <strong className='text-blue-500'>Source:  NASA,ISRO,Mauna Loa,NOAA :</strong>
    <br>
    </br>
    <br>
    </br>
      <div className='para - font-sans text-blue-100 subpixel- antialiased text- justify pl-5 pr-5 mx-4' text-white font-bold text-yellow-200>Sea level rise is caused primarily by two factors related to global warming: the added water from melting ice sheets and glaciers, and the expansion of seawater as it warms. The first graph tracks the change in global sea level since 1993, as observed by satellites.
The second graph, which is from coastal tide gauge and satellite data, shows how much sea level changed from about 1900 to 2018. Items with pluses (+) are factors that cause global sea level to increase, while minuses (-) are what cause sea level to decrease. These items are displayed at the time they were affecting sea level.
The data shown are the latest available, with a four- to five-month delay needed for processing.
</div>

    </div>
    <div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    <h3 className='text-lg font-bold text-blue-500'>Get Data :-</h3>
    <br>
    </br>
                <div class="text-lg font-bold text-blue-100">MCSIRO:
               <a href="https://www.nature.com/articles/nclimate2635"  class="hover:underline hover:text-blue-300"> 📖 Read the article online 
 |</a>
                <a href="https://climate.metoffice.cloud/formatted_data/sea_level_CSIRO.csv"  class="hover:underline hover:text-blue-300"> 📊  Download as CSV 
</a>
                </div>  
                <div  class="text-lg font-bold text-blue-100">AVISO:
                <a href="https://www.earth-syst-sci-data.net/10/281/2018/"class="hover:underline hover:text-blue-300"> 📖 Read the article online 
|</a>
                <a href="https://climate.metoffice.cloud/formatted_data/sea_level_AVISO.csv" class="hover:underline hover:text-blue-300">  📊 Download as CSV 
 |</a></div>
                <div  class="text-lg font-bold text-blue-100">Colorado:
                <a href="https://www.pnas.org/content/115/9/2022" class="hover:underline hover:text-blue-300"> 📖 Read the article online |</a>
                <a href="https://sealevel.colorado.edu/files/2023_rel1/gmsl_2023rel1_seasons_rmvd.txt"  class="hover:underline hover:text-blue-300">  📥 Download as raw data  |</a>
                <a href="https://climate.metoffice.cloud/formatted_data/sea_level_Colorado.csv" class="hover:underline hover:text-blue-300"> 📊  Download as CSV 
</a>
                </div>
                <div  class="text-lg font-bold text-blue-100">NASA:
                <a href="https://www.tandfonline.com/doi/abs/10.1080/01490419.2010.491029"class="hover:underline hover:text-blue-300"> 📖 Read the article online 
 |</a>
                <a href="https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-protected/MERGED_TP_J1_OSTM_OST_GMSL_ASCII_V51/GMSL_TPJAOS_5.1_199209_202305.txt"class="hover:underline hover:text-blue-300"> 📥  Download as raw data  |</a>
                <a href="https://climate.metoffice.cloud/formatted_data/sea_level_NASA.csv"class="hover:underline hover:text-blue-300"> 📊  Download as CSV </a>
                </div>
</div>
</div>
</div>
</>
  )
}