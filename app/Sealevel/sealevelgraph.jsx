"use client"
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = [
  {
    "Year": 1993,
    "Month": 1,
    "mm": -29.4
  },
  {
    "Year": 1993,
    "Month": 2,
    "mm": -25.93
  },
  {
    "Year": 1993,
    "Month": 3,
    "mm": -23.56
  },
  {
    "Year": 1993,
    "Month": 4,
    "mm": -23.79
  },
  {
    "Year": 1993,
    "Month": 5,
    "mm": -24.06
  },
  {
    "Year": 1993,
    "Month": 6,
    "mm": -22.71
  },
  {
    "Year": 1993,
    "Month": 7,
    "mm": -22.84
  },
  {
    "Year": 1993,
    "Month": 8,
    "mm": -22.83
  },
  {
    "Year": 1993,
    "Month": 9,
    "mm": -25.87
  },
  {
    "Year": 1993,
    "Month": 10,
    "mm": -25.35
  },
  {
    "Year": 1993,
    "Month": 11,
    "mm": -27.25
  },
  {
    "Year": 1993,
    "Month": 12,
    "mm": -22.74
  },
  {
    "Year": 1994,
    "Month": 1,
    "mm": -18.35
  },
  {
    "Year": 1994,
    "Month": 2,
    "mm": -22.91
  },
  {
    "Year": 1994,
    "Month": 3,
    "mm": -19.67
  },
  {
    "Year": 1994,
    "Month": 4,
    "mm": -18.75
  },
  {
    "Year": 1994,
    "Month": 5,
    "mm": -21.18
  },
  {
    "Year": 1994,
    "Month": 6,
    "mm": -22.07
  },
  {
    "Year": 1994,
    "Month": 7,
    "mm": -23.05
  },
  {
    "Year": 1994,
    "Month": 8,
    "mm": -21.84
  },
  {
    "Year": 1994,
    "Month": 9,
    "mm": -21.37
  },
  {
    "Year": 1994,
    "Month": 10,
    "mm": -21.57
  },
  {
    "Year": 1994,
    "Month": 11,
    "mm": -21.09
  },
  {
    "Year": 1994,
    "Month": 12,
    "mm": -18.16
  },
  {
    "Year": 1995,
    "Month": 1,
    "mm": -12.8
  },
  {
    "Year": 1995,
    "Month": 2,
    "mm": -17.71
  },
  {
    "Year": 1995,
    "Month": 3,
    "mm": -15.2
  },
  {
    "Year": 1995,
    "Month": 4,
    "mm": -17.14
  },
  {
    "Year": 1995,
    "Month": 5,
    "mm": -19.43
  },
  {
    "Year": 1995,
    "Month": 6,
    "mm": -17.21
  },
  {
    "Year": 1995,
    "Month": 7,
    "mm": -19.38
  },
  {
    "Year": 1995,
    "Month": 8,
    "mm": -19.47
  },
  {
    "Year": 1995,
    "Month": 9,
    "mm": -16.47
  },
  {
    "Year": 1995,
    "Month": 10,
    "mm": -21.73
  },
  {
    "Year": 1995,
    "Month": 11,
    "mm": -18.73
  },
  {
    "Year": 1995,
    "Month": 12,
    "mm": -21.67
  },
  {
    "Year": 1996,
    "Month": 1,
    "mm": -18.86
  },
  {
    "Year": 1996,
    "Month": 2,
    "mm": -15.04
  },
  {
    "Year": 1996,
    "Month": 3,
    "mm": -16.76
  },
  {
    "Year": 1996,
    "Month": 4,
    "mm": -17.41
  },
  {
    "Year": 1996,
    "Month": 5,
    "mm": -14.65
  },
  {
    "Year": 1996,
    "Month": 6,
    "mm": -15.66
  },
  {
    "Year": 1996,
    "Month": 7,
    "mm": -13.63
  },
  {
    "Year": 1996,
    "Month": 8,
    "mm": -14.79
  },
  {
    "Year": 1996,
    "Month": 9,
    "mm": -17.25
  },
  {
    "Year": 1996,
    "Month": 10,
    "mm": -17.11
  },
  {
    "Year": 1996,
    "Month": 11,
    "mm": -12.73
  },
  {
    "Year": 1996,
    "Month": 12,
    "mm": -16.14
  },
  {
    "Year": 1997,
    "Month": 1,
    "mm": -15.4
  },
  {
    "Year": 1997,
    "Month": 2,
    "mm": -16.37
  },
  {
    "Year": 1997,
    "Month": 3,
    "mm": -14.56
  },
  {
    "Year": 1997,
    "Month": 4,
    "mm": -13.6
  },
  {
    "Year": 1997,
    "Month": 5,
    "mm": -11.54
  },
  {
    "Year": 1997,
    "Month": 6,
    "mm": -13.34
  },
  {
    "Year": 1997,
    "Month": 7,
    "mm": -9.64
  },
  {
    "Year": 1997,
    "Month": 8,
    "mm": -10.12
  },
  {
    "Year": 1997,
    "Month": 9,
    "mm": -6.98
  },
  {
    "Year": 1997,
    "Month": 10,
    "mm": -6.7
  },
  {
    "Year": 1997,
    "Month": 11,
    "mm": -8.33
  },
  {
    "Year": 1997,
    "Month": 12,
    "mm": -11.01
  },
  {
    "Year": 1998,
    "Month": 1,
    "mm": -9.63
  },
  {
    "Year": 1998,
    "Month": 2,
    "mm": -8.49
  },
  {
    "Year": 1998,
    "Month": 3,
    "mm": -9.75
  },
  {
    "Year": 1998,
    "Month": 4,
    "mm": -8.11
  },
  {
    "Year": 1998,
    "Month": 5,
    "mm": -10.95
  },
  {
    "Year": 1998,
    "Month": 6,
    "mm": -13.92
  },
  {
    "Year": 1998,
    "Month": 7,
    "mm": -16.08
  },
  {
    "Year": 1998,
    "Month": 8,
    "mm": -16.94
  },
  {
    "Year": 1998,
    "Month": 9,
    "mm": -17.76
  },
  {
    "Year": 1998,
    "Month": 10,
    "mm": -18.05
  },
  {
    "Year": 1998,
    "Month": 11,
    "mm": -18.66
  },
  {
    "Year": 1998,
    "Month": 12,
    "mm": -16.9
  },
  {
    "Year": 1999,
    "Month": 1,
    "mm": -13.66
  },
  {
    "Year": 1999,
    "Month": 2,
    "mm": -10.49
  },
  {
    "Year": 1999,
    "Month": 3,
    "mm": -9.01
  },
  {
    "Year": 1999,
    "Month": 4,
    "mm": -10.95
  },
  {
    "Year": 1999,
    "Month": 5,
    "mm": -9.98
  },
  {
    "Year": 1999,
    "Month": 6,
    "mm": -11.29
  },
  {
    "Year": 1999,
    "Month": 7,
    "mm": -11.03
  },
  {
    "Year": 1999,
    "Month": 8,
    "mm": -11.05
  },
  {
    "Year": 1999,
    "Month": 9,
    "mm": -9.47
  },
  {
    "Year": 1999,
    "Month": 10,
    "mm": -8.73
  },
  {
    "Year": 1999,
    "Month": 11,
    "mm": -9.88
  },
  {
    "Year": 1999,
    "Month": 12,
    "mm": -7.62
  },
  {
    "Year": 2000,
    "Month": 1,
    "mm": -4.66
  },
  {
    "Year": 2000,
    "Month": 2,
    "mm": -6.96
  },
  {
    "Year": 2000,
    "Month": 3,
    "mm": -6.15
  },
  {
    "Year": 2000,
    "Month": 4,
    "mm": -8.26
  },
  {
    "Year": 2000,
    "Month": 5,
    "mm": -7.45
  },
  {
    "Year": 2000,
    "Month": 6,
    "mm": -8.7
  },
  {
    "Year": 2000,
    "Month": 7,
    "mm": -8.87
  },
  {
    "Year": 2000,
    "Month": 8,
    "mm": -8.79
  },
  {
    "Year": 2000,
    "Month": 9,
    "mm": -6.9
  },
  {
    "Year": 2000,
    "Month": 10,
    "mm": -1.72
  },
  {
    "Year": 2000,
    "Month": 11,
    "mm": -5.52
  },
  {
    "Year": 2000,
    "Month": 12,
    "mm": -7.97
  },
  {
    "Year": 2001,
    "Month": 1,
    "mm": -2.42
  },
  {
    "Year": 2001,
    "Month": 2,
    "mm": -2.05
  },
  {
    "Year": 2001,
    "Month": 3,
    "mm": -1.68
  },
  {
    "Year": 2001,
    "Month": 4,
    "mm": -0.3
  },
  {
    "Year": 2001,
    "Month": 5,
    "mm": -2.53
  },
  {
    "Year": 2001,
    "Month": 6,
    "mm": -2.3
  },
  {
    "Year": 2001,
    "Month": 7,
    "mm": -0.49
  },
  {
    "Year": 2001,
    "Month": 8,
    "mm": -0.63
  },
  {
    "Year": 2001,
    "Month": 9,
    "mm": 0.62
  },
  {
    "Year": 2001,
    "Month": 10,
    "mm": -0.77
  },
  {
    "Year": 2001,
    "Month": 11,
    "mm": -1.04
  },
  {
    "Year": 2001,
    "Month": 12,
    "mm": -2.81
  },
  {
    "Year": 2002,
    "Month": 1,
    "mm": 1.44
  },
  {
    "Year": 2002,
    "Month": 2,
    "mm": 2.74
  },
  {
    "Year": 2002,
    "Month": 3,
    "mm": -0.86
  },
  {
    "Year": 2002,
    "Month": 4,
    "mm": 1.66
  },
  {
    "Year": 2002,
    "Month": 5,
    "mm": 1.57
  },
  {
    "Year": 2002,
    "Month": 6,
    "mm": 0.73
  },
  {
    "Year": 2002,
    "Month": 7,
    "mm": 2.89
  },
  {
    "Year": 2002,
    "Month": 8,
    "mm": 6.28
  },
  {
    "Year": 2002,
    "Month": 9,
    "mm": 3.51
  },
  {
    "Year": 2002,
    "Month": 10,
    "mm": 5.4
  },
  {
    "Year": 2002,
    "Month": 11,
    "mm": 5.67
  },
  {
    "Year": 2002,
    "Month": 12,
    "mm": 3.29
  },
  {
    "Year": 2003,
    "Month": 1,
    "mm": 6.4
  },
  {
    "Year": 2003,
    "Month": 2,
    "mm": 8.48
  },
  {
    "Year": 2003,
    "Month": 3,
    "mm": 6.76
  },
  {
    "Year": 2003,
    "Month": 4,
    "mm": 6.87
  },
  {
    "Year": 2003,
    "Month": 5,
    "mm": 6.49
  },
  {
    "Year": 2003,
    "Month": 6,
    "mm": 4.64
  },
  {
    "Year": 2003,
    "Month": 7,
    "mm": 5.45
  },
  {
    "Year": 2003,
    "Month": 8,
    "mm": 6.04
  },
  {
    "Year": 2003,
    "Month": 9,
    "mm": 6.34
  },
  {
    "Year": 2003,
    "Month": 10,
    "mm": 6.79
  },
  {
    "Year": 2003,
    "Month": 11,
    "mm": 3.21
  },
  {
    "Year": 2003,
    "Month": 12,
    "mm": 6.66
  },
  {
    "Year": 2004,
    "Month": 1,
    "mm": 11.7
  },
  {
    "Year": 2004,
    "Month": 2,
    "mm": 7.88
  },
  {
    "Year": 2004,
    "Month": 3,
    "mm": 8.04
  },
  {
    "Year": 2004,
    "Month": 4,
    "mm": 9.56
  },
  {
    "Year": 2004,
    "Month": 5,
    "mm": 4.72
  },
  {
    "Year": 2004,
    "Month": 6,
    "mm": 6.85
  },
  {
    "Year": 2004,
    "Month": 7,
    "mm": 8.18
  },
  {
    "Year": 2004,
    "Month": 8,
    "mm": 9.66
  },
  {
    "Year": 2004,
    "Month": 9,
    "mm": 9.3
  },
  {
    "Year": 2004,
    "Month": 10,
    "mm": 7.96
  },
  {
    "Year": 2004,
    "Month": 11,
    "mm": 7.31
  },
  {
    "Year": 2004,
    "Month": 12,
    "mm": 11.1
  },
  {
    "Year": 2005,
    "Month": 1,
    "mm": 10.89
  },
  {
    "Year": 2005,
    "Month": 2,
    "mm": 13.9
  },
  {
    "Year": 2005,
    "Month": 3,
    "mm": 13.81
  },
  {
    "Year": 2005,
    "Month": 4,
    "mm": 13.13
  },
  {
    "Year": 2005,
    "Month": 5,
    "mm": 13.49
  },
  {
    "Year": 2005,
    "Month": 6,
    "mm": 13.36
  },
  {
    "Year": 2005,
    "Month": 7,
    "mm": 13.58
  },
  {
    "Year": 2005,
    "Month": 8,
    "mm": 12.33
  },
  {
    "Year": 2005,
    "Month": 9,
    "mm": 12.87
  },
  {
    "Year": 2005,
    "Month": 10,
    "mm": 10.76
  },
  {
    "Year": 2005,
    "Month": 11,
    "mm": 14.61
  },
  {
    "Year": 2005,
    "Month": 12,
    "mm": 13.67
  },
  {
    "Year": 2006,
    "Month": 1,
    "mm": 14.07
  },
  {
    "Year": 2006,
    "Month": 2,
    "mm": 13.72
  },
  {
    "Year": 2006,
    "Month": 3,
    "mm": 12.07
  },
  {
    "Year": 2006,
    "Month": 4,
    "mm": 11.56
  },
  {
    "Year": 2006,
    "Month": 5,
    "mm": 13.91
  },
  {
    "Year": 2006,
    "Month": 6,
    "mm": 15.02
  },
  {
    "Year": 2006,
    "Month": 7,
    "mm": 16.32
  },
  {
    "Year": 2006,
    "Month": 8,
    "mm": 13.59
  },
  {
    "Year": 2006,
    "Month": 9,
    "mm": 16.3
  },
  {
    "Year": 2006,
    "Month": 10,
    "mm": 15.19
  },
  {
    "Year": 2006,
    "Month": 11,
    "mm": 14.06
  },
  {
    "Year": 2006,
    "Month": 12,
    "mm": 14.75
  },
  {
    "Year": 2007,
    "Month": 1,
    "mm": 16.11
  },
  {
    "Year": 2007,
    "Month": 2,
    "mm": 17.32
  },
  {
    "Year": 2007,
    "Month": 3,
    "mm": 15.19
  },
  {
    "Year": 2007,
    "Month": 4,
    "mm": 17.39
  },
  {
    "Year": 2007,
    "Month": 5,
    "mm": 14.82
  },
  {
    "Year": 2007,
    "Month": 6,
    "mm": 15.77
  },
  {
    "Year": 2007,
    "Month": 7,
    "mm": 13.24
  },
  {
    "Year": 2007,
    "Month": 8,
    "mm": 14.53
  },
  {
    "Year": 2007,
    "Month": 9,
    "mm": 12.11
  },
  {
    "Year": 2007,
    "Month": 10,
    "mm": 12.95
  },
  {
    "Year": 2007,
    "Month": 11,
    "mm": 15.92
  },
  {
    "Year": 2007,
    "Month": 12,
    "mm": 13.69
  },
  {
    "Year": 2008,
    "Month": 1,
    "mm": 17.84
  },
  {
    "Year": 2008,
    "Month": 2,
    "mm": 14.64
  },
  {
    "Year": 2008,
    "Month": 3,
    "mm": 14.79
  },
  {
    "Year": 2008,
    "Month": 4,
    "mm": 13.22
  },
  {
    "Year": 2008,
    "Month": 5,
    "mm": 18.58
  },
  {
    "Year": 2008,
    "Month": 6,
    "mm": 20.72
  },
  {
    "Year": 2008,
    "Month": 7,
    "mm": 18.61
  },
  {
    "Year": 2008,
    "Month": 8,
    "mm": 18.66
  },
  {
    "Year": 2008,
    "Month": 9,
    "mm": 16.45
  },
  {
    "Year": 2008,
    "Month": 10,
    "mm": 17.69
  },
  {
    "Year": 2008,
    "Month": 11,
    "mm": 17.33
  },
  {
    "Year": 2008,
    "Month": 12,
    "mm": 18.57
  },
  {
    "Year": 2009,
    "Month": 1,
    "mm": 20.56
  },
  {
    "Year": 2009,
    "Month": 2,
    "mm": 20.55
  },
  {
    "Year": 2009,
    "Month": 3,
    "mm": 20.64
  },
  {
    "Year": 2009,
    "Month": 4,
    "mm": 20.29
  },
  {
    "Year": 2009,
    "Month": 5,
    "mm": 20.79
  },
  {
    "Year": 2009,
    "Month": 6,
    "mm": 21.55
  },
  {
    "Year": 2009,
    "Month": 7,
    "mm": 21.68
  },
  {
    "Year": 2009,
    "Month": 8,
    "mm": 23.25
  },
  {
    "Year": 2009,
    "Month": 9,
    "mm": 24.41
  },
  {
    "Year": 2009,
    "Month": 10,
    "mm": 25.03
  },
  {
    "Year": 2009,
    "Month": 11,
    "mm": 26.47
  },
  {
    "Year": 2009,
    "Month": 12,
    "mm": 24.58
  },
  {
    "Year": 2010,
    "Month": 1,
    "mm": 26.15
  },
  {
    "Year": 2010,
    "Month": 2,
    "mm": 26.71
  },
  {
    "Year": 2010,
    "Month": 3,
    "mm": 25.89
  },
  {
    "Year": 2010,
    "Month": 4,
    "mm": 24.6
  },
  {
    "Year": 2010,
    "Month": 5,
    "mm": 27.41
  },
  {
    "Year": 2010,
    "Month": 6,
    "mm": 28.52
  },
  {
    "Year": 2010,
    "Month": 7,
    "mm": 25.06
  },
  {
    "Year": 2010,
    "Month": 8,
    "mm": 22.11
  },
  {
    "Year": 2010,
    "Month": 9,
    "mm": 20.12
  },
  {
    "Year": 2010,
    "Month": 10,
    "mm": 19.94
  },
  {
    "Year": 2010,
    "Month": 11,
    "mm": 18.62
  },
  {
    "Year": 2010,
    "Month": 12,
    "mm": 18.68
  },
  {
    "Year": 2011,
    "Month": 1,
    "mm": 21.41
  },
  {
    "Year": 2011,
    "Month": 2,
    "mm": 21.88
  },
  {
    "Year": 2011,
    "Month": 3,
    "mm": 18.48
  },
  {
    "Year": 2011,
    "Month": 4,
    "mm": 19.38
  },
  {
    "Year": 2011,
    "Month": 5,
    "mm": 20.42
  },
  {
    "Year": 2011,
    "Month": 6,
    "mm": 24.15
  },
  {
    "Year": 2011,
    "Month": 7,
    "mm": 22.83
  },
  {
    "Year": 2011,
    "Month": 8,
    "mm": 28.06
  },
  {
    "Year": 2011,
    "Month": 9,
    "mm": 24.41
  },
  {
    "Year": 2011,
    "Month": 10,
    "mm": 25.42
  },
  {
    "Year": 2011,
    "Month": 11,
    "mm": 23.52
  },
  {
    "Year": 2011,
    "Month": 12,
    "mm": 24.83
  },
  {
    "Year": 2012,
    "Month": 1,
    "mm": 31.91
  },
  {
    "Year": 2012,
    "Month": 2,
    "mm": 32.19
  },
  {
    "Year": 2012,
    "Month": 3,
    "mm": 29.53
  },
  {
    "Year": 2012,
    "Month": 4,
    "mm": 30.57
  },
  {
    "Year": 2012,
    "Month": 5,
    "mm": 31.54
  },
  {
    "Year": 2012,
    "Month": 6,
    "mm": 33.94
  },
  {
    "Year": 2012,
    "Month": 7,
    "mm": 35.29
  },
  {
    "Year": 2012,
    "Month": 8,
    "mm": 34.86
  },
  {
    "Year": 2012,
    "Month": 9,
    "mm": 35.78
  },
  {
    "Year": 2012,
    "Month": 10,
    "mm": 35.79
  },
  {
    "Year": 2012,
    "Month": 11,
    "mm": 35.98
  },
  {
    "Year": 2012,
    "Month": 12,
    "mm": 37.42
  },
  {
    "Year": 2013,
    "Month": 1,
    "mm": 40.08
  },
  {
    "Year": 2013,
    "Month": 2,
    "mm": 39.88
  },
  {
    "Year": 2013,
    "Month": 3,
    "mm": 39.13
  },
  {
    "Year": 2013,
    "Month": 4,
    "mm": 36.41
  },
  {
    "Year": 2013,
    "Month": 5,
    "mm": 35.73
  },
  {
    "Year": 2013,
    "Month": 6,
    "mm": 34.56
  },
  {
    "Year": 2013,
    "Month": 7,
    "mm": 33.98
  },
  {
    "Year": 2013,
    "Month": 8,
    "mm": 34.02
  },
  {
    "Year": 2013,
    "Month": 9,
    "mm": 33.63
  },
  {
    "Year": 2013,
    "Month": 10,
    "mm": 34.88
  },
  {
    "Year": 2013,
    "Month": 11,
    "mm": 36.64
  },
  {
    "Year": 2013,
    "Month": 12,
    "mm": 34.2
  },
  {
    "Year": 2014,
    "Month": 1,
    "mm": 39.56
  },
  {
    "Year": 2014,
    "Month": 2,
    "mm": 42.3
  },
  {
    "Year": 2014,
    "Month": 3,
    "mm": 40.49
  },
  {
    "Year": 2014,
    "Month": 4,
    "mm": 37.61
  },
  {
    "Year": 2014,
    "Month": 5,
    "mm": 36.87
  },
  {
    "Year": 2014,
    "Month": 6,
    "mm": 38.63
  },
  {
    "Year": 2014,
    "Month": 7,
    "mm": 40.4
  },
  {
    "Year": 2014,
    "Month": 8,
    "mm": 42.68
  },
  {
    "Year": 2014,
    "Month": 9,
    "mm": 39.23
  },
  {
    "Year": 2014,
    "Month": 10,
    "mm": 41.19
  },
  {
    "Year": 2014,
    "Month": 11,
    "mm": 38.18
  },
  {
    "Year": 2014,
    "Month": 12,
    "mm": 43.05
  },
  {
    "Year": 2015,
    "Month": 1,
    "mm": 44.05
  },
  {
    "Year": 2015,
    "Month": 2,
    "mm": 49.42
  },
  {
    "Year": 2015,
    "Month": 3,
    "mm": 47.19
  },
  {
    "Year": 2015,
    "Month": 4,
    "mm": 48.33
  },
  {
    "Year": 2015,
    "Month": 5,
    "mm": 47.07
  },
  {
    "Year": 2015,
    "Month": 6,
    "mm": 52.06
  },
  {
    "Year": 2015,
    "Month": 7,
    "mm": 53.19
  },
  {
    "Year": 2015,
    "Month": 8,
    "mm": 54.48
  },
  {
    "Year": 2015,
    "Month": 9,
    "mm": 54.45
  },
  {
    "Year": 2015,
    "Month": 10,
    "mm": 55.21
  },
  {
    "Year": 2015,
    "Month": 11,
    "mm": 54.04
  },
  {
    "Year": 2015,
    "Month": 12,
    "mm": 52
  },
  {
    "Year": 2016,
    "Month": 1,
    "mm": 57.2
  },
  {
    "Year": 2016,
    "Month": 2,
    "mm": 57.13
  },
  {
    "Year": 2016,
    "Month": 3,
    "mm": 57.24
  },
  {
    "Year": 2016,
    "Month": 4,
    "mm": 54.2
  },
  {
    "Year": 2016,
    "Month": 5,
    "mm": 51.7
  },
  {
    "Year": 2016,
    "Month": 6,
    "mm": 54.27
  },
  {
    "Year": 2016,
    "Month": 7,
    "mm": 51.15
  },
  {
    "Year": 2016,
    "Month": 8,
    "mm": 50.18
  },
  {
    "Year": 2016,
    "Month": 9,
    "mm": 50.58
  },
  {
    "Year": 2016,
    "Month": 10,
    "mm": 49.12
  },
  {
    "Year": 2016,
    "Month": 11,
    "mm": 53.97
  },
  {
    "Year": 2016,
    "Month": 12,
    "mm": 51.49
  },
  {
    "Year": 2017,
    "Month": 1,
    "mm": 53.37
  },
  {
    "Year": 2017,
    "Month": 2,
    "mm": 52.23
  },
  {
    "Year": 2017,
    "Month": 3,
    "mm": 52.77
  },
  {
    "Year": 2017,
    "Month": 4,
    "mm": 53.99
  },
  {
    "Year": 2017,
    "Month": 5,
    "mm": 52.25
  },
  {
    "Year": 2017,
    "Month": 6,
    "mm": 53.59
  },
  {
    "Year": 2017,
    "Month": 7,
    "mm": 54.35
  },
  {
    "Year": 2017,
    "Month": 8,
    "mm": 56.08
  },
  {
    "Year": 2017,
    "Month": 9,
    "mm": 55.18
  },
  {
    "Year": 2017,
    "Month": 10,
    "mm": 53.58
  },
  {
    "Year": 2017,
    "Month": 11,
    "mm": 57.76
  },
  {
    "Year": 2017,
    "Month": 12,
    "mm": 57.01
  },
  {
    "Year": 2018,
    "Month": 1,
    "mm": 58.56
  },
  {
    "Year": 2018,
    "Month": 2,
    "mm": 57.68
  },
  {
    "Year": 2018,
    "Month": 3,
    "mm": 57.5
  },
  {
    "Year": 2018,
    "Month": 4,
    "mm": 54.92
  },
  {
    "Year": 2018,
    "Month": 5,
    "mm": 57.4
  },
  {
    "Year": 2018,
    "Month": 6,
    "mm": 58.01
  },
  {
    "Year": 2018,
    "Month": 7,
    "mm": 57.32
  },
  {
    "Year": 2018,
    "Month": 8,
    "mm": 57.6
  },
  {
    "Year": 2018,
    "Month": 9,
    "mm": 60.6
  },
  {
    "Year": 2018,
    "Month": 10,
    "mm": 61.13
  },
  {
    "Year": 2018,
    "Month": 11,
    "mm": 58.73
  },
  {
    "Year": 2018,
    "Month": 12,
    "mm": 58.69
  },
  {
    "Year": 2019,
    "Month": 1,
    "mm": 63.89
  },
  {
    "Year": 2019,
    "Month": 2,
    "mm": 64.7
  },
  {
    "Year": 2019,
    "Month": 3,
    "mm": 64.17
  },
  {
    "Year": 2019,
    "Month": 4,
    "mm": 62.94
  },
  {
    "Year": 2019,
    "Month": 5,
    "mm": 65.67
  },
  {
    "Year": 2019,
    "Month": 6,
    "mm": 65.72
  },
  {
    "Year": 2019,
    "Month": 7,
    "mm": 65.02
  },
  {
    "Year": 2019,
    "Month": 8,
    "mm": 68.23
  },
  {
    "Year": 2019,
    "Month": 9,
    "mm": 67.99
  },
  {
    "Year": 2019,
    "Month": 10,
    "mm": 64.91
  },
  {
    "Year": 2019,
    "Month": 11,
    "mm": 66.38
  },
  {
    "Year": 2019,
    "Month": 12,
    "mm": 65.94
  },
  {
    "Year": 2020,
    "Month": 1,
    "mm": 65.11
  },
  {
    "Year": 2020,
    "Month": 2,
    "mm": 64.66
  },
  {
    "Year": 2020,
    "Month": 3,
    "mm": 65.58
  },
  {
    "Year": 2020,
    "Month": 4,
    "mm": 65.52
  },
  {
    "Year": 2020,
    "Month": 5,
    "mm": 69.61
  },
  {
    "Year": 2020,
    "Month": 6,
    "mm": 66.07
  },
  {
    "Year": 2020,
    "Month": 7,
    "mm": 66.1
  },
  {
    "Year": 2020,
    "Month": 8,
    "mm": 66.3
  },
  {
    "Year": 2020,
    "Month": 9,
    "mm": 67.22
  },
  {
    "Year": 2020,
    "Month": 10,
    "mm": 66.79
  },
  {
    "Year": 2020,
    "Month": 11,
    "mm": 67.35
  },
  {
    "Year": 2020,
    "Month": 12,
    "mm": 65.76
  },
  {
    "Year": 2021,
    "Month": 1,
    "mm": 72.2
  },
  {
    "Year": 2021,
    "Month": 2,
    "mm": 67.33
  },
  {
    "Year": 2021,
    "Month": 3,
    "mm": 68.8
  },
  {
    "Year": 2021,
    "Month": 4,
    "mm": 70.47
  },
  {
    "Year": 2021,
    "Month": 5,
    "mm": 71.17
  },
  {
    "Year": 2021,
    "Month": 6,
    "mm": 69.7
  },
  {
    "Year": 2021,
    "Month": 7,
    "mm": 70.73
  },
  {
    "Year": 2021,
    "Month": 8,
    "mm": 73.55
  },
  {
    "Year": 2021,
    "Month": 9,
    "mm": 72.08
  },
  {
    "Year": 2021,
    "Month": 10,
    "mm": 72.51
  },
  {
    "Year": 2021,
    "Month": 11,
    "mm": 70.48
  },
  {
    "Year": 2021,
    "Month": 12,
    "mm": 70.99
  },
  {
    "Year": 2022,
    "Month": 1,
    "mm": 76.4
  },
  {
    "Year": 2022,
    "Month": 2,
    "mm": 74.03
  },
  {
    "Year": 2022,
    "Month": 3,
    "mm": 70.43
  },
  {
    "Year": 2022,
    "Month": 4,
    "mm": 74.37
  },
  {
    "Year": 2022,
    "Month": 5,
    "mm": 70.51
  },
  {
    "Year": 2022,
    "Month": 6,
    "mm": 71.97
  },
  {
    "Year": 2022,
    "Month": 7,
    "mm": 74.67
  },
  {
    "Year": 2022,
    "Month": 8,
    "mm": 75.57
  },
  {
    "Year": 2022,
    "Month": 9,
    "mm": 74.86
  },
  {
    "Year": 2022,
    "Month": 10,
    "mm": 74.35
  },
  {
    "Year": 2022,
    "Month": 11,
    "mm": 72.37
  },
  {
    "Year": 2022,
    "Month": 12,
    "mm": 76.22
  },
  {
    "Year": 2023,
    "Month": 1,
    "mm": 78.6
  },
  {
    "Year": 2023,
    "Month": 2,
    "mm": 78.14
  },
  {
    "Year": 2023,
    "Month": 3,
    "mm": 77.07
  },
  {
    "Year": 2023,
    "Month": 4,
    "mm": 75.47
  },
  {
    "Year": 2023,
    "Month": 5,
    "mm": 78.5
  }
]

const VulnChart = () => {
  const labels = data.map((entry) => `${entry.Month}/${entry.Year}`);
  const datasetValues = data.map((entry) => entry.mm);

  return (
    <div >
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Sea Level",
              data: datasetValues,
              backgroundColor: "rgba(0, 0, 0, 0)", 
              borderColor: "#ADD8E6",
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
              },
            },
            y: {
              title: {
                display: true,
                text: 'mm', 
              },
            },
          },
        }}
      />
    </div>
  );
};

export default VulnChart;