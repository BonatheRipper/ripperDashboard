import React, { PureComponent, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { IoIosArrowRoundUp } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useStateContext } from "../context/contextProvider";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  ContextMenu,
  ExcelExport,
  Edit,
  PdfExport,
  Group,
  Inject,
  Page,
  Sort,
} from "@syncfusion/ej2-react-grids";

import "../App.css";
import {
  BarChart,
  Cell,
  PieChart,
  Pie,
  Sector,
  LineChart,
  Line,
  Legend,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Date: 1,
    Sales: 426,
  },
  {
    Date: 2,
    Sales: 950,
  },
  {
    Date: 3,
    Sales: 532,
  },
  {
    Date: 4,
    Sales: 658,
  },
  {
    Date: 5,
    Sales: 14,
  },
  {
    Date: 6,
    Sales: 747,
  },
  {
    Date: 7,
    Sales: 771,
  },
  {
    Date: 8,
    Sales: 461,
  },
  {
    Date: 9,
    Sales: 926,
  },
  {
    Date: 10,
    Sales: 990,
  },
  {
    Date: 11,
    Sales: 896,
  },
  {
    Date: 12,
    Sales: 873,
  },
  {
    Date: 13,
    Sales: 864,
  },
  {
    Date: 14,
    Sales: 346,
  },
  {
    Date: 15,
    Sales: 747,
  },
  {
    Date: 16,
    Sales: 299,
  },
  {
    Date: 17,
    Sales: 353,
  },
  {
    Date: 18,
    Sales: 949,
  },
  {
    Date: 19,
    Sales: 769,
  },
  {
    Date: 20,
    Sales: 744,
  },
  {
    Date: 21,
    Sales: 210,
  },
  {
    Date: 22,
    Sales: 848,
  },
  {
    Date: 23,
    Sales: 266,
  },
  {
    Date: 24,
    Sales: 97,
  },
  {
    Date: 25,
    Sales: 806,
  },
  {
    Date: 26,
    Sales: 691,
  },
  {
    Date: 27,
    Sales: 313,
  },
  {
    Date: 28,
    Sales: 156,
  },
  {
    Date: 29,
    Sales: 144,
  },
  {
    Date: 30,
    Sales: 973,
  },
  {
    Date: 31,
    Sales: 464,
  },
  {
    Date: 32,
    Sales: 873,
  },
];
const dataTwo = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const RecentOrdersData = [
  {
    OrderId: 7265,
    Status: "Canceled",
    Customer: "Brooklyn Brandon-Lee",
    Total: 2419408,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4957,
    Status: "Hold",
    Customer: "Adie Cruz",
    Total: 483124,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3733,
    Status: "Completed",
    Customer: "Cormac Akram",
    Total: 2757620,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1578,
    Status: "Canceled",
    Customer: "Arandeep Baillie",
    Total: 1568265,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4165,
    Status: "Canceled",
    Customer: "Chase Ahoua",
    Total: 1326920,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2079,
    Status: "Pending",
    Customer: "Creag Darrius",
    Total: 2918533,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9791,
    Status: "Hold",
    Customer: "Cillin Bader",
    Total: 1578829,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4928,
    Status: "Hold",
    Customer: "Allan Arnab",
    Total: 875549,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4676,
    Status: "Hold",
    Customer: "Aronas Calvin",
    Total: 343551,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7068,
    Status: "Completed",
    Customer: "Bailee Connolly",
    Total: 849381,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9354,
    Status: "Canceled",
    Customer: "Brooklyn Abid",
    Total: 625944,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5902,
    Status: "Completed",
    Customer: "Caileb-John Andrei",
    Total: 186376,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6159,
    Status: "Pending",
    Customer: "Anir Arturo",
    Total: 2107740,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2704,
    Status: "Hold",
    Customer: "Colum Cathal",
    Total: 2737774,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7586,
    Status: "Hold",
    Customer: "Cephas Aryan",
    Total: 229833,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8819,
    Status: "Canceled",
    Customer: "Bailley Blyth",
    Total: 2734629,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8561,
    Status: "Completed",
    Customer: "Callan-Adam Arian",
    Total: 1211760,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6581,
    Status: "Canceled",
    Customer: "Crombie Blaine",
    Total: 1246768,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8186,
    Status: "Pending",
    Customer: "Believe Blair",
    Total: 2593997,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 990,
    Status: "Completed",
    Customer: "Caelen Conor",
    Total: 723853,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2582,
    Status: "Canceled",
    Customer: "Ally Arman",
    Total: 2534887,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4454,
    Status: "Hold",
    Customer: "Calean Al",
    Total: 2472030,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3918,
    Status: "Pending",
    Customer: "Charles Brad",
    Total: 2790788,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 580,
    Status: "Hold",
    Customer: "Callan Alister",
    Total: 2782894,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2343,
    Status: "Pending",
    Customer: "Aiadan Abdulkhader",
    Total: 2018044,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1545,
    Status: "Completed",
    Customer: "Ari Bevin",
    Total: 2742344,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9600,
    Status: "Completed",
    Customer: "Conlin Arman",
    Total: 2570847,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1729,
    Status: "Pending",
    Customer: "Darl Barath",
    Total: 2186096,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4949,
    Status: "Pending",
    Customer: "Ayub Alexzander",
    Total: 1770443,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9600,
    Status: "Hold",
    Customer: "Coby Danyal",
    Total: 996173,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4130,
    Status: "Hold",
    Customer: "Conlan Alhaji",
    Total: 683662,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5186,
    Status: "Canceled",
    Customer: "Danny Akram",
    Total: 1146081,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6494,
    Status: "Pending",
    Customer: "Callum Aaron-James",
    Total: 2893061,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3768,
    Status: "Completed",
    Customer: "Davi Buddy",
    Total: 757939,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8962,
    Status: "Canceled",
    Customer: "David Abubakar",
    Total: 332844,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8355,
    Status: "Completed",
    Customer: "Connan Arya",
    Total: 528206,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2958,
    Status: "Completed",
    Customer: "Cassy Brandyn",
    Total: 296965,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2144,
    Status: "Completed",
    Customer: "Caelen Ahoua",
    Total: 1764789,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8792,
    Status: "Canceled",
    Customer: "Aeron Cooper",
    Total: 1446252,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6358,
    Status: "Canceled",
    Customer: "Boab Adegbolahan",
    Total: 222107,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6442,
    Status: "Canceled",
    Customer: "Calvin Aleksandrs",
    Total: 889120,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9457,
    Status: "Hold",
    Customer: "Carlos Alfy",
    Total: 1619367,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4636,
    Status: "Canceled",
    Customer: "Abdulbasir Atapattu",
    Total: 2731774,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8566,
    Status: "Completed",
    Customer: "Aazaan Abdul-Aziz",
    Total: 1714974,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 173,
    Status: "Pending",
    Customer: "Ammer Bob",
    Total: 827186,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2085,
    Status: "Pending",
    Customer: "Banan Avi",
    Total: 2884299,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7331,
    Status: "Completed",
    Customer: "Carl A-Jay",
    Total: 1985105,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6749,
    Status: "Canceled",
    Customer: "Ayomide Basher",
    Total: 1355915,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4190,
    Status: "Pending",
    Customer: "Brandyn Conlyn",
    Total: 2669380,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 139,
    Status: "Canceled",
    Customer: "Artur Asrar",
    Total: 979660,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1022,
    Status: "Pending",
    Customer: "Boab Ciann",
    Total: 819603,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7313,
    Status: "Hold",
    Customer: "Cyrus Butchi",
    Total: 2813573,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5299,
    Status: "Canceled",
    Customer: "Al-Hassan Broghan",
    Total: 446752,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8259,
    Status: "Hold",
    Customer: "Bezalel Blair",
    Total: 178533,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8630,
    Status: "Hold",
    Customer: "Darryl Daud",
    Total: 522909,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9026,
    Status: "Canceled",
    Customer: "Aarman Christian",
    Total: 1968084,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6590,
    Status: "Hold",
    Customer: "Bradyn Ata",
    Total: 2725723,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6487,
    Status: "Hold",
    Customer: "Bjorn Aryan",
    Total: 1258911,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6416,
    Status: "Hold",
    Customer: "Andrew Callan-Adam",
    Total: 953851,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7723,
    Status: "Completed",
    Customer: "Aaron Airen",
    Total: 421519,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9995,
    Status: "Completed",
    Customer: "Daniele Darragh",
    Total: 957844,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3243,
    Status: "Pending",
    Customer: "Avraham Coll",
    Total: 1249310,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9926,
    Status: "Canceled",
    Customer: "Daithi Apisai",
    Total: 2920204,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6789,
    Status: "Completed",
    Customer: "Asif Alvern",
    Total: 2759672,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 978,
    Status: "Completed",
    Customer: "Adnan Benjamyn",
    Total: 1065183,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3517,
    Status: "Canceled",
    Customer: "Aedin Cuillin",
    Total: 493879,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3330,
    Status: "Hold",
    Customer: "Callum Corbin",
    Total: 2559604,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2855,
    Status: "Canceled",
    Customer: "Darien Bowie",
    Total: 1598089,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8291,
    Status: "Completed",
    Customer: "Aron Alf",
    Total: 314861,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5536,
    Status: "Canceled",
    Customer: "Abdalroof Alphonse",
    Total: 290834,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1320,
    Status: "Pending",
    Customer: "Badsha Avinash",
    Total: 1057124,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8830,
    Status: "Canceled",
    Customer: "Aedin Calvin",
    Total: 779871,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 919,
    Status: "Hold",
    Customer: "Alf Alessio",
    Total: 70241,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4494,
    Status: "Pending",
    Customer: "Calean Asrar",
    Total: 1348436,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5876,
    Status: "Pending",
    Customer: "Ammar Ciar",
    Total: 1950972,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2843,
    Status: "Canceled",
    Customer: "Brooke Anish",
    Total: 459087,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8771,
    Status: "Completed",
    Customer: "Arsalan Al",
    Total: 1595820,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3213,
    Status: "Hold",
    Customer: "Blaire Bailley",
    Total: 154796,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7104,
    Status: "Canceled",
    Customer: "Danyil Adil",
    Total: 545464,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1154,
    Status: "Pending",
    Customer: "Cambell Angus",
    Total: 254565,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2626,
    Status: "Hold",
    Customer: "Caolan Aleksandrs",
    Total: 931195,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 949,
    Status: "Completed",
    Customer: "Binod Carwyn",
    Total: 1070129,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7490,
    Status: "Hold",
    Customer: "Cyrus Amro",
    Total: 376164,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5997,
    Status: "Completed",
    Customer: "Byron Believe",
    Total: 1610291,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1657,
    Status: "Completed",
    Customer: "Davi Arlo",
    Total: 2009067,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6505,
    Status: "Completed",
    Customer: "Bayley Cejay",
    Total: 2688914,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9140,
    Status: "Completed",
    Customer: "Azaan Aran",
    Total: 2449419,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1840,
    Status: "Canceled",
    Customer: "Bailley Abdurraheem",
    Total: 2553387,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7976,
    Status: "Hold",
    Customer: "Arnab Broghan",
    Total: 1874299,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4341,
    Status: "Hold",
    Customer: "Bailley Cian",
    Total: 1494574,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1013,
    Status: "Hold",
    Customer: "Crombie Callun",
    Total: 59120,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7337,
    Status: "Canceled",
    Customer: "Ajayraj Ammaar",
    Total: 2703756,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7236,
    Status: "Completed",
    Customer: "Abdirahman Corin",
    Total: 2728705,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8411,
    Status: "Canceled",
    Customer: "Brodie Brandon",
    Total: 1073131,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2118,
    Status: "Completed",
    Customer: "Darrach Ceilan",
    Total: 60797,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 23,
    Status: "Canceled",
    Customer: "Anthony-John Areez",
    Total: 67660,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7317,
    Status: "Canceled",
    Customer: "Abdul-Rehman Brodie",
    Total: 934760,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3743,
    Status: "Pending",
    Customer: "Daegyu Asim",
    Total: 1043671,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6127,
    Status: "Hold",
    Customer: "Christian Alistair",
    Total: 1202430,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4295,
    Status: "Completed",
    Customer: "Darryn Alexei",
    Total: 2351280,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7997,
    Status: "Hold",
    Customer: "Anton Arandeep",
    Total: 1198665,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3654,
    Status: "Pending",
    Customer: "Carrich Daimhin",
    Total: 2153084,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5617,
    Status: "Hold",
    Customer: "Cayden Amro",
    Total: 2288230,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6558,
    Status: "Completed",
    Customer: "Banan Conlin",
    Total: 1497708,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6882,
    Status: "Hold",
    Customer: "Aydin Austen",
    Total: 1419890,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1271,
    Status: "Hold",
    Customer: "Ainslie Ammaar",
    Total: 2614139,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4759,
    Status: "Pending",
    Customer: "Casper Al-Hassan",
    Total: 286967,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7744,
    Status: "Pending",
    Customer: "Dareh Antonio",
    Total: 679500,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8439,
    Status: "Pending",
    Customer: "Ceiran Brady",
    Total: 350900,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1268,
    Status: "Canceled",
    Customer: "Alexzander Caileb-John",
    Total: 2853324,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7017,
    Status: "Hold",
    Customer: "Asrar Barney",
    Total: 1005763,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8011,
    Status: "Canceled",
    Customer: "Cayden-Robert Ahtasham",
    Total: 305030,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5771,
    Status: "Pending",
    Customer: "Cai Dagon",
    Total: 2790195,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7033,
    Status: "Pending",
    Customer: "Brogan Adam-James",
    Total: 60174,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5255,
    Status: "Pending",
    Customer: "Cuillin Danniel",
    Total: 26730,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2587,
    Status: "Pending",
    Customer: "Darroch Azzam",
    Total: 1961791,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7413,
    Status: "Hold",
    Customer: "Aronas Ahoua",
    Total: 1000195,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2362,
    Status: "Completed",
    Customer: "Barrie Cruz",
    Total: 646649,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 689,
    Status: "Hold",
    Customer: "Antony Connolly",
    Total: 223620,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2766,
    Status: "Canceled",
    Customer: "Amolpreet Callun",
    Total: 2718706,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2847,
    Status: "Completed",
    Customer: "Benji Barrie",
    Total: 517744,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8355,
    Status: "Canceled",
    Customer: "Conall Colt",
    Total: 2154898,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8429,
    Status: "Pending",
    Customer: "Daniil Callan",
    Total: 2799091,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3632,
    Status: "Completed",
    Customer: "Brad Axel",
    Total: 2568268,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3200,
    Status: "Canceled",
    Customer: "Camron Conan",
    Total: 875530,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8284,
    Status: "Hold",
    Customer: "Brunon Abir",
    Total: 1063305,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2865,
    Status: "Pending",
    Customer: "Brandyn Avi",
    Total: 2179050,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 611,
    Status: "Pending",
    Customer: "Brendyn Coupar",
    Total: 1062596,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2123,
    Status: "Hold",
    Customer: "Conghaile Alastair",
    Total: 2717189,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4101,
    Status: "Canceled",
    Customer: "Ceiron Calvin",
    Total: 649919,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3766,
    Status: "Pending",
    Customer: "Cobie Addisson",
    Total: 2806593,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2182,
    Status: "Pending",
    Customer: "Attila Ashton",
    Total: 2652214,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7545,
    Status: "Completed",
    Customer: "Corie Daryn",
    Total: 903640,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7004,
    Status: "Hold",
    Customer: "Cai Chrismedi",
    Total: 2030023,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1285,
    Status: "Canceled",
    Customer: "Alf Cephas",
    Total: 1057835,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7766,
    Status: "Canceled",
    Customer: "Blaine Cole",
    Total: 623248,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2522,
    Status: "Pending",
    Customer: "Alber Buddy",
    Total: 1446010,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2810,
    Status: "Completed",
    Customer: "Andreas Alvern",
    Total: 2415227,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5072,
    Status: "Canceled",
    Customer: "Brendan Darrius",
    Total: 1734242,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2968,
    Status: "Completed",
    Customer: "Bogdan Ayomide",
    Total: 1801523,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9967,
    Status: "Canceled",
    Customer: "Cadon Creag",
    Total: 1773119,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3869,
    Status: "Canceled",
    Customer: "Daryl Aron",
    Total: 1089617,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1686,
    Status: "Hold",
    Customer: "Bogdan Alister",
    Total: 2913407,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4887,
    Status: "Canceled",
    Customer: "Colm Akan",
    Total: 2633249,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1949,
    Status: "Canceled",
    Customer: "Cadon Comghan",
    Total: 2588349,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4360,
    Status: "Pending",
    Customer: "Brendon Cormac",
    Total: 2545732,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8910,
    Status: "Canceled",
    Customer: "Bogdan Areeb",
    Total: 1091675,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6296,
    Status: "Completed",
    Customer: "Danniel Aidy",
    Total: 2431707,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4593,
    Status: "Completed",
    Customer: "Azedine Crawford",
    Total: 256663,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2474,
    Status: "Pending",
    Customer: "Conan Alekzander",
    Total: 1020894,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9156,
    Status: "Completed",
    Customer: "Boab Aryn",
    Total: 1350048,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2309,
    Status: "Completed",
    Customer: "Daimhin Campbell",
    Total: 2855902,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4889,
    Status: "Pending",
    Customer: "Daumantas Azaan",
    Total: 398532,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6453,
    Status: "Hold",
    Customer: "Arrham Bennett",
    Total: 1501944,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1179,
    Status: "Canceled",
    Customer: "Annan Cuillin",
    Total: 968723,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9579,
    Status: "Canceled",
    Customer: "Alexzander Coban",
    Total: 1937290,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2595,
    Status: "Completed",
    Customer: "Camerin Charley",
    Total: 825963,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3658,
    Status: "Canceled",
    Customer: "Basher Al-Hassan",
    Total: 170229,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5053,
    Status: "Hold",
    Customer: "Cieran Brooke",
    Total: 1440195,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8424,
    Status: "Canceled",
    Customer: "Carlo Christy",
    Total: 1053366,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3470,
    Status: "Canceled",
    Customer: "Baxter Byron",
    Total: 1289366,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6927,
    Status: "Hold",
    Customer: "Azlan Archie",
    Total: 2223276,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6185,
    Status: "Hold",
    Customer: "Christian Awwal",
    Total: 1620316,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 944,
    Status: "Completed",
    Customer: "Bowie Cephas",
    Total: 350154,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7410,
    Status: "Pending",
    Customer: "Chris Carlos",
    Total: 314019,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6132,
    Status: "Completed",
    Customer: "Chibudom Campbel",
    Total: 1488407,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4078,
    Status: "Canceled",
    Customer: "Cai Argyll",
    Total: 1802993,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3742,
    Status: "Hold",
    Customer: "Calvin Dalton",
    Total: 2157266,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6873,
    Status: "Canceled",
    Customer: "Conall Anselm",
    Total: 1848653,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7112,
    Status: "Hold",
    Customer: "Ahmed-Aziz Carter",
    Total: 2909686,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9052,
    Status: "Hold",
    Customer: "Codey Aleksander",
    Total: 637572,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1560,
    Status: "Completed",
    Customer: "Christian Cahlum",
    Total: 209933,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2645,
    Status: "Pending",
    Customer: "Benjamin Abdulkhader",
    Total: 2479448,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5517,
    Status: "Pending",
    Customer: "Chaitanya Alfred",
    Total: 1586075,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7361,
    Status: "Pending",
    Customer: "Daksh Arnav",
    Total: 1782040,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3556,
    Status: "Hold",
    Customer: "Chad Alasdair",
    Total: 222602,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1694,
    Status: "Canceled",
    Customer: "Brady Coby",
    Total: 2802656,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6531,
    Status: "Hold",
    Customer: "Conlyn Arnold",
    Total: 1290092,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5957,
    Status: "Pending",
    Customer: "Corben Aryankhan",
    Total: 2578964,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9175,
    Status: "Hold",
    Customer: "Ceirin Colm",
    Total: 142593,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9797,
    Status: "Hold",
    Customer: "Coby Brooklyn",
    Total: 2312576,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 5748,
    Status: "Hold",
    Customer: "Atapattu Corey-Jay",
    Total: 1199102,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9781,
    Status: "Hold",
    Customer: "Bernard Argyle",
    Total: 1040240,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 1609,
    Status: "Completed",
    Customer: "Bradan Aonghus",
    Total: 1782119,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3209,
    Status: "Canceled",
    Customer: "Believe Caley",
    Total: 644906,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6376,
    Status: "Canceled",
    Customer: "Avraham Danyal",
    Total: 1482552,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 6139,
    Status: "Canceled",
    Customer: "Azedine Alvern",
    Total: 10041,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 4108,
    Status: "Canceled",
    Customer: "Alessio Aaron-James",
    Total: 1512827,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 2538,
    Status: "Completed",
    Customer: "Bailley Cory",
    Total: 1546513,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9809,
    Status: "Completed",
    Customer: "Coel D'arcy",
    Total: 1779721,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7345,
    Status: "Completed",
    Customer: "Bader Blaike",
    Total: 745467,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7042,
    Status: "Pending",
    Customer: "Colum Cory",
    Total: 2745385,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8404,
    Status: "Canceled",
    Customer: "Caiden-Paul Abdallah",
    Total: 106329,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3011,
    Status: "Pending",
    Customer: "Aodhan Chester",
    Total: 1945653,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 3092,
    Status: "Hold",
    Customer: "Cailin Craig",
    Total: 419580,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8912,
    Status: "Canceled",
    Customer: "Antonio Ace",
    Total: 2535733,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9938,
    Status: "Pending",
    Customer: "Ceilan Aarron",
    Total: 2580959,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 7974,
    Status: "Hold",
    Customer: "Amrit D'arcy",
    Total: 2437610,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 8580,
    Status: "Hold",
    Customer: "Caden Bradly",
    Total: 972101,
    Date: "Mon Jun 13 2022",
  },
  {
    OrderId: 9145,
    Status: "Canceled",
    Customer: "Bartosz Cobain",
    Total: 585867,
    Date: "Mon Jun 13 2022",
  },
];
export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];
const TrafficSourceData = [
  { name: "Google", value: 4000, color: "#0088FE" },
  { name: "Facebook", value: 3000, color: "#00C49F" },
  { name: "Yandex", value: 12000, color: "#ff63a5" },
  { name: "Instagram", value: 2000, color: "#FFBB28" },
  { name: "YouTue", value: 3900, color: "#816bff" },
  { name: "Others", value: 1000, color: "#6f9a37" },
];

