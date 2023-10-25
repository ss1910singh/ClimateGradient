import React from 'react'
import Graph from './temperaturegraph'
export default function page() {
  return (
    <>
    <div className="bg-black">
    <div
        className="bg-fixed bg-cover bg-center w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://sphera.com/wp-content/uploads/2022/08/gettyimages-586087414-2048x2048-smaller-scaled.jpg")',
        }}
      >

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center font-serif text-red-300">
         Global Temperature
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-xl text-center w-full text-pink-200 font-sans:[Helevicta]">
          <div className="  p-4 rounded-md ">
          The year 2022 was the sixth warmest year since global records began in 1880 at 0.86°C (1.55°F) above the 20th century average of 13.9°C (57.0°F). This value is 0.13°C (0.23°F) less than the record set in 2016 and it is only 0.02°C (0.04°F) higher than the last year's (2021) value, which now ranks as the seventh highest. The 10 warmest years in the 143-year record have all occurred since 2010, with the last nine years (2014–2022) ranking as the nine warmest years on record.
          </div>
        </div>
      </div>
      <div className='mt-20'></div>
      <div>     <strong className='text-pink-200'>Global Temperature</strong>
      <h2 className=' text-white font-bold text-pink-200'>LATEST ANNUAL AVERAGE ANOMALY: 2022 </h2>
      <h3 className=' text-white font-bold text-pink-200'>0.89 °C | 1.6 °F</h3>
</div>
      <Graph/> 
      <div class="md:block hidden">
        </div>   
        <div className='text-white'></div>
    <div className='bg-black'>
    <strong className="text-pink-300">Source:NASA,ISRO,Mauna Loa,NOAA : </strong>
    <br>
    </br>
    <br>
    </br>
      <div className='para - font-sans text-pink-100 subpixel- antialiased text- justify pl-5 pr-5 mx-4'>This graph shows the change in global surface temperature compared to the long-term average from 1951 to 1980. The year 2020 statistically tied with 2016 for the hottest year on record since recordkeeping began in 1880 (source: NASA/GISS). NASA’s analyses generally match independent analyses prepared by National Oceanic and Atmospheric Administration (NOAA) and other institutions.
The animation on the right shows the change in global surface temperatures. Dark blue shows areas cooler than average. Dark red shows areas warmer than average. Short-term variations are smoothed out using a 5-year running average to make trends more visible in this map.
The data shown are the latest available, updated annually.</div>

    </div>
    <div>
      <br>
      </br>
    <h5 class="text-lg font-bold text-pink-300">Get Data :-</h5>
    <br>
    </br>
    <div className='text-lg text-red-200 font-bold'>GISTEMP :
                 <div> <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018JD029522"class="hover:underline hover:text-red-500 ">  📖 Read the article online 
 |</a>
                  <a href="https://gml.noaa.gov/webdata/ccgg/trends/ch4/ch4_annmean_gl.txt"class="hover:underline hover:text-red-500 "> 📥  Download as raw data  |</a>
                  <a href="https://climate.metoffice.cloud/formatted_data/gmt_GISTEMP.csv"class="hover:underline hover:text-red-500 ">  📊 Download as CSV 
 |</a>
                  </div>
                  </div>
                  <div className='text-lg text-red-200 font-bold'>JRA-55 :
                <div> <a href="https://www.jstage.jst.go.jp/article/jmsj/93/1/93_2015-001/_article"class="hover:underline hover:text-red-500 "> 📖 Read the article online 
 |</a>
                  <a href="https://climate.metoffice.cloud/formatted_data/gmt_JRA-55.csv"class="hover:underline hover:text-red-500 "> 📊  Download as CSV 
  </a>
                  </div>
                  </div>
                  <div className='text-lg text-red-200 font-bold'>NASA :
                 <div><a href="https://climate.nasa.gov/vital-signs/global-temperature/"class="hover:underline hover:text-red-500 ">  📖 Read the article online 
|</a>
                  <a href="https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt"class="hover:underline hover:text-red-500 ">  📥 Download as raw data  |</a>
                  </div>
                  </div>
                  </div>
                  </div>

  </>
  )
}