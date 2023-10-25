"use client"
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = [
  {
    "Year": 1983,
    "Month": 7,
    "CH4": 1626.09
  },
  {
    "Year": 1983,
    "Month": 8,
    "CH4": 1628.01
  },
  {
    "Year": 1983,
    "Month": 9,
    "CH4": 1638.42
  },
  {
    "Year": 1983,
    "Month": 10,
    "CH4": 1644.81
  },
  {
    "Year": 1983,
    "Month": 11,
    "CH4": 1642.59
  },
  {
    "Year": 1983,
    "Month": 12,
    "CH4": 1639.54
  },
  {
    "Year": 1984,
    "Month": 1,
    "CH4": 1638.79
  },
  {
    "Year": 1984,
    "Month": 2,
    "CH4": 1638.85
  },
  {
    "Year": 1984,
    "Month": 3,
    "CH4": 1640.83
  },
  {
    "Year": 1984,
    "Month": 4,
    "CH4": 1643.97
  },
  {
    "Year": 1984,
    "Month": 5,
    "CH4": 1643.12
  },
  {
    "Year": 1984,
    "Month": 6,
    "CH4": 1639.73
  },
  {
    "Year": 1984,
    "Month": 7,
    "CH4": 1638
  },
  {
    "Year": 1984,
    "Month": 8,
    "CH4": 1641.67
  },
  {
    "Year": 1984,
    "Month": 9,
    "CH4": 1650.6
  },
  {
    "Year": 1984,
    "Month": 10,
    "CH4": 1654.61
  },
  {
    "Year": 1984,
    "Month": 11,
    "CH4": 1653.79
  },
  {
    "Year": 1984,
    "Month": 12,
    "CH4": 1656.19
  },
  {
    "Year": 1985,
    "Month": 1,
    "CH4": 1655.6
  },
  {
    "Year": 1985,
    "Month": 2,
    "CH4": 1652.23
  },
  {
    "Year": 1985,
    "Month": 3,
    "CH4": 1654.61
  },
  {
    "Year": 1985,
    "Month": 4,
    "CH4": 1658.2
  },
  {
    "Year": 1985,
    "Month": 5,
    "CH4": 1655.86
  },
  {
    "Year": 1985,
    "Month": 6,
    "CH4": 1650.05
  },
  {
    "Year": 1985,
    "Month": 7,
    "CH4": 1646.83
  },
  {
    "Year": 1985,
    "Month": 8,
    "CH4": 1652.23
  },
  {
    "Year": 1985,
    "Month": 9,
    "CH4": 1662.48
  },
  {
    "Year": 1985,
    "Month": 10,
    "CH4": 1667.51
  },
  {
    "Year": 1985,
    "Month": 11,
    "CH4": 1666.8
  },
  {
    "Year": 1985,
    "Month": 12,
    "CH4": 1666.04
  },
  {
    "Year": 1986,
    "Month": 1,
    "CH4": 1666.29
  },
  {
    "Year": 1986,
    "Month": 2,
    "CH4": 1666.91
  },
  {
    "Year": 1986,
    "Month": 3,
    "CH4": 1669.27
  },
  {
    "Year": 1986,
    "Month": 4,
    "CH4": 1670.81
  },
  {
    "Year": 1986,
    "Month": 5,
    "CH4": 1668.43
  },
  {
    "Year": 1986,
    "Month": 6,
    "CH4": 1664.77
  },
  {
    "Year": 1986,
    "Month": 7,
    "CH4": 1662.35
  },
  {
    "Year": 1986,
    "Month": 8,
    "CH4": 1664.37
  },
  {
    "Year": 1986,
    "Month": 9,
    "CH4": 1672.57
  },
  {
    "Year": 1986,
    "Month": 10,
    "CH4": 1678.69
  },
  {
    "Year": 1986,
    "Month": 11,
    "CH4": 1678.98
  },
  {
    "Year": 1986,
    "Month": 12,
    "CH4": 1679.11
  },
  {
    "Year": 1987,
    "Month": 1,
    "CH4": 1679.39
  },
  {
    "Year": 1987,
    "Month": 2,
    "CH4": 1679.03
  },
  {
    "Year": 1987,
    "Month": 3,
    "CH4": 1680.07
  },
  {
    "Year": 1987,
    "Month": 4,
    "CH4": 1681.38
  },
  {
    "Year": 1987,
    "Month": 5,
    "CH4": 1681.83
  },
  {
    "Year": 1987,
    "Month": 6,
    "CH4": 1679.99
  },
  {
    "Year": 1987,
    "Month": 7,
    "CH4": 1675.99
  },
  {
    "Year": 1987,
    "Month": 8,
    "CH4": 1677.13
  },
  {
    "Year": 1987,
    "Month": 9,
    "CH4": 1685.58
  },
  {
    "Year": 1987,
    "Month": 10,
    "CH4": 1691.58
  },
  {
    "Year": 1987,
    "Month": 11,
    "CH4": 1691.16
  },
  {
    "Year": 1987,
    "Month": 12,
    "CH4": 1690.49
  },
  {
    "Year": 1988,
    "Month": 1,
    "CH4": 1692.1
  },
  {
    "Year": 1988,
    "Month": 2,
    "CH4": 1692.69
  },
  {
    "Year": 1988,
    "Month": 3,
    "CH4": 1691.44
  },
  {
    "Year": 1988,
    "Month": 4,
    "CH4": 1690.12
  },
  {
    "Year": 1988,
    "Month": 5,
    "CH4": 1689.06
  },
  {
    "Year": 1988,
    "Month": 6,
    "CH4": 1687.07
  },
  {
    "Year": 1988,
    "Month": 7,
    "CH4": 1685.8
  },
  {
    "Year": 1988,
    "Month": 8,
    "CH4": 1689.1
  },
  {
    "Year": 1988,
    "Month": 9,
    "CH4": 1695.86
  },
  {
    "Year": 1988,
    "Month": 10,
    "CH4": 1701.08
  },
  {
    "Year": 1988,
    "Month": 11,
    "CH4": 1702.89
  },
  {
    "Year": 1988,
    "Month": 12,
    "CH4": 1702
  },
  {
    "Year": 1989,
    "Month": 1,
    "CH4": 1700.57
  },
  {
    "Year": 1989,
    "Month": 2,
    "CH4": 1701.06
  },
  {
    "Year": 1989,
    "Month": 3,
    "CH4": 1702.47
  },
  {
    "Year": 1989,
    "Month": 4,
    "CH4": 1703.6
  },
  {
    "Year": 1989,
    "Month": 5,
    "CH4": 1703.35
  },
  {
    "Year": 1989,
    "Month": 6,
    "CH4": 1700.21
  },
  {
    "Year": 1989,
    "Month": 7,
    "CH4": 1698.22
  },
  {
    "Year": 1989,
    "Month": 8,
    "CH4": 1701.97
  },
  {
    "Year": 1989,
    "Month": 9,
    "CH4": 1707.17
  },
  {
    "Year": 1989,
    "Month": 10,
    "CH4": 1710.53
  },
  {
    "Year": 1989,
    "Month": 11,
    "CH4": 1713.11
  },
  {
    "Year": 1989,
    "Month": 12,
    "CH4": 1713.22
  },
  {
    "Year": 1990,
    "Month": 1,
    "CH4": 1712.12
  },
  {
    "Year": 1990,
    "Month": 2,
    "CH4": 1713.5
  },
  {
    "Year": 1990,
    "Month": 3,
    "CH4": 1714.39
  },
  {
    "Year": 1990,
    "Month": 4,
    "CH4": 1712.52
  },
  {
    "Year": 1990,
    "Month": 5,
    "CH4": 1710.55
  },
  {
    "Year": 1990,
    "Month": 6,
    "CH4": 1708.33
  },
  {
    "Year": 1990,
    "Month": 7,
    "CH4": 1706.42
  },
  {
    "Year": 1990,
    "Month": 8,
    "CH4": 1710.09
  },
  {
    "Year": 1990,
    "Month": 9,
    "CH4": 1717.56
  },
  {
    "Year": 1990,
    "Month": 10,
    "CH4": 1722.07
  },
  {
    "Year": 1990,
    "Month": 11,
    "CH4": 1723.51
  },
  {
    "Year": 1990,
    "Month": 12,
    "CH4": 1723.31
  },
  {
    "Year": 1991,
    "Month": 1,
    "CH4": 1721.54
  },
  {
    "Year": 1991,
    "Month": 2,
    "CH4": 1721.17
  },
  {
    "Year": 1991,
    "Month": 3,
    "CH4": 1722.1
  },
  {
    "Year": 1991,
    "Month": 4,
    "CH4": 1722.51
  },
  {
    "Year": 1991,
    "Month": 5,
    "CH4": 1722.18
  },
  {
    "Year": 1991,
    "Month": 6,
    "CH4": 1718.98
  },
  {
    "Year": 1991,
    "Month": 7,
    "CH4": 1716.07
  },
  {
    "Year": 1991,
    "Month": 8,
    "CH4": 1719.22
  },
  {
    "Year": 1991,
    "Month": 9,
    "CH4": 1726.18
  },
  {
    "Year": 1991,
    "Month": 10,
    "CH4": 1732.79
  },
  {
    "Year": 1991,
    "Month": 11,
    "CH4": 1737.47
  },
  {
    "Year": 1991,
    "Month": 12,
    "CH4": 1739.61
  },
  {
    "Year": 1992,
    "Month": 1,
    "CH4": 1738.94
  },
  {
    "Year": 1992,
    "Month": 2,
    "CH4": 1737.4
  },
  {
    "Year": 1992,
    "Month": 3,
    "CH4": 1736.94
  },
  {
    "Year": 1992,
    "Month": 4,
    "CH4": 1736.64
  },
  {
    "Year": 1992,
    "Month": 5,
    "CH4": 1734.92
  },
  {
    "Year": 1992,
    "Month": 6,
    "CH4": 1731.56
  },
  {
    "Year": 1992,
    "Month": 7,
    "CH4": 1728.81
  },
  {
    "Year": 1992,
    "Month": 8,
    "CH4": 1730.3
  },
  {
    "Year": 1992,
    "Month": 9,
    "CH4": 1734.58
  },
  {
    "Year": 1992,
    "Month": 10,
    "CH4": 1737.67
  },
  {
    "Year": 1992,
    "Month": 11,
    "CH4": 1739.23
  },
  {
    "Year": 1992,
    "Month": 12,
    "CH4": 1738.55
  },
  {
    "Year": 1993,
    "Month": 1,
    "CH4": 1735.76
  },
  {
    "Year": 1993,
    "Month": 2,
    "CH4": 1734.39
  },
  {
    "Year": 1993,
    "Month": 3,
    "CH4": 1735.51
  },
  {
    "Year": 1993,
    "Month": 4,
    "CH4": 1736.69
  },
  {
    "Year": 1993,
    "Month": 5,
    "CH4": 1734.96
  },
  {
    "Year": 1993,
    "Month": 6,
    "CH4": 1730.85
  },
  {
    "Year": 1993,
    "Month": 7,
    "CH4": 1728.08
  },
  {
    "Year": 1993,
    "Month": 8,
    "CH4": 1731.2
  },
  {
    "Year": 1993,
    "Month": 9,
    "CH4": 1738.46
  },
  {
    "Year": 1993,
    "Month": 10,
    "CH4": 1743.36
  },
  {
    "Year": 1993,
    "Month": 11,
    "CH4": 1745.18
  },
  {
    "Year": 1993,
    "Month": 12,
    "CH4": 1744.27
  },
  {
    "Year": 1994,
    "Month": 1,
    "CH4": 1741.44
  },
  {
    "Year": 1994,
    "Month": 2,
    "CH4": 1740.88
  },
  {
    "Year": 1994,
    "Month": 3,
    "CH4": 1741.95
  },
  {
    "Year": 1994,
    "Month": 4,
    "CH4": 1741.94
  },
  {
    "Year": 1994,
    "Month": 5,
    "CH4": 1740.63
  },
  {
    "Year": 1994,
    "Month": 6,
    "CH4": 1736.91
  },
  {
    "Year": 1994,
    "Month": 7,
    "CH4": 1732.44
  },
  {
    "Year": 1994,
    "Month": 8,
    "CH4": 1734.09
  },
  {
    "Year": 1994,
    "Month": 9,
    "CH4": 1742.93
  },
  {
    "Year": 1994,
    "Month": 10,
    "CH4": 1749.84
  },
  {
    "Year": 1994,
    "Month": 11,
    "CH4": 1751.26
  },
  {
    "Year": 1994,
    "Month": 12,
    "CH4": 1751.59
  },
  {
    "Year": 1995,
    "Month": 1,
    "CH4": 1751.13
  },
  {
    "Year": 1995,
    "Month": 2,
    "CH4": 1749.5
  },
  {
    "Year": 1995,
    "Month": 3,
    "CH4": 1749
  },
  {
    "Year": 1995,
    "Month": 4,
    "CH4": 1749.43
  },
  {
    "Year": 1995,
    "Month": 5,
    "CH4": 1747.63
  },
  {
    "Year": 1995,
    "Month": 6,
    "CH4": 1742.83
  },
  {
    "Year": 1995,
    "Month": 7,
    "CH4": 1740.18
  },
  {
    "Year": 1995,
    "Month": 8,
    "CH4": 1743.58
  },
  {
    "Year": 1995,
    "Month": 9,
    "CH4": 1749.77
  },
  {
    "Year": 1995,
    "Month": 10,
    "CH4": 1754.36
  },
  {
    "Year": 1995,
    "Month": 11,
    "CH4": 1755.5
  },
  {
    "Year": 1995,
    "Month": 12,
    "CH4": 1753.84
  },
  {
    "Year": 1996,
    "Month": 1,
    "CH4": 1752.22
  },
  {
    "Year": 1996,
    "Month": 2,
    "CH4": 1752.72
  },
  {
    "Year": 1996,
    "Month": 3,
    "CH4": 1752.23
  },
  {
    "Year": 1996,
    "Month": 4,
    "CH4": 1749.59
  },
  {
    "Year": 1996,
    "Month": 5,
    "CH4": 1748.27
  },
  {
    "Year": 1996,
    "Month": 6,
    "CH4": 1746.03
  },
  {
    "Year": 1996,
    "Month": 7,
    "CH4": 1742.06
  },
  {
    "Year": 1996,
    "Month": 8,
    "CH4": 1744.24
  },
  {
    "Year": 1996,
    "Month": 9,
    "CH4": 1752.57
  },
  {
    "Year": 1996,
    "Month": 10,
    "CH4": 1758.87
  },
  {
    "Year": 1996,
    "Month": 11,
    "CH4": 1760.03
  },
  {
    "Year": 1996,
    "Month": 12,
    "CH4": 1756.91
  },
  {
    "Year": 1997,
    "Month": 1,
    "CH4": 1753.39
  },
  {
    "Year": 1997,
    "Month": 2,
    "CH4": 1753.86
  },
  {
    "Year": 1997,
    "Month": 3,
    "CH4": 1755.66
  },
  {
    "Year": 1997,
    "Month": 4,
    "CH4": 1755.53
  },
  {
    "Year": 1997,
    "Month": 5,
    "CH4": 1753.83
  },
  {
    "Year": 1997,
    "Month": 6,
    "CH4": 1750.13
  },
  {
    "Year": 1997,
    "Month": 7,
    "CH4": 1746.15
  },
  {
    "Year": 1997,
    "Month": 8,
    "CH4": 1747.87
  },
  {
    "Year": 1997,
    "Month": 9,
    "CH4": 1755
  },
  {
    "Year": 1997,
    "Month": 10,
    "CH4": 1760.25
  },
  {
    "Year": 1997,
    "Month": 11,
    "CH4": 1761.7
  },
  {
    "Year": 1997,
    "Month": 12,
    "CH4": 1761.9
  },
  {
    "Year": 1998,
    "Month": 1,
    "CH4": 1761.45
  },
  {
    "Year": 1998,
    "Month": 2,
    "CH4": 1761.43
  },
  {
    "Year": 1998,
    "Month": 3,
    "CH4": 1762.94
  },
  {
    "Year": 1998,
    "Month": 4,
    "CH4": 1764.71
  },
  {
    "Year": 1998,
    "Month": 5,
    "CH4": 1764.23
  },
  {
    "Year": 1998,
    "Month": 6,
    "CH4": 1760.33
  },
  {
    "Year": 1998,
    "Month": 7,
    "CH4": 1756.17
  },
  {
    "Year": 1998,
    "Month": 8,
    "CH4": 1760.18
  },
  {
    "Year": 1998,
    "Month": 9,
    "CH4": 1770.66
  },
  {
    "Year": 1998,
    "Month": 10,
    "CH4": 1776.24
  },
  {
    "Year": 1998,
    "Month": 11,
    "CH4": 1775.47
  },
  {
    "Year": 1998,
    "Month": 12,
    "CH4": 1774.04
  },
  {
    "Year": 1999,
    "Month": 1,
    "CH4": 1773.82
  },
  {
    "Year": 1999,
    "Month": 2,
    "CH4": 1773.92
  },
  {
    "Year": 1999,
    "Month": 3,
    "CH4": 1774.61
  },
  {
    "Year": 1999,
    "Month": 4,
    "CH4": 1775.02
  },
  {
    "Year": 1999,
    "Month": 5,
    "CH4": 1772.69
  },
  {
    "Year": 1999,
    "Month": 6,
    "CH4": 1767.37
  },
  {
    "Year": 1999,
    "Month": 7,
    "CH4": 1762.99
  },
  {
    "Year": 1999,
    "Month": 8,
    "CH4": 1764.66
  },
  {
    "Year": 1999,
    "Month": 9,
    "CH4": 1771.04
  },
  {
    "Year": 1999,
    "Month": 10,
    "CH4": 1776.66
  },
  {
    "Year": 1999,
    "Month": 11,
    "CH4": 1778.59
  },
  {
    "Year": 1999,
    "Month": 12,
    "CH4": 1777.26
  },
  {
    "Year": 2000,
    "Month": 1,
    "CH4": 1775.67
  },
  {
    "Year": 2000,
    "Month": 2,
    "CH4": 1775.75
  },
  {
    "Year": 2000,
    "Month": 3,
    "CH4": 1776.72
  },
  {
    "Year": 2000,
    "Month": 4,
    "CH4": 1777.32
  },
  {
    "Year": 2000,
    "Month": 5,
    "CH4": 1774.61
  },
  {
    "Year": 2000,
    "Month": 6,
    "CH4": 1768.16
  },
  {
    "Year": 2000,
    "Month": 7,
    "CH4": 1763.55
  },
  {
    "Year": 2000,
    "Month": 8,
    "CH4": 1765.57
  },
  {
    "Year": 2000,
    "Month": 9,
    "CH4": 1772.1
  },
  {
    "Year": 2000,
    "Month": 10,
    "CH4": 1777.14
  },
  {
    "Year": 2000,
    "Month": 11,
    "CH4": 1777.82
  },
  {
    "Year": 2000,
    "Month": 12,
    "CH4": 1775.38
  },
  {
    "Year": 2001,
    "Month": 1,
    "CH4": 1772.88
  },
  {
    "Year": 2001,
    "Month": 2,
    "CH4": 1772.51
  },
  {
    "Year": 2001,
    "Month": 3,
    "CH4": 1773.66
  },
  {
    "Year": 2001,
    "Month": 4,
    "CH4": 1773.89
  },
  {
    "Year": 2001,
    "Month": 5,
    "CH4": 1770.74
  },
  {
    "Year": 2001,
    "Month": 6,
    "CH4": 1765.85
  },
  {
    "Year": 2001,
    "Month": 7,
    "CH4": 1762.8
  },
  {
    "Year": 2001,
    "Month": 8,
    "CH4": 1764.3
  },
  {
    "Year": 2001,
    "Month": 9,
    "CH4": 1770.35
  },
  {
    "Year": 2001,
    "Month": 10,
    "CH4": 1775.5
  },
  {
    "Year": 2001,
    "Month": 11,
    "CH4": 1776.57
  },
  {
    "Year": 2001,
    "Month": 12,
    "CH4": 1775.92
  },
  {
    "Year": 2002,
    "Month": 1,
    "CH4": 1774.11
  },
  {
    "Year": 2002,
    "Month": 2,
    "CH4": 1772.82
  },
  {
    "Year": 2002,
    "Month": 3,
    "CH4": 1773.41
  },
  {
    "Year": 2002,
    "Month": 4,
    "CH4": 1772.76
  },
  {
    "Year": 2002,
    "Month": 5,
    "CH4": 1770.29
  },
  {
    "Year": 2002,
    "Month": 6,
    "CH4": 1766.91
  },
  {
    "Year": 2002,
    "Month": 7,
    "CH4": 1764.24
  },
  {
    "Year": 2002,
    "Month": 8,
    "CH4": 1766.84
  },
  {
    "Year": 2002,
    "Month": 9,
    "CH4": 1773.66
  },
  {
    "Year": 2002,
    "Month": 10,
    "CH4": 1778.27
  },
  {
    "Year": 2002,
    "Month": 11,
    "CH4": 1779.5
  },
  {
    "Year": 2002,
    "Month": 12,
    "CH4": 1779.65
  },
  {
    "Year": 2003,
    "Month": 1,
    "CH4": 1777.54
  },
  {
    "Year": 2003,
    "Month": 2,
    "CH4": 1774.82
  },
  {
    "Year": 2003,
    "Month": 3,
    "CH4": 1774.85
  },
  {
    "Year": 2003,
    "Month": 4,
    "CH4": 1775.81
  },
  {
    "Year": 2003,
    "Month": 5,
    "CH4": 1774.44
  },
  {
    "Year": 2003,
    "Month": 6,
    "CH4": 1771.69
  },
  {
    "Year": 2003,
    "Month": 7,
    "CH4": 1770.73
  },
  {
    "Year": 2003,
    "Month": 8,
    "CH4": 1774.29
  },
  {
    "Year": 2003,
    "Month": 9,
    "CH4": 1780.55
  },
  {
    "Year": 2003,
    "Month": 10,
    "CH4": 1784.7
  },
  {
    "Year": 2003,
    "Month": 11,
    "CH4": 1785.27
  },
  {
    "Year": 2003,
    "Month": 12,
    "CH4": 1783.56
  },
  {
    "Year": 2004,
    "Month": 1,
    "CH4": 1780.87
  },
  {
    "Year": 2004,
    "Month": 2,
    "CH4": 1779.96
  },
  {
    "Year": 2004,
    "Month": 3,
    "CH4": 1780.97
  },
  {
    "Year": 2004,
    "Month": 4,
    "CH4": 1780.72
  },
  {
    "Year": 2004,
    "Month": 5,
    "CH4": 1777.56
  },
  {
    "Year": 2004,
    "Month": 6,
    "CH4": 1772.3
  },
  {
    "Year": 2004,
    "Month": 7,
    "CH4": 1768.06
  },
  {
    "Year": 2004,
    "Month": 8,
    "CH4": 1769.77
  },
  {
    "Year": 2004,
    "Month": 9,
    "CH4": 1775.49
  },
  {
    "Year": 2004,
    "Month": 10,
    "CH4": 1779.7
  },
  {
    "Year": 2004,
    "Month": 11,
    "CH4": 1780.46
  },
  {
    "Year": 2004,
    "Month": 12,
    "CH4": 1778.37
  },
  {
    "Year": 2005,
    "Month": 1,
    "CH4": 1776.35
  },
  {
    "Year": 2005,
    "Month": 2,
    "CH4": 1775.81
  },
  {
    "Year": 2005,
    "Month": 3,
    "CH4": 1775.45
  },
  {
    "Year": 2005,
    "Month": 4,
    "CH4": 1774.59
  },
  {
    "Year": 2005,
    "Month": 5,
    "CH4": 1772.22
  },
  {
    "Year": 2005,
    "Month": 6,
    "CH4": 1768.54
  },
  {
    "Year": 2005,
    "Month": 7,
    "CH4": 1766.27
  },
  {
    "Year": 2005,
    "Month": 8,
    "CH4": 1768.02
  },
  {
    "Year": 2005,
    "Month": 9,
    "CH4": 1773.08
  },
  {
    "Year": 2005,
    "Month": 10,
    "CH4": 1778.5
  },
  {
    "Year": 2005,
    "Month": 11,
    "CH4": 1781.22
  },
  {
    "Year": 2005,
    "Month": 12,
    "CH4": 1780.28
  },
  {
    "Year": 2006,
    "Month": 1,
    "CH4": 1779.56
  },
  {
    "Year": 2006,
    "Month": 2,
    "CH4": 1779.47
  },
  {
    "Year": 2006,
    "Month": 3,
    "CH4": 1777.38
  },
  {
    "Year": 2006,
    "Month": 4,
    "CH4": 1776.14
  },
  {
    "Year": 2006,
    "Month": 5,
    "CH4": 1774.96
  },
  {
    "Year": 2006,
    "Month": 6,
    "CH4": 1769.3
  },
  {
    "Year": 2006,
    "Month": 7,
    "CH4": 1764.2
  },
  {
    "Year": 2006,
    "Month": 8,
    "CH4": 1767.19
  },
  {
    "Year": 2006,
    "Month": 9,
    "CH4": 1774.54
  },
  {
    "Year": 2006,
    "Month": 10,
    "CH4": 1778.24
  },
  {
    "Year": 2006,
    "Month": 11,
    "CH4": 1779.06
  },
  {
    "Year": 2006,
    "Month": 12,
    "CH4": 1779.93
  },
  {
    "Year": 2007,
    "Month": 1,
    "CH4": 1779.17
  },
  {
    "Year": 2007,
    "Month": 2,
    "CH4": 1778.58
  },
  {
    "Year": 2007,
    "Month": 3,
    "CH4": 1780.29
  },
  {
    "Year": 2007,
    "Month": 4,
    "CH4": 1781.12
  },
  {
    "Year": 2007,
    "Month": 5,
    "CH4": 1779.42
  },
  {
    "Year": 2007,
    "Month": 6,
    "CH4": 1775.61
  },
  {
    "Year": 2007,
    "Month": 7,
    "CH4": 1772.63
  },
  {
    "Year": 2007,
    "Month": 8,
    "CH4": 1777.19
  },
  {
    "Year": 2007,
    "Month": 9,
    "CH4": 1785.86
  },
  {
    "Year": 2007,
    "Month": 10,
    "CH4": 1789.86
  },
  {
    "Year": 2007,
    "Month": 11,
    "CH4": 1789.51
  },
  {
    "Year": 2007,
    "Month": 12,
    "CH4": 1788.17
  },
  {
    "Year": 2008,
    "Month": 1,
    "CH4": 1786.69
  },
  {
    "Year": 2008,
    "Month": 2,
    "CH4": 1785.8
  },
  {
    "Year": 2008,
    "Month": 3,
    "CH4": 1786.16
  },
  {
    "Year": 2008,
    "Month": 4,
    "CH4": 1786.89
  },
  {
    "Year": 2008,
    "Month": 5,
    "CH4": 1785.19
  },
  {
    "Year": 2008,
    "Month": 6,
    "CH4": 1780.47
  },
  {
    "Year": 2008,
    "Month": 7,
    "CH4": 1777.66
  },
  {
    "Year": 2008,
    "Month": 8,
    "CH4": 1781.04
  },
  {
    "Year": 2008,
    "Month": 9,
    "CH4": 1787.65
  },
  {
    "Year": 2008,
    "Month": 10,
    "CH4": 1793.68
  },
  {
    "Year": 2008,
    "Month": 11,
    "CH4": 1797.31
  },
  {
    "Year": 2008,
    "Month": 12,
    "CH4": 1796.6
  },
  {
    "Year": 2009,
    "Month": 1,
    "CH4": 1795.07
  },
  {
    "Year": 2009,
    "Month": 2,
    "CH4": 1795.59
  },
  {
    "Year": 2009,
    "Month": 3,
    "CH4": 1795.98
  },
  {
    "Year": 2009,
    "Month": 4,
    "CH4": 1795.56
  },
  {
    "Year": 2009,
    "Month": 5,
    "CH4": 1792.34
  },
  {
    "Year": 2009,
    "Month": 6,
    "CH4": 1786.92
  },
  {
    "Year": 2009,
    "Month": 7,
    "CH4": 1784.98
  },
  {
    "Year": 2009,
    "Month": 8,
    "CH4": 1788.82
  },
  {
    "Year": 2009,
    "Month": 9,
    "CH4": 1794.81
  },
  {
    "Year": 2009,
    "Month": 10,
    "CH4": 1798.04
  },
  {
    "Year": 2009,
    "Month": 11,
    "CH4": 1797.89
  },
  {
    "Year": 2009,
    "Month": 12,
    "CH4": 1796.69
  },
  {
    "Year": 2010,
    "Month": 1,
    "CH4": 1797.13
  },
  {
    "Year": 2010,
    "Month": 2,
    "CH4": 1798.77
  },
  {
    "Year": 2010,
    "Month": 3,
    "CH4": 1799.47
  },
  {
    "Year": 2010,
    "Month": 4,
    "CH4": 1799.65
  },
  {
    "Year": 2010,
    "Month": 5,
    "CH4": 1797.71
  },
  {
    "Year": 2010,
    "Month": 6,
    "CH4": 1792.56
  },
  {
    "Year": 2010,
    "Month": 7,
    "CH4": 1789.48
  },
  {
    "Year": 2010,
    "Month": 8,
    "CH4": 1794.08
  },
  {
    "Year": 2010,
    "Month": 9,
    "CH4": 1801.82
  },
  {
    "Year": 2010,
    "Month": 10,
    "CH4": 1806.56
  },
  {
    "Year": 2010,
    "Month": 11,
    "CH4": 1807.05
  },
  {
    "Year": 2010,
    "Month": 12,
    "CH4": 1803.62
  },
  {
    "Year": 2011,
    "Month": 1,
    "CH4": 1800.47
  },
  {
    "Year": 2011,
    "Month": 2,
    "CH4": 1800.17
  },
  {
    "Year": 2011,
    "Month": 3,
    "CH4": 1800.98
  },
  {
    "Year": 2011,
    "Month": 4,
    "CH4": 1802.9
  },
  {
    "Year": 2011,
    "Month": 5,
    "CH4": 1803.31
  },
  {
    "Year": 2011,
    "Month": 6,
    "CH4": 1799.16
  },
  {
    "Year": 2011,
    "Month": 7,
    "CH4": 1796.22
  },
  {
    "Year": 2011,
    "Month": 8,
    "CH4": 1799.05
  },
  {
    "Year": 2011,
    "Month": 9,
    "CH4": 1804.06
  },
  {
    "Year": 2011,
    "Month": 10,
    "CH4": 1809.6
  },
  {
    "Year": 2011,
    "Month": 11,
    "CH4": 1812.39
  },
  {
    "Year": 2011,
    "Month": 12,
    "CH4": 1810.04
  },
  {
    "Year": 2012,
    "Month": 1,
    "CH4": 1807.38
  },
  {
    "Year": 2012,
    "Month": 2,
    "CH4": 1808.36
  },
  {
    "Year": 2012,
    "Month": 3,
    "CH4": 1810.05
  },
  {
    "Year": 2012,
    "Month": 4,
    "CH4": 1808.49
  },
  {
    "Year": 2012,
    "Month": 5,
    "CH4": 1804.75
  },
  {
    "Year": 2012,
    "Month": 6,
    "CH4": 1801.01
  },
  {
    "Year": 2012,
    "Month": 7,
    "CH4": 1799.4
  },
  {
    "Year": 2012,
    "Month": 8,
    "CH4": 1803.29
  },
  {
    "Year": 2012,
    "Month": 9,
    "CH4": 1810.15
  },
  {
    "Year": 2012,
    "Month": 10,
    "CH4": 1814.85
  },
  {
    "Year": 2012,
    "Month": 11,
    "CH4": 1815.95
  },
  {
    "Year": 2012,
    "Month": 12,
    "CH4": 1814.58
  },
  {
    "Year": 2013,
    "Month": 1,
    "CH4": 1814.06
  },
  {
    "Year": 2013,
    "Month": 2,
    "CH4": 1814.14
  },
  {
    "Year": 2013,
    "Month": 3,
    "CH4": 1813.25
  },
  {
    "Year": 2013,
    "Month": 4,
    "CH4": 1812.83
  },
  {
    "Year": 2013,
    "Month": 5,
    "CH4": 1811.94
  },
  {
    "Year": 2013,
    "Month": 6,
    "CH4": 1808.57
  },
  {
    "Year": 2013,
    "Month": 7,
    "CH4": 1805.78
  },
  {
    "Year": 2013,
    "Month": 8,
    "CH4": 1808.39
  },
  {
    "Year": 2013,
    "Month": 9,
    "CH4": 1814.31
  },
  {
    "Year": 2013,
    "Month": 10,
    "CH4": 1818.6
  },
  {
    "Year": 2013,
    "Month": 11,
    "CH4": 1820.35
  },
  {
    "Year": 2013,
    "Month": 12,
    "CH4": 1819.32
  },
  {
    "Year": 2014,
    "Month": 1,
    "CH4": 1816.85
  },
  {
    "Year": 2014,
    "Month": 2,
    "CH4": 1816.4
  },
  {
    "Year": 2014,
    "Month": 3,
    "CH4": 1818.14
  },
  {
    "Year": 2014,
    "Month": 4,
    "CH4": 1820.9
  },
  {
    "Year": 2014,
    "Month": 5,
    "CH4": 1821.9
  },
  {
    "Year": 2014,
    "Month": 6,
    "CH4": 1818.34
  },
  {
    "Year": 2014,
    "Month": 7,
    "CH4": 1815.55
  },
  {
    "Year": 2014,
    "Month": 8,
    "CH4": 1819.72
  },
  {
    "Year": 2014,
    "Month": 9,
    "CH4": 1826.86
  },
  {
    "Year": 2014,
    "Month": 10,
    "CH4": 1831.24
  },
  {
    "Year": 2014,
    "Month": 11,
    "CH4": 1833.06
  },
  {
    "Year": 2014,
    "Month": 12,
    "CH4": 1833.54
  },
  {
    "Year": 2015,
    "Month": 1,
    "CH4": 1833.09
  },
  {
    "Year": 2015,
    "Month": 2,
    "CH4": 1832.98
  },
  {
    "Year": 2015,
    "Month": 3,
    "CH4": 1833.2
  },
  {
    "Year": 2015,
    "Month": 4,
    "CH4": 1833.16
  },
  {
    "Year": 2015,
    "Month": 5,
    "CH4": 1831.66
  },
  {
    "Year": 2015,
    "Month": 6,
    "CH4": 1827.24
  },
  {
    "Year": 2015,
    "Month": 7,
    "CH4": 1824.72
  },
  {
    "Year": 2015,
    "Month": 8,
    "CH4": 1829.15
  },
  {
    "Year": 2015,
    "Month": 9,
    "CH4": 1836.24
  },
  {
    "Year": 2015,
    "Month": 10,
    "CH4": 1841.43
  },
  {
    "Year": 2015,
    "Month": 11,
    "CH4": 1844.68
  },
  {
    "Year": 2015,
    "Month": 12,
    "CH4": 1844.89
  },
  {
    "Year": 2016,
    "Month": 1,
    "CH4": 1842.42
  },
  {
    "Year": 2016,
    "Month": 2,
    "CH4": 1841.63
  },
  {
    "Year": 2016,
    "Month": 3,
    "CH4": 1842.99
  },
  {
    "Year": 2016,
    "Month": 4,
    "CH4": 1843.75
  },
  {
    "Year": 2016,
    "Month": 5,
    "CH4": 1842.12
  },
  {
    "Year": 2016,
    "Month": 6,
    "CH4": 1837.84
  },
  {
    "Year": 2016,
    "Month": 7,
    "CH4": 1834.18
  },
  {
    "Year": 2016,
    "Month": 8,
    "CH4": 1836.68
  },
  {
    "Year": 2016,
    "Month": 9,
    "CH4": 1844.17
  },
  {
    "Year": 2016,
    "Month": 10,
    "CH4": 1849.88
  },
  {
    "Year": 2016,
    "Month": 11,
    "CH4": 1851.43
  },
  {
    "Year": 2016,
    "Month": 12,
    "CH4": 1851.05
  },
  {
    "Year": 2017,
    "Month": 1,
    "CH4": 1849.69
  },
  {
    "Year": 2017,
    "Month": 2,
    "CH4": 1848.38
  },
  {
    "Year": 2017,
    "Month": 3,
    "CH4": 1848.18
  },
  {
    "Year": 2017,
    "Month": 4,
    "CH4": 1848.55
  },
  {
    "Year": 2017,
    "Month": 5,
    "CH4": 1847.13
  },
  {
    "Year": 2017,
    "Month": 6,
    "CH4": 1842.94
  },
  {
    "Year": 2017,
    "Month": 7,
    "CH4": 1840.41
  },
  {
    "Year": 2017,
    "Month": 8,
    "CH4": 1844.61
  },
  {
    "Year": 2017,
    "Month": 9,
    "CH4": 1852.69
  },
  {
    "Year": 2017,
    "Month": 10,
    "CH4": 1857.99
  },
  {
    "Year": 2017,
    "Month": 11,
    "CH4": 1858.51
  },
  {
    "Year": 2017,
    "Month": 12,
    "CH4": 1856.5
  },
  {
    "Year": 2018,
    "Month": 1,
    "CH4": 1854.44
  },
  {
    "Year": 2018,
    "Month": 2,
    "CH4": 1854.97
  },
  {
    "Year": 2018,
    "Month": 3,
    "CH4": 1856.87
  },
  {
    "Year": 2018,
    "Month": 4,
    "CH4": 1856.69
  },
  {
    "Year": 2018,
    "Month": 5,
    "CH4": 1854.8
  },
  {
    "Year": 2018,
    "Month": 6,
    "CH4": 1852.01
  },
  {
    "Year": 2018,
    "Month": 7,
    "CH4": 1849.11
  },
  {
    "Year": 2018,
    "Month": 8,
    "CH4": 1851.92
  },
  {
    "Year": 2018,
    "Month": 9,
    "CH4": 1860.47
  },
  {
    "Year": 2018,
    "Month": 10,
    "CH4": 1865.77
  },
  {
    "Year": 2018,
    "Month": 11,
    "CH4": 1866.26
  },
  {
    "Year": 2018,
    "Month": 12,
    "CH4": 1866.02
  },
  {
    "Year": 2019,
    "Month": 1,
    "CH4": 1864.98
  },
  {
    "Year": 2019,
    "Month": 2,
    "CH4": 1865.02
  },
  {
    "Year": 2019,
    "Month": 3,
    "CH4": 1866.32
  },
  {
    "Year": 2019,
    "Month": 4,
    "CH4": 1865.31
  },
  {
    "Year": 2019,
    "Month": 5,
    "CH4": 1861.96
  },
  {
    "Year": 2019,
    "Month": 6,
    "CH4": 1858.79
  },
  {
    "Year": 2019,
    "Month": 7,
    "CH4": 1858.26
  },
  {
    "Year": 2019,
    "Month": 8,
    "CH4": 1862.91
  },
  {
    "Year": 2019,
    "Month": 9,
    "CH4": 1870.78
  },
  {
    "Year": 2019,
    "Month": 10,
    "CH4": 1875.4
  },
  {
    "Year": 2019,
    "Month": 11,
    "CH4": 1875.56
  },
  {
    "Year": 2019,
    "Month": 12,
    "CH4": 1874.67
  },
  {
    "Year": 2020,
    "Month": 1,
    "CH4": 1873.14
  },
  {
    "Year": 2020,
    "Month": 2,
    "CH4": 1872.74
  },
  {
    "Year": 2020,
    "Month": 3,
    "CH4": 1874.72
  },
  {
    "Year": 2020,
    "Month": 4,
    "CH4": 1875.88
  },
  {
    "Year": 2020,
    "Month": 5,
    "CH4": 1874.31
  },
  {
    "Year": 2020,
    "Month": 6,
    "CH4": 1871.87
  },
  {
    "Year": 2020,
    "Month": 7,
    "CH4": 1871.51
  },
  {
    "Year": 2020,
    "Month": 8,
    "CH4": 1876.53
  },
  {
    "Year": 2020,
    "Month": 9,
    "CH4": 1884.66
  },
  {
    "Year": 2020,
    "Month": 10,
    "CH4": 1890.11
  },
  {
    "Year": 2020,
    "Month": 11,
    "CH4": 1891.92
  },
  {
    "Year": 2020,
    "Month": 12,
    "CH4": 1891.78
  },
  {
    "Year": 2021,
    "Month": 1,
    "CH4": 1889.49
  },
  {
    "Year": 2021,
    "Month": 2,
    "CH4": 1887.53
  },
  {
    "Year": 2021,
    "Month": 3,
    "CH4": 1888.7
  },
  {
    "Year": 2021,
    "Month": 4,
    "CH4": 1891.24
  },
  {
    "Year": 2021,
    "Month": 5,
    "CH4": 1891.61
  },
  {
    "Year": 2021,
    "Month": 6,
    "CH4": 1888.45
  },
  {
    "Year": 2021,
    "Month": 7,
    "CH4": 1886.38
  },
  {
    "Year": 2021,
    "Month": 8,
    "CH4": 1892.61
  },
  {
    "Year": 2021,
    "Month": 9,
    "CH4": 1902.62
  },
  {
    "Year": 2021,
    "Month": 10,
    "CH4": 1908
  },
  {
    "Year": 2021,
    "Month": 11,
    "CH4": 1909.53
  },
  {
    "Year": 2021,
    "Month": 12,
    "CH4": 1908.72
  },
  {
    "Year": 2022,
    "Month": 1,
    "CH4": 1907.33
  },
  {
    "Year": 2022,
    "Month": 2,
    "CH4": 1907.69
  },
  {
    "Year": 2022,
    "Month": 3,
    "CH4": 1908.97
  },
  {
    "Year": 2022,
    "Month": 4,
    "CH4": 1909.38
  },
  {
    "Year": 2022,
    "Month": 5,
    "CH4": 1907.72
  },
  {
    "Year": 2022,
    "Month": 6,
    "CH4": 1905.23
  },
  {
    "Year": 2022,
    "Month": 7,
    "CH4": 1904.44
  },
  {
    "Year": 2022,
    "Month": 8,
    "CH4": 1908.73
  },
  {
    "Year": 2022,
    "Month": 9,
    "CH4": 1915.45
  },
  {
    "Year": 2022,
    "Month": 10,
    "CH4": 1919.97
  },
  {
    "Year": 2022,
    "Month": 11,
    "CH4": 1923.63
  },
  {
    "Year": 2022,
    "Month": 12,
    "CH4": 1924.77
  },
  {
    "Year": 2023,
    "Month": 1,
    "CH4": 1922.25
  },
  {
    "Year": 2023,
    "Month": 2,
    "CH4": 1920.35
  },
  {
    "Year": 2023,
    "Month": 3,
    "CH4": 1920.64
  },
  {
    "Year": 2023,
    "Month": 4,
    "CH4": 1922.2
  }
]
  

const VulnChart = () => {
  const labels = data.map((entry) => `${entry.Month}/${entry.Year}`);
  const datasetValues = data.map((entry) => entry.CH4);

  return (


    <div>
      
      <Line
      
        data={{
          labels: labels,
          datasets: [
            {
              label: " Methane",
              data: datasetValues,
              backgroundColor: "rgba(0, 0, 0, 0)", 
              borderColor: "green",
              borderWidth: 1.5,
              fill: false
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
                text: 'PPM', 
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