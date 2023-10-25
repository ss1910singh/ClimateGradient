import React from 'react'
import Graph from './co2graph'
export default function page() {
  return (
    <>
    <div className='bg-black pt-20'>
    <div
        className="bg-fixed bg-cover bg-center w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://reneweconomy.com.au/wp-content/uploads/2020/10/greenhouse-gas-emissions-optimised-1280x720.jpg")',
        }}
      >

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center font-serif text-yellow-200">
         Carbon Dioxide
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-xl text-center w-full text-yellow-200 font-sans:[Helevicta]">
          <div className="  p-4 rounded-md ">
          Each year, human activities release more carbon dioxide into the atmosphere than natural processes can remove, causing the amount of carbon dioxide in the atmosphere to increase.
          The global average carbon dioxide set a new record high in 2022: 417.06 parts per million.
          Atmospheric carbon dioxide is now 50 percent higher than it was before the Industrial Revolution.
          The annual rate of increase in atmospheric carbon dioxide over the past 60 years is about 100 times faster than previous natural increases, such as those that occurred at the end of the last ice age 11,000-17,000 years ago.  
          The ocean has absorbed enough carbon dioxide to lower its pH by 0.1 units, a 30% increase in acidity. 
            
          </div>
        </div>
      </div>
    <div className='mt-100'>
      <div>      <strong className='text-yellow-500 mb-10'>Carbon Dioxide</strong>

      <h2 className=' text-white font-bold text-yellow-200'>LATEST MEASUREMENT: August 2023</h2>
      <h3 className=' text-white font-bold text-yellow-100'>420 ppm</h3>
</div>
      <Graph/> 
      <br>
      </br>

    </div>
    <div class= "md:block hidden">
    </div>
    <div className='text-white bg-black'>
    <strong class="text-yellow-300">Source:  NASA, ISRO, Mauna Loa, NOAA : </strong>

    <br>
    </br>
    <br>
    </br>

      <div class="para - font-sans text-yellow-100 subpixel- antialiased text- justify pl-5 pr-5 mx-4">Carbon dioxide (CO2) is an important heat-trapping gas, also known as a greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and natural processes like volcanic eruptions. The first graph shows atmospheric CO2 levels measured by NOAA at Mauna Loa Observatory, Hawaii, since 1958. The second graph shows CO2 levels during Earth’s last three glacial cycles, as captured by air bubbles trapped in ice sheets and glaciers.
Since the onset of industrial times in the 18th century, human activities have raised atmospheric CO2 by 50% – meaning the amount of CO2 is now 150% of its value in 1750. This human-induced rise is greater than the natural increase observed at the end of the last ice age 20,000 years ago.
The animated map shows how the historical changes in global carbon dioxide over time. Note the colors change as the amount of CO2 rises from 365 parts per million (ppm) in 2002 to over 420 ppm currently. It's important to understand that “parts per million” refers to the number of carbon dioxide molecules per million molecules of dry air. These measurements are from the mid-troposphere, the layer of Earth's atmosphere that is 8 to 12 kilometers (about 5 to 7 miles) above the ground. This data provides insights into the significant rise in atmospheric CO2 concentrations, highlighting the impact of human activities on Earth's climate.</div>
<br>
</br>
    </div>
    <div className='text-white' >
            <h3 class="text-lg font-bold text-yellow-300">Get data:-</h3>
            <br>
            </br>
            <div class="text-lg font-bold text-yellow-100">Mauna Loa CO2:</div>
           <div> <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.2153-3490.1976.tb00701.x" class="hover:underline hover:text-yellow-500 ">📖 Read the article online 
 |</a>
            <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt" class="hover:underline hover:text-yellow-500">  📥 Download as raw data  |</a>
            <a href="https://climate.metoffice.cloud/formatted_data/co2_Mauna%20Loa%20CO2.csv" class="hover:underline hover:text-yellow-500">  📊 Download as CSV 
</a>
            </div>
            <div class="text-lg font-bold text-yellow-100">NOAA CO2:</div>
         <div>   <a href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/95JD00859"class="hover:underline hover:text-yellow-500"> 📖 Read the article online 
|</a>
            <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_gl.txt"class="hover:underline hover:text-yellow-500">  📥 Download as raw data  |</a>
            <a href="https://climate.metoffice.cloud/formatted_data/co2_NOAA%20CO2.csv"class="hover:underline hover:text-yellow-500"> 📊  Download as CSV  
|</a>
            <a href="https://gml.noaa.gov/ccgg/trends/global.html?doi=10.15138/9n0h-zh07"class="hover:underline hover:text-yellow-500">  🌐 View the dataset online </a>
            </div>
            <div class="text-lg font-bold text-yellow-100">WDCGG CO2:</div>
         <div>   <a href="https://library.wmo.int/records/item/58693-no-16-23-november-2020"class="hover:underline hover:text-yellow-500"> 📖 Read the article online 
|</a>
            <a href="https://gaw.kishou.go.jp/static/publications/global_mean_mole_fractions/2022/co2_monthly_20221026.csv"class="hover:underline hover:text-yellow-500"> 📥  Download as raw data |</a>
            <a href="https://climate.metoffice.cloud/formatted_data/co2_WDCGG%20CO2.csv"class="hover:underline hover:text-yellow-500"> 📊  Download as CSV 
</a>
            </div>
            <div class="text-lg font-bold text-yellow-100">NASA CO2:</div>
         <div>   <a href="https://climate.nasa.gov/vital-signs/carbon-dioxide/"class="hover:underline hover:text-yellow-500"> 📖 Read the article online  
|</a>
            <a href="https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt"class="hover:underline hover:text-yellow-500">  📥 Download as raw data |</a>
            </div>
    </div>
    </div>
    
</>
  )
}