const RecentOrders = () => {
  //   function dateNow() {
  //     const timeElapsed = Date.now();
  //    const today = new Date(timeElapsed)
  //    return today.toDateString()
  //   }

  // var arr = []
  // var statuss = ["Pending", "Hold", "Completed", "Canceled"]
  // var names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Bartlomiej", "Bartosz", "Basher", "Basile", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony", "Bowen", "Bowie", "Boyd", "Bracken", "Brad", "Bradan", "Braden", "Bradley", "Bradlie", "Bradly", "Brady", "Bradyn", "Braeden", "Braiden", "Brajan", "Brandan", "Branden", "Brandon", "Brandonlee", "Brandon-Lee", "Brandyn", "Brannan", "Brayden", "Braydon", "Braydyn", "Breandan", "Brehme", "Brendan", "Brendon", "Brendyn", "Breogan", "Bret", "Brett", "Briaddon", "Brian", "Brodi", "Brodie", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce", "Bruin", "Bruno", "Brunon", "Bryan", "Bryce", "Bryden", "Brydon", "Brydon-Craig", "Bryn", "Brynmor", "Bryson", "Buddy", "Bully", "Burak", "Burhan", "Butali", "Butchi", "Byron", "Cabhan", "Cadan", "Cade", "Caden", "Cadon", "Cadyn", "Caedan", "Caedyn", "Cael", "Caelan", "Caelen", "Caethan", "Cahl", "Cahlum", "Cai", "Caidan", "Caiden", "Caiden-Paul", "Caidyn", "Caie", "Cailaen", "Cailean", "Caileb-John", "Cailin", "Cain", "Caine", "Cairn", "Cal", "Calan", "Calder", "Cale", "Calean", "Caleb", "Calen", "Caley", "Calib", "Calin", "Callahan", "Callan", "Callan-Adam", "Calley", "Callie", "Callin", "Callum", "Callun", "Callyn", "Calum", "Calum-James", "Calvin", "Cambell", "Camerin", "Cameron", "Campbel", "Campbell", "Camron", "Caolain", "Caolan", "Carl", "Carlo", "Carlos", "Carrich", "Carrick", "Carson", "Carter", "Carwyn", "Casey", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cayden-Robert", "Cayden-Tiamo", "Ceejay", "Ceilan", "Ceiran", "Ceirin", "Ceiron", "Cejay", "Celik", "Cephas", "Cesar", "Cesare", "Chad", "Chaitanya", "Chang-Ha", "Charles", "Charley", "Charlie", "Charly", "Chase", "Che", "Chester", "Chevy", "Chi", "Chibudom", "Chidera", "Chimsom", "Chin", "Chintu", "Chiqal", "Chiron", "Chris", "Chris-Daniel", "Chrismedi", "Christian", "Christie", "Christoph", "Christopher", "Christopher-Lee", "Christy", "Chu", "Chukwuemeka", "Cian", "Ciann", "Ciar", "Ciaran", "Ciarian", "Cieran", "Cillian", "Cillin", "Cinar", "CJ", "C-Jay", "Clark", "Clarke", "Clayton", "Clement", "Clifford", "Clyde", "Cobain", "Coban", "Coben", "Cobi", "Cobie", "Coby", "Codey", "Codi", "Codie", "Cody", "Cody-Lee", "Coel", "Cohan", "Cohen", "Colby", "Cole", "Colin", "Coll", "Colm", "Colt", "Colton", "Colum", "Colvin", "Comghan", "Conal", "Conall", "Conan", "Conar", "Conghaile", "Conlan", "Conley", "Conli", "Conlin", "Conlly", "Conlon", "Conlyn", "Connal", "Connall", "Connan", "Connar", "Connel", "Connell", "Conner", "Connolly", "Connor", "Connor-David", "Conor", "Conrad", "Cooper", "Copeland", "Coray", "Corben", "Corbin", "Corey", "Corey-James", "Corey-Jay", "Cori", "Corie", "Corin", "Cormac", "Cormack", "Cormak", "Corran", "Corrie", "Cory", "Cosmo", "Coupar", "Craig", "Craig-James", "Crawford", "Creag", "Crispin", "Cristian", "Crombie", "Cruiz", "Cruz", "Cuillin", "Cullen", "Cullin", "Curtis", "Cyrus", "Daanyaal", "Daegan", "Daegyu", "Dafydd", "Dagon", "Dailey", "Daimhin", "Daithi", "Dakota", "Daksh", "Dale", "Dalong", "Dalton", "Damian", "Damien", "Damon", "Dan", "Danar", "Dane", "Danial", "Daniel", "Daniele", "Daniel-James", "Daniels", "Daniil", "Danish", "Daniyal", "Danniel", "Danny", "Dante", "Danyal", "Danyil", "Danys", "Daood", "Dara", "Darach", "Daragh", "Darcy", "D'arcy", "Dareh", "Daren", "Darien", "Darius", "Darl", "Darn", "Darrach", "Darragh", "Darrel", "Darrell", "Darren", "Darrie", "Darrius", "Darroch", "Darryl", "Darryn", "Darwyn", "Daryl", "Daryn", "Daud", "Daumantas", "Davi", "David", "David-Jay"]

  // for(var i=0; i<200; i++ ){
  //   var id = Math.floor(Math.random()*10000)
  //   var stat =  statuss[Math.floor(Math.random()*statuss.length)]
  //   var cus =  names[Math.floor(Math.random()*names.length)] + " " + names[Math.floor(Math.random()*names.length +1)]
  //   var tot = Math.floor(Math.random()*2939493)
  //  arr.push({OrderId:id, Status:stat, Customer: cus, Total: tot, Date: dateNow()})
  // }

  function OrderStatusTemplate(props) {
    return (
      <div className="OrderStatus">
        <span
          className={`${
            props.Status === "Completed" ? "bg-[#def2d0] text-[#245900]" : ""
          }
${props.Status === "Canceled" ? "bg-[#ffdcdc] text-[#900] " : ""}
${props.Status === "Hold" ? "bg-[#f9f1c8] text-[#5e4f00]" : ""}
${props.Status === "Pending" ? "bg-[#d9ecff] text-[#004b9a]" : ""}
 rounded p-1`}
        >
          {" "}
          {props.Status}
        </span>
      </div>
    );
  }

  function OrderNamesTemplate(props) {
    let name = props.Customer.slice(0, 2);
    return (
      <div className="image">
        <small className=" p-1 rounded-full border-slate-700  border">
          {" "}
          {name}
        </small>
        <span className="p-1"> {props.Customer}</span>
      </div>
    );
  }
  return (
    <GridComponent
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
      dataSource={RecentOrdersData}
      allowPaging={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="OrderId" width="100" textAlign="left" />
        <ColumnDirective
          field="Status"
          template={OrderStatusTemplate}
          width="100"
          textAlign="left"
        />
        <ColumnDirective
          field="Customer"
          template={OrderNamesTemplate}
          width="200"
          textAlign="left"
        />
        <ColumnDirective
          field="Date"
          width="120"
          format="C2"
          textAlign="left"
        />
        <ColumnDirective field="Total" width="120" textAlign="left" />
      </ColumnsDirective>
      <Inject
        services={[
          Page,
          Sort,
          Filter,
          Group,
          ContextMenu,
          ExcelExport,
          Edit,
          PdfExport,
        ]}
      />
    </GridComponent>
  );
};
const productData = [
  {
    Product: "Blender iphone 6",
    Price: 580597,
    image:
      "data:image/jpeg;base64,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",
    Sold: 98,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 16,
  },
  {
    Product: "Film tapers Battery charger",
    Price: 2635446,
    image:
      "data:image/jpeg;base64,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",
    Sold: 14,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 45,
  },
  {
    Product: "Battery charger Generator",
    Stars: Math.floor(Math.random() * 5 + 1),
    Price: 2719290,
    image:
      "data:image/jpeg;base64,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",
    Sold: 79,
    BasePrice: 7,
  },
  {
    Product: "iphone 6 undefined",
    Stars: Math.floor(Math.random() * 5 + 1),
    Price: 1224975,
    image:
      "data:image/jpeg;base64,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",
    Sold: 40,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 48,
  },
  {
    Product: "Blender iphone 6",
    Price: 126489,
    image:
      "data:image/jpeg;base64,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",
    Sold: 61,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 2,
  },
  {
    Product: "Pencil Television",
    Price: 2147303,
    image:
      "data:image/jpeg;base64,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",
    Sold: 65,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 50,
  },
  {
    Product: "Generator Battery charger",
    Price: 1676784,
    image: "/static/media/product-2.8f5c0d38.jpeg",
    Sold: 93,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 95,
  },
  {
    Product: "Generator Battery charger",
    Price: 2041938,
    image:
      "data:image/jpeg;base64,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",
    Sold: 89,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 13,
  },
  {
    Product: "Film tapers Battery charger",
    Price: 2803260,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 94,
    BasePrice: 18,
  },
  {
    Product: "Generator Battery charger",
    Price: 346199,
    image:
      "data:image/jpeg;base64,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",
    Sold: 102,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 8,
  },
  {
    Product: "Blender iphone 6",
    Price: 2840696,
    image:
      "data:image/jpeg;base64,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",
    Sold: 48,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 6,
  },
  {
    Product: "Battery charger Pencil",
    Price: 2770362,
    Stars: Math.floor(Math.random() * 5 + 1),
    image: "/static/media/product-13.8f5c0d38.jpeg",
    Sold: 45,
    BasePrice: 56,
  },
  {
    Product: "Battery charger Film tapers",
    Price: 688232,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 16,
    BasePrice: 10,
  },
  {
    Product: "iphone 6 Television",
    Price: 1511562,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 27,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 92,
  },
  {
    Product: "Television Television",
    Price: 1760355,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 18,
    BasePrice: 27,
  },
  {
    Product: "iphone 6 Battery charger",
    Price: 137579,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 61,
    BasePrice: 91,
  },
  {
    Product: "Pencil Battery charger",
    Price: 1784525,
    image:
      "data:image/jpeg;base64,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",
    Sold: 27,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 54,
  },
  {
    Product: "Battery charger Battery charger",
    Price: 2525345,
    image:
      "data:image/jpeg;base64,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",
    Sold: 50,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 20,
  },
  {
    Product: "Television Generator",
    Price: 1516871,
    image:
      "data:image/jpeg;base64,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",
    Sold: 70,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 97,
  },
  {
    Product: "Film tapers Generator",
    Price: 2791147,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 82,
    BasePrice: 34,
  },
  {
    Product: "Generator Battery charger",
    Price: 1347776,
    Stars: Math.floor(Math.random() * 5 + 1),
    image: "/static/media/product-2.8f5c0d38.jpeg",
    Sold: 90,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 26,
  },
  {
    Product: "Film tapers iphone 6",
    Price: 2377427,
    image:
      "data:image/jpeg;base64,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",
    Sold: 81,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 34,
  },
  {
    Product: "Film tapers Pencil",
    Price: 1246034,
    image:
      "data:image/jpeg;base64,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",
    Sold: 96,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 50,
  },
  {
    Product: "Generator Generator",
    Price: 2242586,
    image:
      "data:image/jpeg;base64,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",
    Sold: 81,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 19,
  },
  {
    Product: "Battery charger Battery charger",
    Price: 108313,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 55,
    BasePrice: 1,
  },
  {
    Product: "Television Pencil",
    Price: 2185464,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 77,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 55,
  },
  {
    Product: "Battery charger Pencil",
    Price: 547262,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 69,
    BasePrice: 7,
  },
  {
    Product: "Television iphone 6",
    Price: 2856416,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 60,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 24,
  },
  {
    Product: "Blender Generator",
    Price: 1770734,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 64,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 24,
  },
  {
    Product: "Film tapers iphone 6",
    Price: 1779921,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 74,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 59,
  },
  {
    Product: "Generator Generator",
    Price: 1111154,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 72,
    BasePrice: 77,
  },
  {
    Product: "Blender Generator",
    Price: 2466356,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 21,

    BasePrice: 13,
  },
  {
    Product: "Blender Television",
    Price: 1930501,
    image: "/static/media/product-2.8f5c0d38.jpeg",
    Sold: 36,
    Stars: Math.floor(Math.random() * 5 + 1),
    BasePrice: 87,
  },
  {
    Product: "Television iphone 6",
    Price: 1642283,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,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",
    Sold: 24,
    BasePrice: 27,
  },
  {
    Product: "Generator Generator",
    Price: 1808906,
    Stars: Math.floor(Math.random() * 5 + 1),
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4RB5RXhpZgAATU0AKgAAAAgADAEAAAMAAAABAj0AAAEBAAMAAAABAj0AAAECAAMAAAADAAAAngEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAABAAAApAEbAAUAAAABAAAArAEoAAMAAAABAAIAAAExAAIAAAAiAAAAtAEyAAIAAAAUAAAA1odpAAQAAAABAAAA7AAAASQACAAIAAgACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpADIwMTk6MDE6MzEgMDk6NTQ6MzEAAAAABJAAAAcAAAAEMDIyMaABAAMAAAAB//8AAKACAAQAAAABAAACvKADAAQAAAABAAACvAAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAFyARsABQAAAAEAAAF6ASgAAwAAAAEAAgAAAgEABAAAAAEAAAGCAgIABAAAAAEAAA7vAAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAoACgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//0PVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/9H1VJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//S9G691enonR8vqtzd7MWsvDJjc76NVW6HbfVtcyvdtXj9H1++tOP1B3UM6251lh3NolzcdjSNKmYv81t2n6b/ANN/wvq+9elf4xenZPUfqjm0YrHWWMNdpqZqXsrsZZa1rfzv0bXWbf5C8s+359TQbWNuqeJa4iQQf5TUlPZ9O/xv4VkNz8bYTy+o/wDouz/0qur6b9cfq71ID0MxjHu/MtOw/wCc79H/ANNeOuf0bJ0yMX0nnl1en/Upm9F6e/3YeWWO8HnX8NqSn3wEOAIMg6gjhU+rda6X0XEOZ1PIbjUA7QXalzv3K2N3Psf/AFF4xi9S+uXQP0mFe63HbqQ072/2qj/5BZf1h+svVPrN1OqzPe0OrDaKKgdtbCSBY+P37bPfdZ/6SrSU+3dA+uHQfrC+2rpt5dfSN76bGurfsJ2i5jLAPUq3fnM/m/Z6n84xa911VFTrbXBlbBLnHgBeG/V9l31S+s+Nn9Xsfh1Yz313B9NzRZW9r6d1RYx9dzd2y1n9Rdt1n694fVqxg9IyDS2w1+p1BpAbQzfvyb3Os27X4+HVa/8A467G2fpvoJT1VX1k6a8e+wVuLiBWSd8TtY7btH0vpqzh9X6dmh/2a9rjWS17XSxwI0+hYGOXn9f1mybqsnIvxWZtHtdj4bgyu71c28VdG6Wyxgd7mdPqfn5T/wBJd+tenZ/Nqx9ZuqP+rOHlW4lLrBvNWK+0eo1jo2x/Ubd6tuxJT6GnXl2Jl39T6Pk/WHoubfi5eIwOzGSGtuFTGPyN1VbnYzsimhzLWW7P+6+RX6v0Fh/XH6zt/wC1rbwNPfXWR99bKnpKfUUlwDPr515kepj41o8g9h/8+Wf9StHp3+MCq+5tGdiHFc8gMtD91ZJ/Ne4sZ6X9r9H/AC0JSEQZG6HYcX/RSBZoPXJKk3quOTD2vZ4yJj/NJVlmRRZGyxrp8CJUePmMOT5Jxl4Xr9i6WOcd4kJEkklKsUkkkkp//9P1VBtxMS+s13U12VuJcWPaHAk8u2uCMkkp5zP+oP1ZzZP2c47j+dS4t/6D99f/AEFz2b/imBk4Od8GXMj/AKbC7/z2vREklPkOZ9QfrbgMc+gttrYJLq7NAO7ix+x/t/ktW70/6k4uBjsbjYtWTZWJdlbWOuc76Rt/St3N930K6f5tdT9a+qUdJ6Ffm5IecdhrZaawC4NssZS5wY5zN/0/ooH1e670Tq1YPTM6rJdqTUDttEd349uy9v8AmJIebz3MopdTlWPNBP6SmXggj/SY7v8AviG1mLczaxoIMH6MTH0Z0/NWh/jHyRXjU1gAWctd+cD/AFlyuHm9SADm2OLeCdgIkf2UlU3r/q1fdH2NzqLGl763NcAG2WD07MhrNzWfaXM/7UO/S1/zlf6RLrlGXdhYPRczEc9pNdTot3bmsDMem3c0Oc3Ia1v6W38/9xWcXqmeIl408WD+5F6pm55x6bmkte6xtYyGsH6Nrg7c+du3/g9/5m9JKfKw8fpH1c6lj41r7KasHJaze1jTrXZq70Axj3P/ADn7F570S/a+xjrNp2NLQY1gweS3xXQZXW+qX/VDqz+qUOxr9wwqt/0n+o5m6dGepsrD/wBL+euBuO4tadZIHymT/wBSkp7ivKcdA9rv9fLcjeq4NJcGlp0MmBr29yt3Y1WP0TEoFNRybG0VCx1THP3WFpf7nsc7u5U/rTi4X7U6RgY+PVT9qyjvFTAwekH01QWs2+3+dcqGL4lCcxHgIvj9V3pijxmTYlyxiCeIGq6fvPX9C6gM3plNgc219Y9K0tcHe5mnuc0n3Pq9OxabA12jhzxPivLG/W7rAssfj31tqssc9jBTUAGuPs+gxjvobVsfVz619bzus4mBaaXVXvPqODC1wa1rrHOaW2bfzP3VR5jkMw9zJUBAcWTh4r4Ij18P83D5WaHMQIjGzxaR4q3/AOc9832n2kscPAkfkWhg5jrnvps/nKw1zXcbmOls/wBdr2Pa9YVuUWsst/dDnfcC5Z1/1l6hiY2TkYuPiWZFDW1Mt+0teJeQLHXY7A22r0nN9R+P6n/XVH8P5iYzREflkRGUb09fpCeYx+gk7gW9q/Jx2CwvtY0UwbSXAbAdR6k/Q/tKGP1DAynFuLk1XuaJLa3teQPH2Ery36rfVLqvWusftu25/wCz73udnZLya3ZTiS/dgtYN7K227duSx1Hp/wDaNd/gfU36u9N6hX1LAxfQy6w5vqB73FweNrvW9V9nqf1/proWg//U9VSSSSUpJYn1wf12vor39C3faWvBt9MB1vow71Ps1bw7fbu2ez+c9L1PQ/T+mvJn9e67YXOd1HLO0kOAyrWwQZcwsD27P81JT7B9YM7Fx8Gyi6pmVbkVv9HEtbuZYWAfzzdr/wBC17q/V9q8P6rnX9T+tLnZzG414LaPSxW7WM9Fraqvs/qB36N232LQZ17OqyKsjMzcyyuuQSbja4AxuDG5HqVO3ObXvrd7LP8AttaLfrr9WOo9Pbhdb6KMjLqYduXQN+2Tua71W+nlMa3d9DchanlOoda62+23HyMzIs+zvhtVx9QNa3Th+9tf5vtb+jVjp/1v6hSIsupBbx6lEj78dzHK30yzC6j1fH6Tj3jH6Xe9znvsc1oYTLt9j3+nZY7931LP+CrW70D6uVU/WjN6dmtozBg7WGWiysusi36Nzfpsr2sd/wAJvRtTjj6+dZfU51eNh2hp2zstBMNda58ev9FldfvWI27OvzIsyHVWXuLmsrc5v0zuO1rXefs3r0zqP1Z+r+bdbWKxh2MLqx9lbU1gBG33Ybq/T9T6f6Rj6bH/AOEVXE+oOA3Pqzh1GqzJq1azIpdU0kaM9R9eRZWkq3C+vWW2nE6f0lhMMb9os3amGN+zY+7+U532l65GoVl7LXS7aZLCDB7RuC9Xd/iqt6l1N+d1vqQtrsiacWs16Aba6q7bbL/Tpr/qPst/0isf+M79WfzcrPb8La/+/Y5SIsUoaPD3/Xa++6i12DU37PZ6oYLHw4gFrN0sP0ED9t39V+sOLkuxS4tpfj04+PZD9z227rm3Xs2M2es6ze9v6L0613//AIz31cH/AGsz/wDPp/8AeVaHTP8AFv0Ppm52Ndkm14h11jq3P2/uA+i1rGf1FUlyeKEZHDiHGYyhH1Sqp/N+kzDNMkcctLB2/deNb9Seh7QG5GYwwNCa3Rpx/MrR6D9W8HpGc7qFWTbe9tT662Wta2C/a3e1zNu5y7Kv6q4TXAuuue0ctJaAfmxjXI7vq70w/mvHhFj9P+kqcuV+IZIyjLKOGWhEjv8AZBlGXlwQeHbsP/QnnrN1tRqGgfAd/Vn3/wDRVjpf1VxuoUNv6s5ubQ61t9dfo1UNtLd3puy2Y7G/aamuc99THv8ARt3/AKWq1bdXQOm1mSx1g/dscXN+bD7Xf2lop/I/DZYZ+5kMTXyxj6tf3pSkrmOZjOPDEHXcn9izWta0NaA1rRAA0AATpJLUaj//1fVUkkklKWT1f6rdC6yS/OxWuviBksmu4R9H9NVte/b+5Z+jWskkp866l/ioeJd0vNa9vApy2wf/AGKxv/eR65TqP+L76x4RdY7p1zg3i3De275tYx1eX/7LL3BJKlPzVd0uuu99GQ842RXo+u8Gp4P8qvIbW5W+j53Vug3/AGnANWTST+kqIFjHDzDd2138ti+iHMY9pa9oc06EESCFlZH1S+q2Tu9bpOG5ztXPFDGuP/XGNa9JT5Tg9Xp6rlBuMX05179MR0NcXH8yiz213f8AgVv/AAa6anB+sjKvdiZBI4BaCfwctPrP1H+qXTMU9QwuntpzWPYKHiy2A5zgC70nW+j/ADe//BoOC0Njbp8DCSmz0R/1lw8mv7RjuqwnuDLGXPaPpHbNFYc+z1Pd+6uxXOYFQuz6WDX0z6j41gAHZu/65tXRpKUkkkkpSSSSSlJJJJKUkkkkp//W9VSSSSUpJJJJSkkkklKSSSSU1OpdMxep0Noyg7axwe0scWkOAc3t/JeqNf1T6OwyW2P8nWOj/oFi2UklIcXDxcOr0sattTOSByT4ud9J/wDaRkkklKSSSSUpJJJJSkkkklKSSSSU/wD/1/VUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/9D1VJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//Z/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAoACgDAREAAhEBAxEB/8QBogAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foBAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKCxEAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igAoAKACgAoA/Cj4of8F9f2ZfgZ+1R8Wf2Z/jH8Jvjh4Xt/hn4wHg61+JmhaN4f8Zabr9zaWVm+sarP4B0zW7f4l6fotvqc11a6Rf6P4Y8VRa7pkFrrURtYr9LSE/4H46k82umu60avpptoe4eDP+C3/wDwTV+IPxUl+E3hH9oK21HUrT4b33xH1bxXfeFvFHhnwJoP2N5Gi+H2veIPFmmaFJpHxY1Sxt7zVNH+Ht5YR67qNnaSQwRHUprPT7oByS7/AJfg9fwt5nsOkf8ABUj9h/UbTTrvUfjXo/hpNW0yw13ThrNpeXUVx4d1XUzoemeJJNQ8NR+IdJsfD1/4gjufDtprGo6haWU+v2d1pEcpvYxEztrbf0DmVrtOPqv8rn1R8N/2gPgb8YLae7+Fvxd+HXj6K1mS3vE8LeL9D1e6sriSMzR299Y2t697YzyRK0qQ3dvDI8as6qVUkeRis/yLA4/D5Vjc5yrB5pjKcquEy3F5hhMNj8XSg2p1cLhK1aGIxFKEk4yqUac4Rkmm000dtHL8fiMPUxlDBYuvhKMlCtiqOGrVcPSnLWMKtaEJU6c2tVGclJqzSsevA55HIPII716xyHyX+2T4m/Y8+H/wivvHf7a+h/DPUPg/p+oWGj3t/wDE34aD4m6NaahrTvDYQDR4fC/iu9he7ljMcdzDpypHN5YaaOR4tyclFXbstuv6CcU90n8j+LP9qz9u34TWnjiz+A37AH7LXwz8U+BNW+Oz6/8AD74m/ALXfAfh/Xte8C6kv9ian4P8WfAHUteuvEPho2vifxVocNv4s+IUvgqfVdNtobyx8HeHdGmtTNKrRdkny+9ZXTXM3tZ7P81bVGfslzSck2l0ktktFvstrO/bbY+eP2hfCP8AwUD/AGhfhT40+H3wB/4J9fG/wffnxN8MNFhvPCnwjbXptUtvCPiXxJ8Tta8ZRa54TXWfh34b07SfGb21t/YGm+JNetfiBq3iNvELzx3eiahZUqntFTqOko+1UJOkp3UPacr5OZqMmouXxNQm7N2TtY0punKcOZt0+ZKryWcuVNKSV2vet8N3Hzdnp+g37Kn7O3/BT3TviUnir4Jfs7/FH9m/4dR3Ph3QvG3h39pPwJqt1r3jPSNP8Sanq2p6t4YsbDVtfistQtfDd/aaRHLq1zZQXepW8f8AZNyI59a2/wAAeKHBfiVn/D1DhzxT4f4o8WuKMLQzjNOGM48Ncuy/KMlyPF4vLcNhKOAzrHY7JclpYqhiMfhFi5UsIq9eGHlJYilOpSwB/QXC+d8MYHG1sZwrjsq4SyvFfVsJm2E4nr4vGYvG0qOJrVXXwNHD43HVKNWGHrexjOo6cZVIr2c4xnXv/Tn8CPhF+1Lq+s6Z4k+Inxd1n4U/DLRpdUn0b4N+DNA8MjxD4tvr2bRWh1T4ieKfE+l+JrzRtK0g6PcppHhbwXH4ffUhrmqXPiO9uU+z28/6x9EDgzxH4I8LauXeJNLFYHMsVn2MxuW5NjK9GtWyvL5UMNRsoUZTjg6eLxFGriY4F1G4TlUxUoUqmMqQXyXi/mnDObcU06vC9eOLwtHL6NHFY6nGUYYrFe2r1PdlOEJVfZUJ0ac6zUuaSdKMnTowR+gOpaZpus6fe6TrGn2Oq6VqNtNZ6hpmpWkF9p9/Z3CGOe0vbK6jltrq2njZo5oJ43ikRirqykiv6rPys/Kv42f8EOf+CV/x711fFni/9kHwB4b8YwXK3+n+K/hLf+Kvg1q2laok0VxFq+nwfDDXvC2ipqtvcwx3Ntfz6TcT290PtULJcEy1Hs4XulbW/utxV+9k0h3f/D6/n/WiO4/Y9/4J5+H/ANkbxpqOo+FtZW48IaX/AG9p3gqG91XXfEPjSbQNWlP2a18beJtXEEuuXlvFtuLi6ujqVxc3yQTNdbrcSy6Xv1b9f619fUyULSvaKWu39afifpTSNAoAKACgAoAKACgD/9k=",
    Sold: 11,
    BasePrice: 21,
  },
];

// var arr = []
// var images = [product1, product10, product11, product12, product13, product14, product2, product3, product4, product5, product6, product7, product8, product9]
// var names = [  "Blender", "iphone 6", "Television", "Generator", "Battery charger", "Pencil", "Film tapers"]
// for(var i=0; i<35; i++ ){
//   var id = Math.floor(Math.random()*10000)
//   var image =  images[Math.floor(Math.random()*images.length)]
//   var cus =  names[Math.floor(Math.random()*names.length)] + " " + names[Math.floor(Math.random()*names.length +1)]
//   var tot = Math.floor(Math.random()*2939493)
//   var base = Math.floor(Math.random()*100)

//   var sol = Math.floor(Math.random()*100+3)

//  arr.push({Product:cus, Price: tot, image:image, Sold:sol, BasePrice:base})
// }
// console.log(arr)

const MonthlyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="Date" style={{ fontSize: "8px" }} stroke="gray" />
        {/* <YAxis /> */}
        <Tooltip height={50} />
        <Area type="monotone" dataKey="Sales" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const OrdersNow = () => {
  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart width={300} height={100} data={data}>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Sales"
          stroke="#8884d8"
          strokeWidth={1}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const OrdersOverTime = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        {/* <Bar dataKey="Date" fill="#8884d8" /> */}
        <Bar dataKey="Sales" fill="#b695ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const TrafficSource = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={800} height={200}>
        <Pie
          data={TrafficSourceData}
          // cx={120}
          // cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {TrafficSourceData.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={TrafficSourceData[index].color}
              />
            );
          })}
        </Pie>

        <Tooltip width={20} />
      </PieChart>
    </ResponsiveContainer>
  );
};

