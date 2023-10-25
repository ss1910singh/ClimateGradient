"use client"
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = [
  {
    "Year": 1880,
    "C": 0.1
  },
  {
    "Year": 1881,
    "C": 0.18
  },
  {
    "Year": 1882,
    "C": 0.16
  },
  {
    "Year": 1883,
    "C": 0.09
  },
  {
    "Year": 1884,
    "C": -0.02
  },
  {
    "Year": 1885,
    "C": -0.07
  },
  {
    "Year": 1886,
    "C": -0.05
  },
  {
    "Year": 1887,
    "C": -0.1
  },
  {
    "Year": 1888,
    "C": 0.09
  },
  {
    "Year": 1889,
    "C": 0.16
  },
  {
    "Year": 1890,
    "C": -0.09
  },
  {
    "Year": 1891,
    "C": 0.04
  },
  {
    "Year": 1892,
    "C": -0.01
  },
  {
    "Year": 1893,
    "C": -0.05
  },
  {
    "Year": 1894,
    "C": -0.05
  },
  {
    "Year": 1895,
    "C": 0.03
  },
  {
    "Year": 1896,
    "C": 0.16
  },
  {
    "Year": 1897,
    "C": 0.16
  },
  {
    "Year": 1898,
    "C": 0
  },
  {
    "Year": 1899,
    "C": 0.09
  },
  {
    "Year": 1900,
    "C": 0.19
  },
  {
    "Year": 1901,
    "C": 0.12
  },
  {
    "Year": 1902,
    "C": -0.01
  },
  {
    "Year": 1903,
    "C": -0.1
  },
  {
    "Year": 1904,
    "C": -0.2
  },
  {
    "Year": 1905,
    "C": 0.01
  },
  {
    "Year": 1906,
    "C": 0.05
  },
  {
    "Year": 1907,
    "C": -0.11
  },
  {
    "Year": 1908,
    "C": -0.16
  },
  {
    "Year": 1909,
    "C": -0.22
  },
  {
    "Year": 1910,
    "C": -0.17
  },
  {
    "Year": 1911,
    "C": -0.17
  },
  {
    "Year": 1912,
    "C": -0.09
  },
  {
    "Year": 1913,
    "C": -0.07
  },
  {
    "Year": 1914,
    "C": 0.12
  },
  {
    "Year": 1915,
    "C": 0.13
  },
  {
    "Year": 1916,
    "C": -0.09
  },
  {
    "Year": 1917,
    "C": -0.19
  },
  {
    "Year": 1918,
    "C": -0.03
  },
  {
    "Year": 1919,
    "C": -0.01
  },
  {
    "Year": 1920,
    "C": 0
  },
  {
    "Year": 1921,
    "C": 0.08
  },
  {
    "Year": 1922,
    "C": -0.01
  },
  {
    "Year": 1923,
    "C": 0.01
  },
  {
    "Year": 1924,
    "C": 0
  },
  {
    "Year": 1925,
    "C": 0.05
  },
  {
    "Year": 1926,
    "C": 0.16
  },
  {
    "Year": 1927,
    "C": 0.06
  },
  {
    "Year": 1928,
    "C": 0.07
  },
  {
    "Year": 1929,
    "C": -0.09
  },
  {
    "Year": 1930,
    "C": 0.11
  },
  {
    "Year": 1931,
    "C": 0.18
  },
  {
    "Year": 1932,
    "C": 0.11
  },
  {
    "Year": 1933,
    "C": -0.01
  },
  {
    "Year": 1934,
    "C": 0.15
  },
  {
    "Year": 1935,
    "C": 0.07
  },
  {
    "Year": 1936,
    "C": 0.13
  },
  {
    "Year": 1937,
    "C": 0.24
  },
  {
    "Year": 1938,
    "C": 0.27
  },
  {
    "Year": 1939,
    "C": 0.26
  },
  {
    "Year": 1940,
    "C": 0.4
  },
  {
    "Year": 1941,
    "C": 0.46
  },
  {
    "Year": 1942,
    "C": 0.34
  },
  {
    "Year": 1943,
    "C": 0.36
  },
  {
    "Year": 1944,
    "C": 0.48
  },
  {
    "Year": 1945,
    "C": 0.36
  },
  {
    "Year": 1946,
    "C": 0.2
  },
  {
    "Year": 1947,
    "C": 0.25
  },
  {
    "Year": 1948,
    "C": 0.17
  },
  {
    "Year": 1949,
    "C": 0.16
  },
  {
    "Year": 1950,
    "C": 0.1
  },
  {
    "Year": 1951,
    "C": 0.2
  },
  {
    "Year": 1952,
    "C": 0.28
  },
  {
    "Year": 1953,
    "C": 0.35
  },
  {
    "Year": 1954,
    "C": 0.14
  },
  {
    "Year": 1955,
    "C": 0.13
  },
  {
    "Year": 1956,
    "C": 0.08
  },
  {
    "Year": 1957,
    "C": 0.32
  },
  {
    "Year": 1958,
    "C": 0.33
  },
  {
    "Year": 1959,
    "C": 0.3
  },
  {
    "Year": 1960,
    "C": 0.24
  },
  {
    "Year": 1961,
    "C": 0.33
  },
  {
    "Year": 1962,
    "C": 0.3
  },
  {
    "Year": 1963,
    "C": 0.32
  },
  {
    "Year": 1964,
    "C": 0.07
  },
  {
    "Year": 1965,
    "C": 0.16
  },
  {
    "Year": 1966,
    "C": 0.21
  },
  {
    "Year": 1967,
    "C": 0.25
  },
  {
    "Year": 1968,
    "C": 0.19
  },
  {
    "Year": 1969,
    "C": 0.32
  },
  {
    "Year": 1970,
    "C": 0.3
  },
  {
    "Year": 1971,
    "C": 0.19
  },
  {
    "Year": 1972,
    "C": 0.28
  },
  {
    "Year": 1973,
    "C": 0.43
  },
  {
    "Year": 1974,
    "C": 0.2
  },
  {
    "Year": 1975,
    "C": 0.26
  },
  {
    "Year": 1976,
    "C": 0.17
  },
  {
    "Year": 1977,
    "C": 0.45
  },
  {
    "Year": 1978,
    "C": 0.34
  },
  {
    "Year": 1979,
    "C": 0.44
  },
  {
    "Year": 1980,
    "C": 0.53
  },
  {
    "Year": 1981,
    "C": 0.59
  },
  {
    "Year": 1982,
    "C": 0.41
  },
  {
    "Year": 1983,
    "C": 0.58
  },
  {
    "Year": 1984,
    "C": 0.43
  },
  {
    "Year": 1985,
    "C": 0.39
  },
  {
    "Year": 1986,
    "C": 0.45
  },
  {
    "Year": 1987,
    "C": 0.59
  },
  {
    "Year": 1988,
    "C": 0.66
  },
  {
    "Year": 1989,
    "C": 0.54
  },
  {
    "Year": 1990,
    "C": 0.72
  },
  {
    "Year": 1991,
    "C": 0.68
  },
  {
    "Year": 1992,
    "C": 0.49
  },
  {
    "Year": 1993,
    "C": 0.5
  },
  {
    "Year": 1994,
    "C": 0.59
  },
  {
    "Year": 1995,
    "C": 0.72
  },
  {
    "Year": 1996,
    "C": 0.6
  },
  {
    "Year": 1997,
    "C": 0.73
  },
  {
    "Year": 1998,
    "C": 0.88
  },
  {
    "Year": 1999,
    "C": 0.65
  },
  {
    "Year": 2000,
    "C": 0.67
  },
  {
    "Year": 2001,
    "C": 0.81
  },
  {
    "Year": 2002,
    "C": 0.9
  },
  {
    "Year": 2003,
    "C": 0.89
  },
  {
    "Year": 2004,
    "C": 0.81
  },
  {
    "Year": 2005,
    "C": 0.95
  },
  {
    "Year": 2006,
    "C": 0.91
  },
  {
    "Year": 2007,
    "C": 0.94
  },
  {
    "Year": 2008,
    "C": 0.81
  },
  {
    "Year": 2009,
    "C": 0.93
  },
  {
    "Year": 2010,
    "C": 1
  },
  {
    "Year": 2011,
    "C": 0.88
  },
  {
    "Year": 2012,
    "C": 0.92
  },
  {
    "Year": 2013,
    "C": 0.95
  },
  {
    "Year": 2014,
    "C": 1.02
  },
  {
    "Year": 2015,
    "C": 1.17
  },
  {
    "Year": 2016,
    "C": 1.29
  },
  {
    "Year": 2017,
    "C": 1.19
  },
  {
    "Year": 2018,
    "C": 1.12
  },
  {
    "Year": 2019,
    "C": 1.25
  },
  {
    "Year": 2020,
    "C": 1.29
  },
  {
    "Year": 2021,
    "C": 1.12
  },
  {
    "Year": 2022,
    "C": 1.16
  },
  {
    "Year": 2023,
    "C": 1.3
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
              label: "Global Temperature",
              data: datasetValues,
              backgroundColor: "rgba(0, 0, 0, 0)", 
              borderColor: "#FFB6C1",
              borderWidth: 2,
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
              },
            },
            y: {
              title: {
                display: true,
                text: 'C°', 
              },
            },
          },
        }}
      />
    </div>
  );
};

export default VulnChart;