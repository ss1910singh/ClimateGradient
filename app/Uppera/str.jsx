"use client"
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = [
  {
    "Year": 1978,
    "Month": 12,
    "C": 1.14
  },
  {
    "Year": 1979,
    "Month": 1,
    "C": 1.14
  },
  {
    "Year": 1979,
    "Month": 2,
    "C": 0.92
  },
  {
    "Year": 1979,
    "Month": 3,
    "C": 0.98
  },
  {
    "Year": 1979,
    "Month": 4,
    "C": 1.09
  },
  {
    "Year": 1979,
    "Month": 5,
    "C": 1.12
  },
  {
    "Year": 1979,
    "Month": 6,
    "C": 0.98
  },
  {
    "Year": 1979,
    "Month": 7,
    "C": 0.81
  },
  {
    "Year": 1979,
    "Month": 8,
    "C": 0.74
  },
  {
    "Year": 1979,
    "Month": 9,
    "C": 0.75
  },
  {
    "Year": 1979,
    "Month": 10,
    "C": 0.81
  },
  {
    "Year": 1979,
    "Month": 11,
    "C": 0.91
  },
  {
    "Year": 1979,
    "Month": 12,
    "C": 0.97
  },
  {
    "Year": 1980,
    "Month": 1,
    "C": 0.96
  },
  {
    "Year": 1980,
    "Month": 2,
    "C": 0.89
  },
  {
    "Year": 1980,
    "Month": 3,
    "C": 0.6
  },
  {
    "Year": 1980,
    "Month": 4,
    "C": 0.53
  },
  {
    "Year": 1980,
    "Month": 5,
    "C": 0.66
  },
  {
    "Year": 1980,
    "Month": 6,
    "C": 0.8
  },
  {
    "Year": 1980,
    "Month": 7,
    "C": 0.9
  },
  {
    "Year": 1980,
    "Month": 8,
    "C": 0.82
  },
  {
    "Year": 1980,
    "Month": 9,
    "C": 0.88
  },
  {
    "Year": 1980,
    "Month": 10,
    "C": 0.97
  },
  {
    "Year": 1980,
    "Month": 11,
    "C": 1.01
  },
  {
    "Year": 1980,
    "Month": 12,
    "C": 0.96
  },
  {
    "Year": 1981,
    "Month": 1,
    "C": 0.87
  },
  {
    "Year": 1981,
    "Month": 2,
    "C": 0.78
  },
  {
    "Year": 1981,
    "Month": 3,
    "C": 0.62
  },
  {
    "Year": 1981,
    "Month": 4,
    "C": 0.74
  },
  {
    "Year": 1981,
    "Month": 5,
    "C": 0.68
  },
  {
    "Year": 1981,
    "Month": 6,
    "C": 0.69
  },
  {
    "Year": 1981,
    "Month": 7,
    "C": 0.63
  },
  {
    "Year": 1981,
    "Month": 8,
    "C": 0.6
  },
  {
    "Year": 1981,
    "Month": 9,
    "C": 0.68
  },
  {
    "Year": 1981,
    "Month": 10,
    "C": 0.82
  },
  {
    "Year": 1981,
    "Month": 11,
    "C": 0.91
  },
  {
    "Year": 1981,
    "Month": 12,
    "C": 0.78
  },
  {
    "Year": 1982,
    "Month": 1,
    "C": 0.78
  },
  {
    "Year": 1982,
    "Month": 2,
    "C": 0.89
  },
  {
    "Year": 1982,
    "Month": 3,
    "C": 0.92
  },
  {
    "Year": 1982,
    "Month": 4,
    "C": 0.92
  },
  {
    "Year": 1982,
    "Month": 5,
    "C": 1.07
  },
  {
    "Year": 1982,
    "Month": 6,
    "C": 1.25
  },
  {
    "Year": 1982,
    "Month": 7,
    "C": 1.32
  },
  {
    "Year": 1982,
    "Month": 8,
    "C": 1.35
  },
  {
    "Year": 1982,
    "Month": 9,
    "C": 1.52
  },
  {
    "Year": 1982,
    "Month": 10,
    "C": 1.58
  },
  {
    "Year": 1982,
    "Month": 11,
    "C": 1.71
  },
  {
    "Year": 1982,
    "Month": 12,
    "C": 1.65
  },
  {
    "Year": 1983,
    "Month": 1,
    "C": 1.66
  },
  {
    "Year": 1983,
    "Month": 2,
    "C": 1.54
  },
  {
    "Year": 1983,
    "Month": 3,
    "C": 1.35
  },
  {
    "Year": 1983,
    "Month": 4,
    "C": 1.19
  },
  {
    "Year": 1983,
    "Month": 5,
    "C": 1.07
  },
  {
    "Year": 1983,
    "Month": 6,
    "C": 0.99
  },
  {
    "Year": 1983,
    "Month": 7,
    "C": 0.92
  },
  {
    "Year": 1983,
    "Month": 8,
    "C": 0.93
  },
  {
    "Year": 1983,
    "Month": 9,
    "C": 1.02
  },
  {
    "Year": 1983,
    "Month": 10,
    "C": 1.14
  },
  {
    "Year": 1983,
    "Month": 11,
    "C": 1.1
  },
  {
    "Year": 1983,
    "Month": 12,
    "C": 0.97
  },
  {
    "Year": 1984,
    "Month": 1,
    "C": 0.83
  },
  {
    "Year": 1984,
    "Month": 2,
    "C": 0.62
  },
  {
    "Year": 1984,
    "Month": 3,
    "C": 0.28
  },
  {
    "Year": 1984,
    "Month": 4,
    "C": 0.33
  },
  {
    "Year": 1984,
    "Month": 5,
    "C": 0.45
  },
  {
    "Year": 1984,
    "Month": 6,
    "C": 0.41
  },
  {
    "Year": 1984,
    "Month": 7,
    "C": 0.4
  },
  {
    "Year": 1984,
    "Month": 8,
    "C": 0.34
  },
  {
    "Year": 1984,
    "Month": 9,
    "C": 0.35
  },
  {
    "Year": 1984,
    "Month": 10,
    "C": 0.37
  },
  {
    "Year": 1984,
    "Month": 11,
    "C": 0.52
  },
  {
    "Year": 1984,
    "Month": 12,
    "C": 0.51
  },
  {
    "Year": 1985,
    "Month": 1,
    "C": 0.23
  },
  {
    "Year": 1985,
    "Month": 2,
    "C": 0.12
  },
  {
    "Year": 1985,
    "Month": 3,
    "C": 0.07
  },
  {
    "Year": 1985,
    "Month": 4,
    "C": 0.08
  },
  {
    "Year": 1985,
    "Month": 5,
    "C": 0.21
  },
  {
    "Year": 1985,
    "Month": 6,
    "C": 0.34
  },
  {
    "Year": 1985,
    "Month": 7,
    "C": 0.37
  },
  {
    "Year": 1985,
    "Month": 8,
    "C": 0.37
  },
  {
    "Year": 1985,
    "Month": 9,
    "C": 0.47
  },
  {
    "Year": 1985,
    "Month": 10,
    "C": 0.46
  },
  {
    "Year": 1985,
    "Month": 11,
    "C": 0.37
  },
  {
    "Year": 1985,
    "Month": 12,
    "C": 0.33
  },
  {
    "Year": 1986,
    "Month": 1,
    "C": 0.35
  },
  {
    "Year": 1986,
    "Month": 2,
    "C": 0.44
  },
  {
    "Year": 1986,
    "Month": 3,
    "C": 0.34
  },
  {
    "Year": 1986,
    "Month": 4,
    "C": 0.28
  },
  {
    "Year": 1986,
    "Month": 5,
    "C": 0.29
  },
  {
    "Year": 1986,
    "Month": 6,
    "C": 0.31
  },
  {
    "Year": 1986,
    "Month": 7,
    "C": 0.33
  },
  {
    "Year": 1986,
    "Month": 8,
    "C": 0.2
  },
  {
    "Year": 1986,
    "Month": 9,
    "C": 0.22
  },
  {
    "Year": 1986,
    "Month": 10,
    "C": 0.38
  },
  {
    "Year": 1986,
    "Month": 11,
    "C": 0.37
  },
  {
    "Year": 1986,
    "Month": 12,
    "C": 0.49
  },
  {
    "Year": 1987,
    "Month": 1,
    "C": 0.38
  },
  {
    "Year": 1987,
    "Month": 2,
    "C": 0.16
  },
  {
    "Year": 1987,
    "Month": 3,
    "C": 0.11
  },
  {
    "Year": 1987,
    "Month": 4,
    "C": 0.29
  },
  {
    "Year": 1987,
    "Month": 5,
    "C": 0.37
  },
  {
    "Year": 1987,
    "Month": 6,
    "C": 0.34
  },
  {
    "Year": 1987,
    "Month": 7,
    "C": 0.4
  },
  {
    "Year": 1987,
    "Month": 8,
    "C": 0.33
  },
  {
    "Year": 1987,
    "Month": 9,
    "C": 0.34
  },
  {
    "Year": 1987,
    "Month": 10,
    "C": 0.31
  },
  {
    "Year": 1987,
    "Month": 11,
    "C": 0.33
  },
  {
    "Year": 1987,
    "Month": 12,
    "C": 0.09
  },
  {
    "Year": 1988,
    "Month": 1,
    "C": 0.22
  },
  {
    "Year": 1988,
    "Month": 2,
    "C": 0.31
  },
  {
    "Year": 1988,
    "Month": 3,
    "C": 0.17
  },
  {
    "Year": 1988,
    "Month": 4,
    "C": 0.14
  },
  {
    "Year": 1988,
    "Month": 5,
    "C": 0.19
  },
  {
    "Year": 1988,
    "Month": 6,
    "C": 0.37
  },
  {
    "Year": 1988,
    "Month": 7,
    "C": 0.37
  },
  {
    "Year": 1988,
    "Month": 8,
    "C": 0.33
  },
  {
    "Year": 1988,
    "Month": 9,
    "C": 0.36
  },
  {
    "Year": 1988,
    "Month": 10,
    "C": 0.47
  },
  {
    "Year": 1988,
    "Month": 11,
    "C": 0.5
  },
  {
    "Year": 1988,
    "Month": 12,
    "C": 0.5
  },
  {
    "Year": 1989,
    "Month": 1,
    "C": 0.63
  },
  {
    "Year": 1989,
    "Month": 2,
    "C": 0.56
  },
  {
    "Year": 1989,
    "Month": 3,
    "C": 0.33
  },
  {
    "Year": 1989,
    "Month": 4,
    "C": 0.38
  },
  {
    "Year": 1989,
    "Month": 5,
    "C": 0.44
  },
  {
    "Year": 1989,
    "Month": 6,
    "C": 0.45
  },
  {
    "Year": 1989,
    "Month": 7,
    "C": 0.37
  },
  {
    "Year": 1989,
    "Month": 8,
    "C": 0.34
  },
  {
    "Year": 1989,
    "Month": 9,
    "C": 0.38
  },
  {
    "Year": 1989,
    "Month": 10,
    "C": 0.47
  },
  {
    "Year": 1989,
    "Month": 11,
    "C": 0.37
  },
  {
    "Year": 1989,
    "Month": 12,
    "C": 0.41
  },
  {
    "Year": 1990,
    "Month": 1,
    "C": 0.43
  },
  {
    "Year": 1990,
    "Month": 2,
    "C": 0.36
  },
  {
    "Year": 1990,
    "Month": 3,
    "C": 0.41
  },
  {
    "Year": 1990,
    "Month": 4,
    "C": 0.48
  },
  {
    "Year": 1990,
    "Month": 5,
    "C": 0.43
  },
  {
    "Year": 1990,
    "Month": 6,
    "C": 0.45
  },
  {
    "Year": 1990,
    "Month": 7,
    "C": 0.41
  },
  {
    "Year": 1990,
    "Month": 8,
    "C": 0.36
  },
  {
    "Year": 1990,
    "Month": 9,
    "C": 0.33
  },
  {
    "Year": 1990,
    "Month": 10,
    "C": 0.37
  },
  {
    "Year": 1990,
    "Month": 11,
    "C": 0.46
  },
  {
    "Year": 1990,
    "Month": 12,
    "C": 0.47
  },
  {
    "Year": 1991,
    "Month": 1,
    "C": 0.29
  },
  {
    "Year": 1991,
    "Month": 2,
    "C": 0.12
  },
  {
    "Year": 1991,
    "Month": 3,
    "C": 0.31
  },
  {
    "Year": 1991,
    "Month": 4,
    "C": 0.31
  },
  {
    "Year": 1991,
    "Month": 5,
    "C": 0.32
  },
  {
    "Year": 1991,
    "Month": 6,
    "C": 0.41
  },
  {
    "Year": 1991,
    "Month": 7,
    "C": 0.83
  },
  {
    "Year": 1991,
    "Month": 8,
    "C": 1.42
  },
  {
    "Year": 1991,
    "Month": 9,
    "C": 1.78
  },
  {
    "Year": 1991,
    "Month": 10,
    "C": 1.83
  },
  {
    "Year": 1991,
    "Month": 11,
    "C": 1.57
  },
  {
    "Year": 1991,
    "Month": 12,
    "C": 1.48
  },
  {
    "Year": 1992,
    "Month": 1,
    "C": 1.35
  },
  {
    "Year": 1992,
    "Month": 2,
    "C": 1.27
  },
  {
    "Year": 1992,
    "Month": 3,
    "C": 1.35
  },
  {
    "Year": 1992,
    "Month": 4,
    "C": 1.25
  },
  {
    "Year": 1992,
    "Month": 5,
    "C": 1.15
  },
  {
    "Year": 1992,
    "Month": 6,
    "C": 1.11
  },
  {
    "Year": 1992,
    "Month": 7,
    "C": 1.21
  },
  {
    "Year": 1992,
    "Month": 8,
    "C": 1.21
  },
  {
    "Year": 1992,
    "Month": 9,
    "C": 1.28
  },
  {
    "Year": 1992,
    "Month": 10,
    "C": 1.22
  },
  {
    "Year": 1992,
    "Month": 11,
    "C": 1.23
  },
  {
    "Year": 1992,
    "Month": 12,
    "C": 1.12
  },
  {
    "Year": 1993,
    "Month": 1,
    "C": 1.03
  },
  {
    "Year": 1993,
    "Month": 2,
    "C": 0.9
  },
  {
    "Year": 1993,
    "Month": 3,
    "C": 0.6
  },
  {
    "Year": 1993,
    "Month": 4,
    "C": 0.42
  },
  {
    "Year": 1993,
    "Month": 5,
    "C": 0.28
  },
  {
    "Year": 1993,
    "Month": 6,
    "C": 0.2
  },
  {
    "Year": 1993,
    "Month": 7,
    "C": 0.17
  },
  {
    "Year": 1993,
    "Month": 8,
    "C": 0.12
  },
  {
    "Year": 1993,
    "Month": 9,
    "C": 0.15
  },
  {
    "Year": 1993,
    "Month": 10,
    "C": 0.14
  },
  {
    "Year": 1993,
    "Month": 11,
    "C": 0.04
  },
  {
    "Year": 1993,
    "Month": 12,
    "C": 0.02
  },
  {
    "Year": 1994,
    "Month": 1,
    "C": 0.03
  },
  {
    "Year": 1994,
    "Month": 2,
    "C": 0.12
  },
  {
    "Year": 1994,
    "Month": 3,
    "C": 0.19
  },
  {
    "Year": 1994,
    "Month": 4,
    "C": 0.19
  },
  {
    "Year": 1994,
    "Month": 5,
    "C": 0.15
  },
  {
    "Year": 1994,
    "Month": 6,
    "C": 0.13
  },
  {
    "Year": 1994,
    "Month": 7,
    "C": 0.1
  },
  {
    "Year": 1994,
    "Month": 8,
    "C": 0.16
  },
  {
    "Year": 1994,
    "Month": 9,
    "C": 0.11
  },
  {
    "Year": 1994,
    "Month": 10,
    "C": 0.05
  },
  {
    "Year": 1994,
    "Month": 11,
    "C": -0.08
  },
  {
    "Year": 1994,
    "Month": 12,
    "C": 0.02
  },
  {
    "Year": 1995,
    "Month": 1,
    "C": 0.14
  },
  {
    "Year": 1995,
    "Month": 2,
    "C": 0.09
  },
  {
    "Year": 1995,
    "Month": 3,
    "C": 0.08
  },
  {
    "Year": 1995,
    "Month": 4,
    "C": -0.07
  },
  {
    "Year": 1995,
    "Month": 5,
    "C": -0.12
  },
  {
    "Year": 1995,
    "Month": 6,
    "C": -0.14
  },
  {
    "Year": 1995,
    "Month": 7,
    "C": -0.16
  },
  {
    "Year": 1995,
    "Month": 8,
    "C": -0.12
  },
  {
    "Year": 1995,
    "Month": 9,
    "C": -0.08
  },
  {
    "Year": 1995,
    "Month": 10,
    "C": 0
  },
  {
    "Year": 1995,
    "Month": 11,
    "C": -0.02
  },
  {
    "Year": 1995,
    "Month": 12,
    "C": -0.08
  },
  {
    "Year": 1996,
    "Month": 1,
    "C": -0.12
  },
  {
    "Year": 1996,
    "Month": 2,
    "C": -0.05
  },
  {
    "Year": 1996,
    "Month": 3,
    "C": -0.11
  },
  {
    "Year": 1996,
    "Month": 4,
    "C": -0.17
  },
  {
    "Year": 1996,
    "Month": 5,
    "C": -0.14
  },
  {
    "Year": 1996,
    "Month": 6,
    "C": -0.2
  },
  {
    "Year": 1996,
    "Month": 7,
    "C": -0.23
  },
  {
    "Year": 1996,
    "Month": 8,
    "C": -0.22
  },
  {
    "Year": 1996,
    "Month": 9,
    "C": -0.28
  },
  {
    "Year": 1996,
    "Month": 10,
    "C": -0.12
  },
  {
    "Year": 1996,
    "Month": 11,
    "C": -0.04
  },
  {
    "Year": 1996,
    "Month": 12,
    "C": -0.13
  },
  {
    "Year": 1997,
    "Month": 1,
    "C": -0.11
  },
  {
    "Year": 1997,
    "Month": 2,
    "C": 0
  },
  {
    "Year": 1997,
    "Month": 3,
    "C": 0.15
  },
  {
    "Year": 1997,
    "Month": 4,
    "C": 0.11
  },
  {
    "Year": 1997,
    "Month": 5,
    "C": -0.07
  },
  {
    "Year": 1997,
    "Month": 6,
    "C": -0.1
  },
  {
    "Year": 1997,
    "Month": 7,
    "C": -0.01
  },
  {
    "Year": 1997,
    "Month": 8,
    "C": 0.06
  },
  {
    "Year": 1997,
    "Month": 9,
    "C": -0.02
  },
  {
    "Year": 1997,
    "Month": 10,
    "C": -0.11
  },
  {
    "Year": 1997,
    "Month": 11,
    "C": -0.12
  },
  {
    "Year": 1997,
    "Month": 12,
    "C": -0.24
  },
  {
    "Year": 1998,
    "Month": 1,
    "C": -0.29
  },
  {
    "Year": 1998,
    "Month": 2,
    "C": -0.08
  },
  {
    "Year": 1998,
    "Month": 3,
    "C": -0.03
  },
  {
    "Year": 1998,
    "Month": 4,
    "C": 0.05
  },
  {
    "Year": 1998,
    "Month": 5,
    "C": 0.08
  },
  {
    "Year": 1998,
    "Month": 6,
    "C": 0.03
  },
  {
    "Year": 1998,
    "Month": 7,
    "C": 0.09
  },
  {
    "Year": 1998,
    "Month": 8,
    "C": 0.03
  },
  {
    "Year": 1998,
    "Month": 9,
    "C": 0.03
  },
  {
    "Year": 1998,
    "Month": 10,
    "C": -0.01
  },
  {
    "Year": 1998,
    "Month": 11,
    "C": 0.02
  },
  {
    "Year": 1998,
    "Month": 12,
    "C": -0.11
  },
  {
    "Year": 1999,
    "Month": 1,
    "C": -0.2
  },
  {
    "Year": 1999,
    "Month": 2,
    "C": -0.19
  },
  {
    "Year": 1999,
    "Month": 3,
    "C": -0.41
  },
  {
    "Year": 1999,
    "Month": 4,
    "C": -0.3
  },
  {
    "Year": 1999,
    "Month": 5,
    "C": -0.02
  },
  {
    "Year": 1999,
    "Month": 6,
    "C": 0.16
  },
  {
    "Year": 1999,
    "Month": 7,
    "C": 0.19
  },
  {
    "Year": 1999,
    "Month": 8,
    "C": 0.16
  },
  {
    "Year": 1999,
    "Month": 9,
    "C": 0.1
  },
  {
    "Year": 1999,
    "Month": 10,
    "C": 0.04
  },
  {
    "Year": 1999,
    "Month": 11,
    "C": 0.04
  },
  {
    "Year": 1999,
    "Month": 12,
    "C": 0
  },
  {
    "Year": 2000,
    "Month": 1,
    "C": 0.09
  },
  {
    "Year": 2000,
    "Month": 2,
    "C": 0.14
  },
  {
    "Year": 2000,
    "Month": 3,
    "C": 0.06
  },
  {
    "Year": 2000,
    "Month": 4,
    "C": -0.01
  },
  {
    "Year": 2000,
    "Month": 5,
    "C": 0.02
  },
  {
    "Year": 2000,
    "Month": 6,
    "C": 0.01
  },
  {
    "Year": 2000,
    "Month": 7,
    "C": -0.09
  },
  {
    "Year": 2000,
    "Month": 8,
    "C": -0.18
  },
  {
    "Year": 2000,
    "Month": 9,
    "C": -0.25
  },
  {
    "Year": 2000,
    "Month": 10,
    "C": -0.34
  },
  {
    "Year": 2000,
    "Month": 11,
    "C": -0.45
  },
  {
    "Year": 2000,
    "Month": 12,
    "C": -0.33
  },
  {
    "Year": 2001,
    "Month": 1,
    "C": -0.15
  },
  {
    "Year": 2001,
    "Month": 2,
    "C": -0.24
  },
  {
    "Year": 2001,
    "Month": 3,
    "C": -0.18
  },
  {
    "Year": 2001,
    "Month": 4,
    "C": -0.01
  },
  {
    "Year": 2001,
    "Month": 5,
    "C": 0.17
  },
  {
    "Year": 2001,
    "Month": 6,
    "C": 0.17
  },
  {
    "Year": 2001,
    "Month": 7,
    "C": 0.15
  },
  {
    "Year": 2001,
    "Month": 8,
    "C": 0.12
  },
  {
    "Year": 2001,
    "Month": 9,
    "C": 0.15
  },
  {
    "Year": 2001,
    "Month": 10,
    "C": 0.09
  },
  {
    "Year": 2001,
    "Month": 11,
    "C": 0.16
  },
  {
    "Year": 2001,
    "Month": 12,
    "C": 0.26
  },
  {
    "Year": 2002,
    "Month": 1,
    "C": 0.11
  },
  {
    "Year": 2002,
    "Month": 2,
    "C": 0.08
  },
  {
    "Year": 2002,
    "Month": 3,
    "C": 0.1
  },
  {
    "Year": 2002,
    "Month": 4,
    "C": 0.16
  },
  {
    "Year": 2002,
    "Month": 5,
    "C": 0.2
  },
  {
    "Year": 2002,
    "Month": 6,
    "C": 0.19
  },
  {
    "Year": 2002,
    "Month": 7,
    "C": 0.19
  },
  {
    "Year": 2002,
    "Month": 8,
    "C": 0.13
  },
  {
    "Year": 2002,
    "Month": 9,
    "C": 0.02
  },
  {
    "Year": 2002,
    "Month": 10,
    "C": 0
  },
  {
    "Year": 2002,
    "Month": 11,
    "C": 0.03
  },
  {
    "Year": 2002,
    "Month": 12,
    "C": 0.17
  },
  {
    "Year": 2003,
    "Month": 1,
    "C": 0.18
  },
  {
    "Year": 2003,
    "Month": 2,
    "C": 0.16
  },
  {
    "Year": 2003,
    "Month": 3,
    "C": 0.12
  },
  {
    "Year": 2003,
    "Month": 4,
    "C": 0.13
  },
  {
    "Year": 2003,
    "Month": 5,
    "C": 0.13
  },
  {
    "Year": 2003,
    "Month": 6,
    "C": 0.15
  },
  {
    "Year": 2003,
    "Month": 7,
    "C": 0.05
  },
  {
    "Year": 2003,
    "Month": 8,
    "C": 0
  },
  {
    "Year": 2003,
    "Month": 9,
    "C": -0.09
  },
  {
    "Year": 2003,
    "Month": 10,
    "C": -0.14
  },
  {
    "Year": 2003,
    "Month": 11,
    "C": -0.08
  },
  {
    "Year": 2003,
    "Month": 12,
    "C": -0.07
  },
  {
    "Year": 2004,
    "Month": 1,
    "C": -0.24
  },
  {
    "Year": 2004,
    "Month": 2,
    "C": -0.27
  },
  {
    "Year": 2004,
    "Month": 3,
    "C": -0.14
  },
  {
    "Year": 2004,
    "Month": 4,
    "C": 0.05
  },
  {
    "Year": 2004,
    "Month": 5,
    "C": 0.04
  },
  {
    "Year": 2004,
    "Month": 6,
    "C": 0.14
  },
  {
    "Year": 2004,
    "Month": 7,
    "C": 0.16
  },
  {
    "Year": 2004,
    "Month": 8,
    "C": 0.06
  },
  {
    "Year": 2004,
    "Month": 9,
    "C": 0.07
  },
  {
    "Year": 2004,
    "Month": 10,
    "C": -0.03
  },
  {
    "Year": 2004,
    "Month": 11,
    "C": -0.01
  },
  {
    "Year": 2004,
    "Month": 12,
    "C": 0.01
  },
  {
    "Year": 2005,
    "Month": 1,
    "C": 0.07
  },
  {
    "Year": 2005,
    "Month": 2,
    "C": 0.15
  },
  {
    "Year": 2005,
    "Month": 3,
    "C": 0
  },
  {
    "Year": 2005,
    "Month": 4,
    "C": -0.14
  },
  {
    "Year": 2005,
    "Month": 5,
    "C": -0.14
  },
  {
    "Year": 2005,
    "Month": 6,
    "C": -0.17
  },
  {
    "Year": 2005,
    "Month": 7,
    "C": -0.21
  },
  {
    "Year": 2005,
    "Month": 8,
    "C": -0.22
  },
  {
    "Year": 2005,
    "Month": 9,
    "C": -0.22
  },
  {
    "Year": 2005,
    "Month": 10,
    "C": -0.22
  },
  {
    "Year": 2005,
    "Month": 11,
    "C": -0.26
  },
  {
    "Year": 2005,
    "Month": 12,
    "C": -0.18
  },
  {
    "Year": 2006,
    "Month": 1,
    "C": -0.37
  },
  {
    "Year": 2006,
    "Month": 2,
    "C": -0.41
  },
  {
    "Year": 2006,
    "Month": 3,
    "C": -0.33
  },
  {
    "Year": 2006,
    "Month": 4,
    "C": -0.1
  },
  {
    "Year": 2006,
    "Month": 5,
    "C": -0.02
  },
  {
    "Year": 2006,
    "Month": 6,
    "C": 0.02
  },
  {
    "Year": 2006,
    "Month": 7,
    "C": 0.12
  },
  {
    "Year": 2006,
    "Month": 8,
    "C": 0.01
  },
  {
    "Year": 2006,
    "Month": 9,
    "C": -0.09
  },
  {
    "Year": 2006,
    "Month": 10,
    "C": -0.18
  },
  {
    "Year": 2006,
    "Month": 11,
    "C": -0.12
  },
  {
    "Year": 2006,
    "Month": 12,
    "C": -0.17
  },
  {
    "Year": 2007,
    "Month": 1,
    "C": -0.02
  },
  {
    "Year": 2007,
    "Month": 2,
    "C": -0.04
  },
  {
    "Year": 2007,
    "Month": 3,
    "C": -0.11
  },
  {
    "Year": 2007,
    "Month": 4,
    "C": -0.08
  },
  {
    "Year": 2007,
    "Month": 5,
    "C": -0.09
  },
  {
    "Year": 2007,
    "Month": 6,
    "C": -0.14
  },
  {
    "Year": 2007,
    "Month": 7,
    "C": -0.26
  },
  {
    "Year": 2007,
    "Month": 8,
    "C": -0.29
  },
  {
    "Year": 2007,
    "Month": 9,
    "C": -0.28
  },
  {
    "Year": 2007,
    "Month": 10,
    "C": -0.27
  },
  {
    "Year": 2007,
    "Month": 11,
    "C": -0.12
  },
  {
    "Year": 2007,
    "Month": 12,
    "C": -0.06
  },
  {
    "Year": 2008,
    "Month": 1,
    "C": -0.12
  },
  {
    "Year": 2008,
    "Month": 2,
    "C": -0.18
  },
  {
    "Year": 2008,
    "Month": 3,
    "C": -0.24
  },
  {
    "Year": 2008,
    "Month": 4,
    "C": -0.25
  },
  {
    "Year": 2008,
    "Month": 5,
    "C": -0.22
  },
  {
    "Year": 2008,
    "Month": 6,
    "C": -0.19
  },
  {
    "Year": 2008,
    "Month": 7,
    "C": -0.18
  },
  {
    "Year": 2008,
    "Month": 8,
    "C": -0.19
  },
  {
    "Year": 2008,
    "Month": 9,
    "C": -0.23
  },
  {
    "Year": 2008,
    "Month": 10,
    "C": -0.25
  },
  {
    "Year": 2008,
    "Month": 11,
    "C": -0.26
  },
  {
    "Year": 2008,
    "Month": 12,
    "C": -0.29
  },
  {
    "Year": 2009,
    "Month": 1,
    "C": -0.28
  },
  {
    "Year": 2009,
    "Month": 2,
    "C": -0.41
  },
  {
    "Year": 2009,
    "Month": 3,
    "C": -0.25
  },
  {
    "Year": 2009,
    "Month": 4,
    "C": 0.01
  },
  {
    "Year": 2009,
    "Month": 5,
    "C": 0.05
  },
  {
    "Year": 2009,
    "Month": 6,
    "C": -0.07
  },
  {
    "Year": 2009,
    "Month": 7,
    "C": -0.14
  },
  {
    "Year": 2009,
    "Month": 8,
    "C": -0.07
  },
  {
    "Year": 2009,
    "Month": 9,
    "C": -0.06
  },
  {
    "Year": 2009,
    "Month": 10,
    "C": -0.06
  },
  {
    "Year": 2009,
    "Month": 11,
    "C": -0.13
  },
  {
    "Year": 2009,
    "Month": 12,
    "C": -0.18
  },
  {
    "Year": 2010,
    "Month": 1,
    "C": -0.2
  },
  {
    "Year": 2010,
    "Month": 2,
    "C": -0.22
  },
  {
    "Year": 2010,
    "Month": 3,
    "C": -0.17
  },
  {
    "Year": 2010,
    "Month": 4,
    "C": -0.01
  },
  {
    "Year": 2010,
    "Month": 5,
    "C": 0.12
  },
  {
    "Year": 2010,
    "Month": 6,
    "C": 0.1
  },
  {
    "Year": 2010,
    "Month": 7,
    "C": -0.01
  },
  {
    "Year": 2010,
    "Month": 8,
    "C": -0.03
  },
  {
    "Year": 2010,
    "Month": 9,
    "C": -0.01
  },
  {
    "Year": 2010,
    "Month": 10,
    "C": 0.04
  },
  {
    "Year": 2010,
    "Month": 11,
    "C": 0.16
  },
  {
    "Year": 2010,
    "Month": 12,
    "C": 0.14
  },
  {
    "Year": 2011,
    "Month": 1,
    "C": 0.05
  },
  {
    "Year": 2011,
    "Month": 2,
    "C": 0.09
  },
  {
    "Year": 2011,
    "Month": 3,
    "C": 0.03
  },
  {
    "Year": 2011,
    "Month": 4,
    "C": -0.3
  },
  {
    "Year": 2011,
    "Month": 5,
    "C": -0.43
  },
  {
    "Year": 2011,
    "Month": 6,
    "C": -0.34
  },
  {
    "Year": 2011,
    "Month": 7,
    "C": -0.26
  },
  {
    "Year": 2011,
    "Month": 8,
    "C": -0.22
  },
  {
    "Year": 2011,
    "Month": 9,
    "C": -0.18
  },
  {
    "Year": 2011,
    "Month": 10,
    "C": -0.17
  },
  {
    "Year": 2011,
    "Month": 11,
    "C": -0.2
  },
  {
    "Year": 2011,
    "Month": 12,
    "C": -0.12
  },
  {
    "Year": 2012,
    "Month": 1,
    "C": -0.31
  },
  {
    "Year": 2012,
    "Month": 2,
    "C": -0.44
  },
  {
    "Year": 2012,
    "Month": 3,
    "C": -0.41
  },
  {
    "Year": 2012,
    "Month": 4,
    "C": -0.32
  },
  {
    "Year": 2012,
    "Month": 5,
    "C": -0.23
  },
  {
    "Year": 2012,
    "Month": 6,
    "C": -0.1
  },
  {
    "Year": 2012,
    "Month": 7,
    "C": -0.14
  },
  {
    "Year": 2012,
    "Month": 8,
    "C": -0.2
  },
  {
    "Year": 2012,
    "Month": 9,
    "C": -0.14
  },
  {
    "Year": 2012,
    "Month": 10,
    "C": -0.17
  },
  {
    "Year": 2012,
    "Month": 11,
    "C": -0.14
  },
  {
    "Year": 2012,
    "Month": 12,
    "C": -0.24
  },
  {
    "Year": 2013,
    "Month": 1,
    "C": -0.27
  },
  {
    "Year": 2013,
    "Month": 2,
    "C": -0.23
  },
  {
    "Year": 2013,
    "Month": 3,
    "C": -0.1
  },
  {
    "Year": 2013,
    "Month": 4,
    "C": -0.03
  },
  {
    "Year": 2013,
    "Month": 5,
    "C": -0.04
  },
  {
    "Year": 2013,
    "Month": 6,
    "C": 0.02
  },
  {
    "Year": 2013,
    "Month": 7,
    "C": 0.08
  },
  {
    "Year": 2013,
    "Month": 8,
    "C": 0.03
  },
  {
    "Year": 2013,
    "Month": 9,
    "C": -0.05
  },
  {
    "Year": 2013,
    "Month": 10,
    "C": -0.04
  },
  {
    "Year": 2013,
    "Month": 11,
    "C": 0.07
  },
  {
    "Year": 2013,
    "Month": 12,
    "C": 0.11
  },
  {
    "Year": 2014,
    "Month": 1,
    "C": 0.13
  },
  {
    "Year": 2014,
    "Month": 2,
    "C": 0.08
  },
  {
    "Year": 2014,
    "Month": 3,
    "C": 0.11
  },
  {
    "Year": 2014,
    "Month": 4,
    "C": 0.05
  },
  {
    "Year": 2014,
    "Month": 5,
    "C": -0.04
  },
  {
    "Year": 2014,
    "Month": 6,
    "C": 0
  },
  {
    "Year": 2014,
    "Month": 7,
    "C": -0.06
  },
  {
    "Year": 2014,
    "Month": 8,
    "C": -0.1
  },
  {
    "Year": 2014,
    "Month": 9,
    "C": -0.2
  },
  {
    "Year": 2014,
    "Month": 10,
    "C": -0.16
  },
  {
    "Year": 2014,
    "Month": 11,
    "C": -0.14
  },
  {
    "Year": 2014,
    "Month": 12,
    "C": -0.11
  },
  {
    "Year": 2015,
    "Month": 1,
    "C": -0.14
  },
  {
    "Year": 2015,
    "Month": 2,
    "C": -0.09
  },
  {
    "Year": 2015,
    "Month": 3,
    "C": -0.03
  },
  {
    "Year": 2015,
    "Month": 4,
    "C": -0.16
  },
  {
    "Year": 2015,
    "Month": 5,
    "C": -0.06
  },
  {
    "Year": 2015,
    "Month": 6,
    "C": 0.01
  },
  {
    "Year": 2015,
    "Month": 7,
    "C": 0.11
  },
  {
    "Year": 2015,
    "Month": 8,
    "C": 0.02
  },
  {
    "Year": 2015,
    "Month": 9,
    "C": 0
  },
  {
    "Year": 2015,
    "Month": 10,
    "C": 0.1
  },
  {
    "Year": 2015,
    "Month": 11,
    "C": 0.02
  },
  {
    "Year": 2015,
    "Month": 12,
    "C": -0.03
  },
  {
    "Year": 2016,
    "Month": 1,
    "C": -0.03
  },
  {
    "Year": 2016,
    "Month": 2,
    "C": 0.02
  },
  {
    "Year": 2016,
    "Month": 3,
    "C": -0.19
  },
  {
    "Year": 2016,
    "Month": 4,
    "C": -0.33
  },
  {
    "Year": 2016,
    "Month": 5,
    "C": -0.36
  },
  {
    "Year": 2016,
    "Month": 6,
    "C": -0.44
  },
  {
    "Year": 2016,
    "Month": 7,
    "C": -0.49
  },
  {
    "Year": 2016,
    "Month": 8,
    "C": -0.46
  },
  {
    "Year": 2016,
    "Month": 9,
    "C": -0.35
  },
  {
    "Year": 2016,
    "Month": 10,
    "C": -0.29
  },
  {
    "Year": 2016,
    "Month": 11,
    "C": -0.41
  },
  {
    "Year": 2016,
    "Month": 12,
    "C": -0.32
  },
  {
    "Year": 2017,
    "Month": 1,
    "C": -0.17
  },
  {
    "Year": 2017,
    "Month": 2,
    "C": -0.18
  },
  {
    "Year": 2017,
    "Month": 3,
    "C": -0.19
  },
  {
    "Year": 2017,
    "Month": 4,
    "C": -0.14
  },
  {
    "Year": 2017,
    "Month": 5,
    "C": -0.11
  },
  {
    "Year": 2017,
    "Month": 6,
    "C": -0.13
  },
  {
    "Year": 2017,
    "Month": 7,
    "C": -0.28
  },
  {
    "Year": 2017,
    "Month": 8,
    "C": -0.31
  },
  {
    "Year": 2017,
    "Month": 9,
    "C": -0.28
  },
  {
    "Year": 2017,
    "Month": 10,
    "C": -0.18
  },
  {
    "Year": 2017,
    "Month": 11,
    "C": -0.11
  },
  {
    "Year": 2017,
    "Month": 12,
    "C": -0.16
  },
  {
    "Year": 2018,
    "Month": 1,
    "C": -0.16
  },
  {
    "Year": 2018,
    "Month": 2,
    "C": -0.32
  },
  {
    "Year": 2018,
    "Month": 3,
    "C": -0.46
  },
  {
    "Year": 2018,
    "Month": 4,
    "C": -0.25
  },
  {
    "Year": 2018,
    "Month": 5,
    "C": -0.12
  },
  {
    "Year": 2018,
    "Month": 6,
    "C": -0.13
  },
  {
    "Year": 2018,
    "Month": 7,
    "C": -0.23
  },
  {
    "Year": 2018,
    "Month": 8,
    "C": -0.25
  },
  {
    "Year": 2018,
    "Month": 9,
    "C": -0.22
  },
  {
    "Year": 2018,
    "Month": 10,
    "C": -0.19
  },
  {
    "Year": 2018,
    "Month": 11,
    "C": -0.28
  },
  {
    "Year": 2018,
    "Month": 12,
    "C": -0.33
  },
  {
    "Year": 2019,
    "Month": 1,
    "C": -0.45
  },
  {
    "Year": 2019,
    "Month": 2,
    "C": -0.36
  },
  {
    "Year": 2019,
    "Month": 3,
    "C": -0.27
  },
  {
    "Year": 2019,
    "Month": 4,
    "C": -0.28
  },
  {
    "Year": 2019,
    "Month": 5,
    "C": -0.3
  },
  {
    "Year": 2019,
    "Month": 6,
    "C": -0.28
  },
  {
    "Year": 2019,
    "Month": 7,
    "C": -0.2
  },
  {
    "Year": 2019,
    "Month": 8,
    "C": -0.18
  },
  {
    "Year": 2019,
    "Month": 9,
    "C": -0.17
  },
  {
    "Year": 2019,
    "Month": 10,
    "C": -0.13
  },
  {
    "Year": 2019,
    "Month": 11,
    "C": -0.14
  },
  {
    "Year": 2019,
    "Month": 12,
    "C": -0.06
  },
  {
    "Year": 2020,
    "Month": 1,
    "C": 0.18
  },
  {
    "Year": 2020,
    "Month": 2,
    "C": 0.47
  },
  {
    "Year": 2020,
    "Month": 3,
    "C": 0.51
  },
  {
    "Year": 2020,
    "Month": 4,
    "C": 0.22
  },
  {
    "Year": 2020,
    "Month": 5,
    "C": -0.19
  },
  {
    "Year": 2020,
    "Month": 6,
    "C": -0.41
  },
  {
    "Year": 2020,
    "Month": 7,
    "C": -0.53
  },
  {
    "Year": 2020,
    "Month": 8,
    "C": -0.51
  },
  {
    "Year": 2020,
    "Month": 9,
    "C": -0.49
  },
  {
    "Year": 2020,
    "Month": 10,
    "C": -0.46
  },
  {
    "Year": 2020,
    "Month": 11,
    "C": -0.23
  },
  {
    "Year": 2020,
    "Month": 12,
    "C": -0.12
  },
  {
    "Year": 2021,
    "Month": 1,
    "C": -0.36
  },
  {
    "Year": 2021,
    "Month": 2,
    "C": -0.26
  },
  {
    "Year": 2021,
    "Month": 3,
    "C": -0.16
  },
  {
    "Year": 2021,
    "Month": 4,
    "C": -0.07
  },
  {
    "Year": 2021,
    "Month": 5,
    "C": -0.16
  },
  {
    "Year": 2021,
    "Month": 6,
    "C": -0.13
  },
  {
    "Year": 2021,
    "Month": 7,
    "C": -0.22
  },
  {
    "Year": 2021,
    "Month": 8,
    "C": -0.23
  },
  {
    "Year": 2021,
    "Month": 9,
    "C": -0.15
  },
  {
    "Year": 2021,
    "Month": 10,
    "C": -0.11
  },
  {
    "Year": 2021,
    "Month": 11,
    "C": -0.13
  },
  {
    "Year": 2021,
    "Month": 12,
    "C": -0.14
  },
  {
    "Year": 2022,
    "Month": 1,
    "C": -0.13
  },
  {
    "Year": 2022,
    "Month": 2,
    "C": 0.04
  },
  {
    "Year": 2022,
    "Month": 3,
    "C": -0.07
  },
  {
    "Year": 2022,
    "Month": 4,
    "C": -0.25
  },
  {
    "Year": 2022,
    "Month": 5,
    "C": -0.22
  },
  {
    "Year": 2022,
    "Month": 6,
    "C": -0.31
  },
  {
    "Year": 2022,
    "Month": 7,
    "C": -0.39
  },
  {
    "Year": 2022,
    "Month": 8,
    "C": -0.4
  },
  {
    "Year": 2022,
    "Month": 9,
    "C": -0.38
  },
  {
    "Year": 2022,
    "Month": 10,
    "C": -0.39
  },
  {
    "Year": 2022,
    "Month": 11,
    "C": -0.27
  },
  {
    "Year": 2022,
    "Month": 12,
    "C": -0.2
  },
  {
    "Year": 2023,
    "Month": 1,
    "C": -0.13
  },
  {
    "Year": 2023,
    "Month": 2,
    "C": -0.23
  },
  {
    "Year": 2023,
    "Month": 3,
    "C": -0.32
  },
  {
    "Year": 2023,
    "Month": 4,
    "C": -0.28
  },
  {
    "Year": 2023,
    "Month": 5,
    "C": -0.24
  },
  {
    "Year": 2023,
    "Month": 6,
    "C": -0.22
  },
  {
    "Year": 2023,
    "Month": 7,
    "C": -0.24
  }
]
  

const VulnChart = () => {
  const labels = data.map((entry) => `${entry.Month}/${entry.Year}`);
  const datasetValues = data.map((entry) => entry.C);

  return (
    <div >
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Stratospheric Temperature",
              data: datasetValues,
              backgroundColor: "rgba(0, 0, 0, 0)", 
              borderColor: "orange",
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
                text: 'Month & Year', 
                color:'white'
              },
            },
            y: {
              title: {
                display: true,
                text: 'C°', 
                color:'white'
              },
            },
          },
        }}
      />
    </div>
  );
};

export default VulnChart;