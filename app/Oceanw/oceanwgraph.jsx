"use client"
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = [
  {
    "Year": 1958,
    "C": 0.41
  },
  {
    "Year": 1959,
    "C": 0.35
  },
  {
    "Year": 1960,
    "C": 0.33
  },
  {
    "Year": 1961,
    "C": 0.35
  },
  {
    "Year": 1962,
    "C": 0.34
  },
  {
    "Year": 1963,
    "C": 0.34
  },
  {
    "Year": 1964,
    "C": 0.14
  },
  {
    "Year": 1965,
    "C": 0.22
  },
  {
    "Year": 1966,
    "C": 0.25
  },
  {
    "Year": 1967,
    "C": 0.25
  },
  {
    "Year": 1968,
    "C": 0.22
  },
  {
    "Year": 1969,
    "C": 0.37
  },
  {
    "Year": 1970,
    "C": 0.32
  },
  {
    "Year": 1971,
    "C": 0.2
  },
  {
    "Year": 1972,
    "C": 0.31
  },
  {
    "Year": 1973,
    "C": 0.41
  },
  {
    "Year": 1974,
    "C": 0.14
  },
  {
    "Year": 1975,
    "C": 0.2
  },
  {
    "Year": 1976,
    "C": 0.09
  },
  {
    "Year": 1977,
    "C": 0.37
  },
  {
    "Year": 1978,
    "C": 0.31
  },
  {
    "Year": 1979,
    "C": 0.42
  },
  {
    "Year": 1980,
    "C": 0.55
  },
  {
    "Year": 1981,
    "C": 0.59
  },
  {
    "Year": 1982,
    "C": 0.4
  },
  {
    "Year": 1983,
    "C": 0.58
  },
  {
    "Year": 1984,
    "C": 0.4
  },
  {
    "Year": 1985,
    "C": 0.37
  },
  {
    "Year": 1986,
    "C": 0.46
  },
  {
    "Year": 1987,
    "C": 0.6
  },
  {
    "Year": 1988,
    "C": 0.63
  },
  {
    "Year": 1989,
    "C": 0.52
  },
  {
    "Year": 1990,
    "C": 0.71
  },
  {
    "Year": 1991,
    "C": 0.66
  },
  {
    "Year": 1992,
    "C": 0.47
  },
  {
    "Year": 1993,
    "C": 0.51
  },
  {
    "Year": 1994,
    "C": 0.58
  },
  {
    "Year": 1995,
    "C": 0.75
  },
  {
    "Year": 1996,
    "C": 0.62
  },
  {
    "Year": 1997,
    "C": 0.73
  },
  {
    "Year": 1998,
    "C": 0.93
  },
  {
    "Year": 1999,
    "C": 0.68
  },
  {
    "Year": 2000,
    "C": 0.68
  },
  {
    "Year": 2001,
    "C": 0.81
  },
  {
    "Year": 2002,
    "C": 0.92
  },
  {
    "Year": 2003,
    "C": 0.87
  },
  {
    "Year": 2004,
    "C": 0.78
  },
  {
    "Year": 2005,
    "C": 0.96
  },
  {
    "Year": 2006,
    "C": 0.91
  },
  {
    "Year": 2007,
    "C": 0.91
  },
  {
    "Year": 2008,
    "C": 0.76
  },
  {
    "Year": 2009,
    "C": 0.9
  },
  {
    "Year": 2010,
    "C": 0.98
  },
  {
    "Year": 2011,
    "C": 0.86
  },
  {
    "Year": 2012,
    "C": 0.91
  },
  {
    "Year": 2013,
    "C": 0.94
  },
  {
    "Year": 2014,
    "C": 0.98
  },
  {
    "Year": 2015,
    "C": 1.12
  },
  {
    "Year": 2016,
    "C": 1.3
  },
  {
    "Year": 2017,
    "C": 1.17
  },
  {
    "Year": 2018,
    "C": 1.08
  },
  {
    "Year": 2019,
    "C": 1.24
  },
  {
    "Year": 2020,
    "C": 1.23
  },
  {
    "Year": 2021,
    "C": 1.08
  },
  {
    "Year": 2022,
    "C": 1.13
  },
  {
    "Year": 2023,
    "C": 1.22
  }
]
  

const VulnChart = () => {
  const labels = data.map((entry) => `${entry.Year}`);
  const datasetValues = data.map((entry) => entry.C);

  return (
    <div >
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Ocean Warming",
              data: datasetValues,
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "violet",
              borderWidth: 1.5,
              fill: false,
            },
          ]
        }}
        height={500}
        width={300}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top', 
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year',
                color: 'white'
            
              },
            },
            y: {
              title: {
                display: true,
                text: 'C°',
                color: 'white' 
              },
            },
          },
        }}
      />
    </div>
  );
};

export default VulnChart;