const Stars = () => {
  // const [rating, setRating] = useState(0) // initial rating value

  // // Catch Rating value
  // const handleRating = (rate: number) => {
  //   setRating(rate)
  //   // other logic
  // }

  return (
    <small className="App flex flex-row p-2">
      <Rating initialValue={2} ratingValue={0} className="flex" />
    </small>
  );
};

const Dashboard = () => {
  const { screenSize } = useStateContext();
  const [topProducts, SettopProducts] = useState(productData.slice(0, 10));
  const [toggleTopProduct, SettoggleTopProduct] = useState(false);

  const SortBestProduct = (num) => {
    SettopProducts(productData.slice(0, num));
    SettoggleTopProduct(!toggleTopProduct);
  };
  const toggleBestProduct = (num) => {
    SettoggleTopProduct(!toggleTopProduct);
  };

  return (
    <div className=" mb-0" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <h1 className="text-3xl p-4">Dashboard</h1>
      <div
        id="OrdersStatistics"
        className="p-2 text-white px-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3"
      >
        <div className="h-full w-full mb-3 shadow-lg border bg-[#3a2272] rounded p-0">
          <div className="topTitle flex  flex-row justify-between items-center p-4">
            <h4 className="text-xl font-bold">Total Sales</h4>
            <h6 className="text-sm text-[#7245dd] hover:text-slate-300 font-bold">
              View Report
            </h6>
          </div>
          <div className="totalSalesMonth flex  flex-col justify-start p-4">
            <h1 className="text-2xl py-3 font-bold">$74,958.49</h1>
            <h6 className="text-sm py-3 font-bold text-[#d2c0fd] ">
              $7,395.37 <span>in last month</span>
            </h6>
          </div>

          <div className="totalSalesWeek flex  flex-row justify-between items-center p-4 ">
            <div className="flex flex-col">
              <small className="py-2">This week so far</small>
              <h6 className="py-1 text-2xl font-bold">$1,338.72</h6>
            </div>

            <div className="flex flex-col">
              <div className="flex text-[#1ee0ac] flex-row items-center">
                <span>
                  <small>
                    <IoIosArrowRoundUp />{" "}
                  </small>
                </span>
                <small className="py-0 ">4.85%</small>
              </div>
              <h6 className="py-0 text-sm font-bold">vs. last week</h6>
            </div>
          </div>
          <MonthlyChart />
        </div>

        <div className="h-full rounded mb-4 flex flex-col justify-between text-slate-900 border shadow-xl w-full bg-white ">
          <div className=" p-2 bg-white w-full h-10">
            <div className="topTitle flex  flex-row justify-between items-center p-4">
              <h4 className="text-sm font-bold">Average Order</h4>
              <h6 className="text-xl font-bold hover:text-white hover:bg-black p-2">
                <TbGridDots />
              </h6>
            </div>
          </div>

          <div className="mt-2 w-full h-20">
            <div className="totalSalesWeek flex  flex-row justify-between items-center p-4 ">
              <div className="flex flex-col">
                <h6 className="py-1 text-2xl font-bold">$4,338.72</h6>
              </div>

              <div className="flex flex-col p-2">
                <div className="flex text-[#1ee0ac] flex-row items-center">
                  <span>
                    <small>
                      <IoIosArrowRoundUp />{" "}
                    </small>
                  </span>
                  <small className="py-0 ">4.85%</small>
                </div>
                <h6 className="py-0 text-sm font-bold">vs. last week</h6>
              </div>
            </div>
          </div>

          <div className="mt-2  w-full h-60">
            <div className="totalSalesMonth flex h-full  flex-col justify-between   px-2 ">
              <small className="py-3 font-bold pb-0">Orders over time</small>
              <OrdersOverTime />
            </div>
          </div>
        </div>

        <div className="h-full rounded mb-4 flex flex-col justify-between text-slate-900 border shadow-xl w-full bg-white ">
          <div className="h-48 shadow-lg w-full  p-1 mb-1">
            <p className="p-2 text-xl bold">Orders</p>
            <div className="flex flex-row justify-between items-end">
              <div className="p-2">
                <p className="text-lg">364</p>
              </div>
              <div className="p-2">
                <div className="flex flex-col p-2">
                  <div className="flex text-[#1ee0ac] flex-row items-center">
                    <span>
                      <small>
                        <IoIosArrowRoundUp />{" "}
                      </small>
                    </span>
                    <small className="py-0 ">4.85%</small>
                  </div>
                  <h6 className="py-0 text-sm font-bold">vs. last week</h6>
                </div>
              </div>
            </div>
            <OrdersNow />
          </div>

          <div className="h-48 w-full  p-2 mt-1 ">
            <p className="p-2 text-xl bold">Sales</p>
            <div className="flex flex-row justify-between items-end">
              <div className="p-2">
                <p className="text-lg">$364</p>
              </div>
              <div className="p-2">
                <div className="flex flex-col p-2">
                  <div className="flex text-[#1ee0ac] flex-row items-center">
                    <span>
                      <small>
                        <IoIosArrowRoundUp />{" "}
                      </small>
                    </span>
                    <small className="py-0 ">4.85%</small>
                  </div>
                  <h6 className="py-0 text-sm font-bold">vs. last week</h6>
                </div>
              </div>
            </div>
            <OrdersNow />
          </div>
        </div>
      </div>

      <div
        id="RecentOrdersAndTraffic "
        className={` ${
          screenSize < 1400 ? "block" : "flex  items-normal justify-between"
        } `}
      >
        <div
          className={`${
            screenSize < 1400 ? "w-full" : "w-9/12 mr-4"
          } my-4 rounded-md shadow-lg border-slate-300 border orders h-auto p-1 `}
        >
          <div className="btns flex justify-between p-1 my-4 text-wite">
            <p>Recent orders</p>
            <button
              type="button"
              className="hover:text-white hover:bg-black hover:p-1"
            >
              <TbGridDots />
            </button>
          </div>
          <div className="odersDiv">
            <RecentOrders />
          </div>
        </div>
        <div
          className={`${
            screenSize < 1400 ? "w-full" : "w-3/12"
          } my-4 shadow-lg orders h-auto border-slate-300 border  p-1  bg-white`}
        >
          <div className="btns flex justify-between p-2 my-4 text-wite">
            <p>Traffic Sources</p>
            <button
              type="button"
              className="hover:text-white hover:bg-black hover:p-1"
            >
              <TbGridDots />
            </button>
          </div>
          <div className="trafficData">
            <TrafficSource />
            <div className="Traffic sources p-2">
              <div className="flex flex-row justify-between p-4 b border">
                <p>Source</p>
                <p>Traffic</p>
              </div>
              {TrafficSourceData.map((item) => {
                return (
                  <div className="flex border  flex-row justify-between p-1">
                    <p>
                      <span
                        className={` px-1 rounded-full mr-2 bg-[${item.color}]`}
                      >
                        {" "}
                      </span>
                      {item.name}
                    </p>
                    <p>{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        id="BestPerformingProducts "
        className={` reelative ${
          screenSize < 1400 ? "block" : "flex  items-normal justify-between"
        } my-5`}
      >
        <div
          className={`${
            screenSize < 1400 ? "w-full" : "w-5/12"
          } rounded-md shadow-lg border-slate-300 border orders h-auto p-1 `}
        >
          <div className="btns flex justify-between p-1 my-4 text-wite">
            <p>Top Products</p>
            <div className="flex flex-col items-end justify-end ">
              <button
                onClick={() => toggleBestProduct()}
                type="button"
                className="hover:text-white hover:bg-black hover:p-1"
              >
                <TbGridDots />
              </button>
              <div
                className={`p-2 mr-3 shadow-xl  rounded-md text-gray-600 justify-between bg-white flex flex-col items-start ${
                  toggleTopProduct ? "relative" : "scale-y-0 static"
                }   `}
              >
                <button
                  onClick={() => SortBestProduct(10)}
                  className="p-1 hover:text-red-500"
                >
                  Daily
                </button>
                <button
                  onClick={() => SortBestProduct(7)}
                  className="p-1 hover:text-red-500"
                >
                  weekly
                </button>
                <button
                  onClick={() => SortBestProduct(30)}
                  className="p-1  hover:text-red-500"
                >
                  Monthly
                </button>
              </div>
            </div>
          </div>
          <div className="BestProducts -mt-28">
            <div className="flex flex-row justify-between items-center px-4">
              <p className="px-4">Product</p>
              <p className="px-4">Total</p>
            </div>
            {topProducts.map((item) => {
              return (
                <div
                  className={`flex flex-row px-4 items-center justify-between text-[${"#8094ae"}]`}
                >
                  <div className="product flex items-center flex-row p-4 py-2">
                    <span className="rounded-md ">
                      <img
                        className="px-0  rounded-md border mr-3 "
                        src={item.image}
                        alt={item.product}
                      />
                    </span>
                    <div className="flex flex-col">
                      <small> {item.Product}</small>
                      <small> ${item.BasePrice} </small>
                    </div>
                  </div>
                  <div className="product flex items-center flex-row px-2">
                    <div className="flex flex-col items-end ">
                      <small>${item.Price}</small>
                      <small> {item.Sold} sold </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`${
            screenSize < 1400 ? "w-full" : "w-7/12 ml-2"
          } rounded-md shadow-lg border-slate-300 border orders h-auto p-1 `}
        >
          <div className="btns flex justify-between p-1 my-4 text-wite">
            <p>Recent Reviews</p>
            <div className="flex flex-col items-end justify-end ">
              <button
                onClick={() => toggleBestProduct()}
                type="button"
                className="hover:text-white hover:bg-black hover:p-1"
              >
                <TbGridDots />
              </button>
              <div
                className={`p-2 mr-3 shadow-xl rounded-md text-gray-600 justify-between bg-white flex flex-col items-start  ${
                  toggleTopProduct ? "relative" : "scale-y-0 static"
                }  `}
              >
                <button
                  onClick={() => SortBestProduct(10)}
                  className="p-1 hover:text-red-500"
                >
                  Daily
                </button>
                <button
                  onClick={() => SortBestProduct(7)}
                  className="p-1 hover:text-red-500"
                >
                  weekly
                </button>
                <button
                  onClick={() => SortBestProduct(30)}
                  className="p-1  hover:text-red-500"
                >
                  Monthly
                </button>
              </div>
            </div>
          </div>
          <div className="BestProducts -mt-28">
            {/* <div className="flex flex-row justify-between items-center px-4">
     <p className="px-4">Product</p>
     <p className="px-4">Total</p>
   </div> */}
            {topProducts.map((item) => {
              return (
                <div
                  className={`flex flex-row px-4 items-center border justify-between text-[${"#8094ae"}]`}
                >
                  <div className="product flex items-center flex-row p-4 py-2">
                    <span className="rounded-md ">
                      <img
                        className="px-0 rounded-md  mr-2 "
                        src={item.image}
                        alt={item.product}
                      />
                    </span>
                    <div className="flex flex-col p-2">
                      <small>
                        <NavLink to={"/hello"}>{item.Product}</NavLink>{" "}
                      </small>
                      <small className="text-gray-400">
                        {" "}
                        Reviewed by: Bona Andrews{" "}
                      </small>
                    </div>
                  </div>
                  <div className="product flex items-center flex-row px-4">
                    <div className="flex flex-row items-end p-2">
                      {Array.from(Array(item.Stars).keys()).map((item) => {
                        return (
                          <small>
                            <AiFillStar className="text-[#BFB861]" />
                          </small>
                        );
                      })}
                      {Array.from(Array(5 - item.Stars).keys()).map((item) => {
                        return (
                          <small>
                            <AiFillStar className="" />
                          </small>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
