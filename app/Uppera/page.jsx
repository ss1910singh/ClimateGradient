import React from 'react'
import Graph1 from './tro'
import Graph2 from './str'
export default function page() {
  return (
    <>
      <div
        className="bg-fixed bg-cover bg-center w-full h-screen relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-photo/blue-wave-crashes-african-coastline-sunset-generated-by-ai_188544-25305.jpg")',
        }}
      >

    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center font-serif text-orange-200">
         Upper Atmosphere
        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-white text-xl text-center w-full text-orange-300 font-sans:[Helevicta]">
          <p className="  p-4 rounded-md ">
          The upper atmosphere, or thermosphere, lies roughly 50 miles (80 kilometers) above Earth's surface. It is characterized by extremely low air density and scorching temperatures, sometimes exceeding thousands of degrees Celsius, driven by intense solar radiation absorption. This region is vital for phenomena like auroras and significantly influences the behavior of satellites and spacecraft. Moreover, it serves as a protective barrier, absorbing harmful solar and cosmic radiation, essential for maintaining life on Earth.
            
          </p>
        </div>
      </div>

   <div className='mt-20'>
    <strong class="text-lg font-bold hover:underline bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-50 pl-4 mx-25 hover:underline">Temperature in the upper atmosphere</strong>
      <h2 class="text-lg font-bold text-orange-400 pl-5">LATEST ANNUAL AVERAGE ANOMALY: 2022</h2>
      <br>
      </br>
    

     <strong class="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-50 pl-10 mx-25">Tropospheric Temperature-</strong>
     <br>
     </br>
     <br>
     </br>
      <Graph1/> 
      <br>
      </br>
      <strong class="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-orange-500 pl-10 mx-25">Stratospheric Temperature- </strong>
      <br>
      </br>
      <br>
      </br>
    
      <Graph2/> 
     

      <br>
      </br>
      <br>
      </br>
      <strong class="text-orange-500 pl-3 pt-4" >Source: NASA, ISRO, Mauna Loa, NOAA ~ </strong>
      <p class="font-sans text-orange-100 subpixel- antialiased text- justify pl-5 pr-5 mx-4 mt-3">Version 6 of the UAH MSU/AMSU global satellite temperature dataset represents an extensive revision of the procedures employed in previous versions of the UAH datasets. The two most significant results from an end-user perspective are (1) a decrease in the global-average lower tropospheric temperature (LT) trend from +0.14°C decade−1 to +0.11°C decade−1 (Jan. 1979 through Dec. 2015); and (2) the geographic distribution of the LT trends, including higher spatial resolution, owing to a new method for computing LT. We describe the major changes in processing strategy, including a new method for monthly gridpoint averaging which uses all of the footprint data yet eliminates the need for limb correction; a new multi-channel (rather than multi-angle) method for computing the lower tropospheric (LT) temperature product which requires an additional tropopause (TP) channel to be used; and a new empirical method for diurnal drift correction. We show results for LT, the midtroposphere (MT, from MSU2/AMSU5), and lower stratosphere (LS, from MSU4/AMSU9). A 0.03°C decade−1 reduction in the global LT trend from the Version 5.6 product is partly due to lesser sensitivity of the new LT to land surface skin temperature (est. 0.01°C decade−1), with the remainder of the reduction (0.02°C decade−1) due to the new diurnal drift adjustment, the more robust method of LT calculation, and other changes in processing procedures.</p>
      <div/>
    </div>
    <br>
    </br>
    <br>
    </br>

    
        <h3 class="text-lg font-bold text-orange-400 pl-3">Get Data:-</h3>
      <h5 class="font-sans pl-7 text-orange-300">Tropospheric Temperature</h5>
      <p class="font-sans pl-7 text-orange-200">UAH:
                    <a href="https://link.springer.com/article/10.1007/s13143-017-0010-y" class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📖 Read the article online |</a>
                    <a href="https://www.nsstc.uah.edu/data/msu/v6.0/tlt/uahncdc_lt_6.0.txt"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150">  📥  Download as raw data |</a>
                    <a href="https://climate.metoffice.cloud/formatted_data/trop_UAH.csv"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150">  📊 Download as CSV  |</a>
                    </p>
                    <p class="font-sans pl-7 text-orange-200">RSS: 
                    <a href="https://journals.ametsoc.org/doi/full/10.1175/JCLI-D-16-0768.1" class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📖 Read the article online |</a>
                    <a href="https://www.nsstc.uah.edu/data/msu/v6.0/tls/uahncdc_ls_6.0.txt"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📥 Download as raw data |</a>
                    <a href="https://climate.metoffice.cloud/formatted_data/trop_RSS.csv"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📊  Download as CSV |</a>
                    </p>
                   <br>
                   </br>
                    <h5 class="font-sans pl-7 text-orange-300" >Stratospheric Temperature</h5>
                    <p class="font-sans pl-7 text-orange-200">UAH:
                    <a href="https://link.springer.com/article/10.1007/s13143-017-0010-y"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📖 Read the article online |</a>
                    <a href="https://www.nsstc.uah.edu/data/msu/v6.0/tls/uahncdc_ls_6.0.txt"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150">  📥  Download as raw data |</a>
                    <a href="https://climate.metoffice.cloud/formatted_data/strat_UAH.csv"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150">  📊 Download as CSV  |</a>
                    </p>
                    <p class="font-sans pl-7 text-orange-200">RSS: 
                    <a href="https://journals.ametsoc.org/doi/full/10.1175/2008JTECHA1176.1"  class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📖  Read the article online |</a>
                    <a href="http://data.remss.com/msu/monthly_time_series/RSS_Monthly_MSU_AMSU_Channel_TLS_Anomalies_Land_and_Ocean_v04_0.txt" class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150">  📥  Download as raw data |</a>
                    <a href="https://climate.metoffice.cloud/formatted_data/strat_RSS.csv" class="hover:underline hover:text-orange-500 text-orange-100 visited:text-orange-350 transition ease-in-out delay-150"> 📊 Download as CSV |</a>
                    </p>
                    <br>
                    </br>
    
    </>
    
  )
}