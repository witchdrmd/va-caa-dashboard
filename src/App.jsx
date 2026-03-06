import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid, ReferenceLine, LineChart, Line, ComposedChart, PieChart, Pie, Legend, ScatterChart, Scatter, ZAxis } from "recharts";

const P = [{"n":"DEMAS, MATTHEW, PA","s":"DEMAS, MATTHEW","sp":"Primary Care","nt":334,"us":96.2,"np":14.5,"rd":8.0,"gt":0.61,"ad":23,"bD":3.04,"bE":9.83,"bA":5.3,"bP":303,"pD":1.6,"pE":7.5,"pP":340,"wd":[1.9,1.8,1.6,1.4,1.2],"we":[7.7,8.9,8.0,7.2,5.9],"wp":[84,58,60,77,61],"dd":[["Jan 27",2.8,9.3,16],["Jan 28",2.1,7.2,19],["Jan 29",1.4,8.8,11],["Jan 30",1.4,7.1,20],["Feb 02",1.5,6.8,18],["Feb 03",2.0,10.8,12],["Feb 04",2.2,11.1,8],["Feb 06",2.2,9.9,14],["Feb 09",1.4,6.6,24],["Feb 10",2.0,8.5,15],["Feb 11",1.1,6.7,17],["Feb 12",1.6,8.8,14],["Feb 13",1.8,8.2,14],["Feb 17",1.3,7.0,19],["Feb 18",1.5,6.9,18],["Feb 20",1.4,7.5,19],["Feb 23",1.5,7.3,21],["Feb 24",2.0,11.2,4],["Feb 25",1.8,9.1,13],["Feb 26",1.2,6.5,12],["Feb 27",1.9,8.6,13],["Mar 02",0.0,0.3,19]]},{"n":"MIRLY, ALAN K., PA C","s":"MIRLY, ALAN","sp":"Primary Care","nt":198,"us":96.1,"np":10.4,"rd":24.0,"gt":0.74,"ad":19,"bD":4.49,"bE":20.96,"bA":7.9,"bP":123,"pD":3.7,"pE":17.1,"pP":205,"wd":[4.1,2.1,6.4,3.8,2.8],"we":[18.9,10.9,28.9,17.6,11.9],"wp":[44,40,33,43,45],"dd":[["Jan 27",5.0,26.4,7],["Jan 28",4.6,20.7,13],["Jan 29",2.9,13.6,13],["Jan 30",4.4,18.1,11],["Feb 03",3.2,12.2,12],["Feb 04",1.9,12.6,12],["Feb 05",4.3,24.6,5],["Feb 06",0.0,1.4,11],["Feb 10",7.2,32.8,12],["Feb 11",6.5,30.1,9],["Feb 12",5.5,24.2,12],["Feb 17",7.0,34.5,10],["Feb 18",4.8,20.1,13],["Feb 19",0.1,3.3,7],["Feb 20",2.4,10.0,13],["Feb 24",0.1,1.7,11],["Feb 25",3.0,11.7,12],["Feb 26",3.0,14.4,12],["Feb 27",5.4,20.2,10]]},{"n":"ANTLES, JOSHUA S, PA C","s":"ANTLES, JOSHUA","sp":"Primary Care","nt":178,"us":100.0,"np":8.5,"rd":31.0,"gt":0.8,"ad":21,"bD":8.43,"bE":34.77,"bA":6.4,"bP":135,"pD":8.1,"pE":29.3,"pP":154,"wd":[7.6,9.2,14.2,7.4,6.9],"we":[25.1,34.0,48.6,26.6,27.8],"wp":[48,23,12,29,42],"dd":[["Jan 27",9.8,31.8,9],["Jan 28",22.0,61.9,4],["Jan 29",4.3,14.6,15],["Jan 30",4.9,20.5,15],["Feb 02",10.0,29.2,5],["Feb 04",15.9,48.6,5],["Feb 05",5.7,23.7,9],["Feb 06",8.5,27.4,9],["Feb 10",30.1,132.5,2],["Feb 11",11.0,31.9,10],["Feb 17",46.9,228.5,1],["Feb 18",4.6,14.7,17],["Feb 19",8.1,26.6,11],["Feb 24",10.3,40.6,7],["Feb 25",5.4,23.1,10],["Feb 26",8.6,35.8,8],["Feb 27",7.5,30.2,10],["Mar 02",2.7,9.5,7]]},{"n":"KHODRA, BEVERLY ELAINE, MD","s":"KHODRA, BEVERLY","sp":"Primary Care","nt":155,"us":100.0,"np":9.7,"rd":18.0,"gt":0.69,"ad":16,"bD":5.23,"bE":17.0,"bA":7.1,"bP":145,"pD":2.4,"pE":9.7,"pP":148,"wd":[2.4,1.7,4.1,3.2,0.9],"we":[8.8,7.9,16.2,12.5,4.7],"wp":[41,46,21,24,16],"dd":[["Jan 27",4.2,16.3,6],["Jan 28",1.3,5.5,10],["Jan 29",2.3,10.2,10],["Jan 30",2.3,7.2,15],["Feb 03",1.8,7.3,13],["Feb 04",1.9,7.8,9],["Feb 05",2.2,11.1,15],["Feb 09",0.6,3.5,9],["Feb 10",2.9,13.3,7],["Feb 11",5.5,18.4,7],["Feb 12",4.0,16.8,7],["Feb 17",2.8,14.5,11],["Feb 18",2.6,6.0,8],["Feb 19",5.1,18.4,5],["Feb 27",0.9,4.4,11],["Mar 02",0.9,5.4,5]]},{"n":"COTTER, WILLIAM JOSEPH, MD","s":"COTTER, WILLIAM","sp":"Primary Care","nt":128,"us":91.4,"np":5.6,"rd":24.0,"gt":0.79,"ad":23,"bD":2.62,"bE":18.92,"bA":18.8,"bP":198,"pD":3.4,"pE":26.7,"pP":138,"wd":[3.9,3.3,5.0,3.1,2.3],"we":[26.7,20.4,40.8,35.4,19.6],"wp":[30,31,19,22,36],"dd":[["Jan 27",5.8,29.0,5],["Jan 28",8.8,203.6,1],["Jan 29",2.3,15.9,12],["Jan 30",18.7,170.1,1],["Feb 02",3.0,8.2,11],["Feb 03",1.6,43.5,2],["Feb 04",5.2,26.0,5],["Feb 05",2.4,18.5,11],["Feb 06",4.1,20.7,5],["Feb 09",3.3,13.4,8],["Feb 10",15.8,204.2,1],["Feb 11",0.1,35.5,1],["Feb 12",6.3,34.1,12],["Feb 13",0.5,9.7,5],["Feb 17",2.2,84.3,1],["Feb 18",11.1,103.9,1],["Feb 19",3.7,33.6,9],["Feb 23",1.7,19.8,11],["Feb 24",1.6,8.2,12],["Feb 25",1.1,25.4,10],["Feb 26",3.4,15.9,12],["Mar 02",5.6,81.2,2]]},{"n":"Chandler, Megan M, MD","s":"Chandler, Megan","sp":"Primary Care","nt":114,"us":75.5,"np":7.1,"rd":34.0,"gt":0.86,"ad":16,"bD":2.37,"bE":11.01,"bA":5.7,"bP":149,"pD":1.4,"pE":8.2,"pP":150,"wd":[1.2,2.1,1.6,0.9,0.8],"we":[5.7,15.5,7.2,5.8,5.7],"wp":[35,31,43,28,13],"dd":[["Jan 27",1.4,4.0,12],["Jan 28",1.5,7.0,11],["Jan 29",0.7,6.2,12],["Feb 03",5.9,33.5,3],["Feb 04",0.6,4.6,19],["Feb 05",11.7,110.1,2],["Feb 09",1.5,10.6,7],["Feb 10",4.7,30.6,4],["Feb 11",0.1,1.6,28],["Feb 12",4.2,12.6,11],["Feb 17",0.6,4.3,9],["Feb 18",1.8,10.1,6],["Feb 19",0.1,1.4,5],["Feb 23",1.1,3.8,8],["Feb 24",0.1,2.4,5],["Mar 02",1.3,7.8,8]]},{"n":"VanMeter III, Melvin C, NP","s":"VanMeter, Melvin","sp":"Family Medicine","nt":107,"us":100.0,"np":10.7,"rd":31.0,"gt":0.71,"ad":10,"bD":1.01,"bE":6.05,"bA":18.9,"bP":155,"pD":1.1,"pE":9.4,"pP":76,"wd":[0.5,1.9,0.8,null,null],"we":[6.8,13.2,6.9,null,null],"wp":[28,31,17,null,null],"dd":[["Jan 27",0.0,1.6,11],["Jan 28",0.7,13.9,8],["Jan 29",0.8,7.0,9],["Feb 03",1.1,6.0,8],["Feb 04",0.6,8.8,8],["Feb 05",2.4,13.1,9],["Feb 06",3.7,28.7,6],["Feb 10",2.7,17.8,4],["Feb 12",0.2,3.5,13]]},{"n":"Gregg, Sarah Christine, ARNP","s":"Gregg, Sarah","sp":"Primary Care","nt":103,"us":84.4,"np":6.9,"rd":17.0,"gt":0.71,"ad":15,"bD":11.27,"bE":33.37,"bA":2.6,"bP":91,"pD":6.0,"pE":19.6,"pP":122,"wd":[6.9,6.6,5.3,10.9,3.8],"we":[25.4,21.4,15.8,26.8,14.2],"wp":[26,34,26,7,29],"dd":[["Jan 27",4.2,30.0,5],["Jan 29",15.6,38.4,5],["Jan 30",5.9,19.5,7],["Feb 02",4.5,20.1,9],["Feb 03",6.1,20.6,8],["Feb 04",8.2,23.5,8],["Feb 05",5.7,17.7,11],["Feb 09",6.7,25.5,7],["Feb 10",9.4,20.0,2],["Feb 12",5.3,17.0,12],["Feb 13",4.6,13.9,12],["Feb 23",10.9,26.8,7],["Feb 24",4.7,17.5,8],["Feb 26",6.6,22.8,11],["Mar 02",0.0,2.0,10]]},{"n":"Ziegler, Mark L, NP","s":"Ziegler, Mark","sp":"Primary Care","nt":101,"us":74.3,"np":4.8,"rd":27.0,"gt":0.74,"ad":21,"bD":11.68,"bE":41.4,"bA":9.0,"bP":113,"pD":4.9,"pE":16.9,"pP":95,"wd":[10.6,3.7,null,4.0,3.1],"we":[36.0,11.2,null,16.0,10.2],"wp":[18,28,null,24,25],"dd":[["Jan 27",12.4,38.9,5],["Jan 28",17.4,48.3,5],["Jan 29",3.1,16.2,6],["Jan 30",20.5,108.9,1],["Feb 02",2.3,5.3,1],["Feb 03",3.2,17.3,5],["Feb 04",8.8,24.0,5],["Feb 05",1.9,5.1,12],["Feb 06",3.5,7.7,6],["Feb 17",3.2,17.1,5],["Feb 18",5.4,18.7,8],["Feb 19",2.0,15.0,4],["Feb 20",4.3,23.3,1],["Feb 23",4.1,10.9,6],["Feb 24",2.5,3.6,8],["Feb 25",1.6,10.3,8],["Feb 26",7.6,26.5,4],["Mar 02",3.1,7.8,5]]},{"n":"BACHMEIER, TRISH M, NP","s":"BACHMEIER, TRISH","sp":"Family Medicine","nt":98,"us":89.9,"np":4.5,"rd":28.0,"gt":0.75,"ad":22,"bD":20.88,"bE":64.57,"bA":12.0,"bP":83,"pD":9.3,"pE":47.0,"pP":90,"wd":[8.8,7.4,8.1,20.9,17.1],"we":[38.5,35.3,34.1,213.5,78.5],"wp":[32,27,21,4,6],"dd":[["Jan 28",8.1,26.5,9],["Jan 29",11.8,39.1,6],["Jan 30",6.9,30.8,9],["Feb 02",5.9,27.4,8],["Feb 03",25.2,91.2,1],["Feb 04",5.0,24.1,9],["Feb 06",6.4,32.7,7],["Feb 09",8.2,33.0,10],["Feb 10",4.5,36.3,4],["Feb 11",11.9,49.6,5],["Feb 12",35.8,108.1,1],["Feb 13",5.2,19.6,11],["Feb 19",12.3,61.2,2],["Feb 20",34.7,391.4,1],["Feb 23",14.9,106.3,1],["Feb 25",25.6,119.9,1],["Feb 27",5.1,44.5,2],["Mar 02",9.4,22.3,3]]},{"n":"NEWCOMER, TAMMY, DNP","s":"NEWCOMER, TAMMY","sp":"Primary Care","nt":70,"us":59.8,"np":3.3,"rd":11.0,"gt":0.61,"ad":21,"bD":6.91,"bE":54.49,"bA":0.6,"bP":24,"pD":3.2,"pE":26.6,"pP":103,"wd":[3.4,4.9,3.4,2.9,2.5],"we":[52.5,63.0,21.4,17.6,18.2],"wp":[9,11,26,39,18],"dd":[["Jan 27",3.0,57.6,1],["Jan 28",1.8,36.6,2],["Jan 29",11.7,90.7,1],["Jan 30",3.8,56.2,2],["Feb 02",1.5,46.1,3],["Feb 03",11.7,134.2,1],["Feb 04",2.3,26.1,4],["Feb 06",11.3,181.9,1],["Feb 09",2.9,24.2,5],["Feb 10",2.6,22.5,4],["Feb 11",2.3,14.6,10],["Feb 12",4.8,25.4,6],["Feb 13",4.4,28.1,6],["Feb 17",3.4,26.4,5],["Feb 18",3.9,17.9,10],["Feb 19",4.0,23.5,7],["Feb 20",1.9,13.0,12],["Feb 23",1.0,11.3,5],["Feb 24",2.1,18.2,6],["Feb 25",2.5,15.6,7],["Feb 26",3.1,21.7,5]]},{"n":"Pope, Melody F, NP FNP","s":"Pope, Melody","sp":"Primary Care","nt":70,"us":56.0,"np":3.0,"rd":20.0,"gt":0.65,"ad":23,"bD":8.05,"bE":24.06,"bA":6.3,"bP":125,"pD":5.9,"pE":20.0,"pP":122,"wd":[7.0,7.5,8.5,4.6,4.0],"we":[25.8,22.9,22.9,16.8,15.7],"wp":[19,27,14,36,26],"dd":[["Jan 27",20.6,69.4,2],["Jan 28",5.0,14.5,3],["Jan 29",4.0,17.8,6],["Jan 30",8.5,27.0,3],["Feb 02",5.3,23.9,5],["Feb 03",21.3,75.6,2],["Feb 04",3.8,10.7,8],["Feb 05",4.1,22.7,5],["Feb 06",13.6,35.6,2],["Feb 09",8.1,19.7,10],["Feb 10",13.9,36.6,4],["Feb 11",6.3,17.4,10],["Feb 17",5.6,16.5,13],["Feb 18",5.0,16.2,6],["Feb 19",3.1,10.2,1],["Feb 20",4.8,23.8,4],["Feb 23",3.4,15.6,12],["Feb 24",4.7,17.1,10],["Feb 25",13.6,49.3,1],["Feb 26",2.6,17.9,5],["Feb 27",3.8,11.8,8],["Mar 02",0.0,1.7,2]]},{"n":"Paul, Denae Kristyn, PA C","s":"Paul, Denae","sp":"[Not Mapped]","nt":61,"us":100.0,"np":3.8,"rd":35.0,"gt":0.88,"ad":16,"bD":null,"bE":null,"bA":null,"bP":null,"pD":8.8,"pE":28.2,"pP":55,"wd":[13.1,10.6,9.8,7.9,2.5],"we":[42.6,33.1,28.8,30.6,7.7],"wp":[11,13,12,7,12],"dd":[["Jan 27",0.1,16.9,2],["Jan 28",16.0,56.5,3],["Jan 29",5.1,19.8,4],["Jan 30",37.8,93.1,2],["Feb 03",7.4,27.0,4],["Feb 04",9.4,34.4,3],["Feb 05",19.2,45.5,3],["Feb 06",7.3,27.6,3],["Feb 10",9.1,36.2,4],["Feb 11",8.7,21.3,4],["Feb 12",11.8,28.8,4],["Feb 17",14.1,55.6,3],["Feb 18",3.3,11.9,4],["Feb 24",0.6,3.3,4],["Feb 26",4.7,8.5,4],["Feb 27",2.2,11.2,4]]},{"n":"RAVIPATI, MAMATA, MD","s":"RAVIPATI, MAMATA","sp":"Primary Care","nt":51,"us":96.2,"np":4.2,"rd":16.0,"gt":0.7,"ad":12,"bD":5.91,"bE":30.3,"bA":0.2,"bP":60,"pD":3.2,"pE":25.4,"pP":53,"wd":[2.7,3.1,2.9,3.2,3.6],"we":[29.7,18.8,24.2,28.7,30.8],"wp":[1,13,15,14,10],"dd":[["Feb 02",2.7,29.7,1],["Feb 03",2.5,14.1,5],["Feb 06",3.4,20.1,8],["Feb 10",2.3,21.0,6],["Feb 12",2.5,24.1,1],["Feb 13",2.8,21.8,8],["Feb 17",1.8,18.6,5],["Feb 18",5.3,67.0,1],["Feb 19",8.8,95.1,1],["Feb 20",3.0,13.1,7],["Feb 24",4.0,24.1,5],["Feb 27",2.2,19.2,5]]},{"n":"Slobig, Coreen M, ARNP","s":"Slobig, Coreen","sp":"Primary Care","nt":35,"us":40.7,"np":1.5,"rd":10.0,"gt":0.7,"ad":23,"bD":26.82,"bE":57.98,"bA":16.1,"bP":46,"pD":16.0,"pE":44.9,"pP":84,"wd":[13.1,18.6,35.8,5.6,15.7],"we":[33.9,51.6,90.5,17.2,56.6],"wp":[27,15,11,17,14],"dd":[["Jan 27",11.0,28.4,7],["Jan 28",20.2,42.6,6],["Jan 29",15.3,34.9,7],["Jan 30",48.2,190.3,1],["Feb 02",0.2,4.1,6],["Feb 03",62.7,143.7,2],["Feb 04",11.1,30.8,4],["Feb 05",4.8,24.1,7],["Feb 06",38.1,97.0,2],["Feb 10",28.6,98.9,2],["Feb 11",16.3,61.7,3],["Feb 12",52.0,108.7,4],["Feb 13",39.2,82.5,2],["Feb 17",13.5,32.9,4],["Feb 18",8.5,25.0,4],["Feb 19",0.8,12.7,4],["Feb 20",0.8,1.9,5],["Feb 24",78.5,282.2,1],["Feb 25",8.8,19.0,5],["Feb 26",8.8,34.8,4],["Feb 27",13.0,49.1,4]]},{"n":"THOMPSON, MARTIN M, FNP","s":"THOMPSON, MARTIN","sp":"Primary Care","nt":22,"us":35.5,"np":1.4,"rd":21.0,"gt":0.64,"ad":16,"bD":5.78,"bE":24.56,"bA":null,"bP":49,"pD":3.1,"pE":18.6,"pP":62,"wd":[3.5,4.0,null,2.6,2.0],"we":[15.9,26.1,null,12.7,23.6],"wp":[16,15,null,21,10],"dd":[["Jan 27",14.7,67.5,1],["Jan 28",2.7,12.3,5],["Jan 29",1.6,8.4,8],["Jan 30",7.7,29.5,2],["Feb 03",4.5,25.5,3],["Feb 04",6.1,33.6,3],["Feb 05",2.1,14.1,8],["Feb 06",10.9,102.3,1],["Feb 17",5.8,53.8,1],["Feb 18",1.2,9.6,7],["Feb 19",3.6,9.3,10],["Feb 20",1.5,17.8,3],["Feb 24",1.2,20.3,2],["Feb 25",2.4,14.4,2],["Feb 26",2.2,33.6,3],["Feb 27",1.9,21.9,3]]},{"n":"Weiland, Karen M, NP","s":"Weiland, Karen","sp":"Primary Care","nt":22,"us":35.5,"np":1.0,"rd":44.0,"gt":0.88,"ad":21,"bD":10.87,"bE":37.08,"bA":null,"bP":61,"pD":10.7,"pE":33.9,"pP":62,"wd":[11.7,8.7,10.9,9.1,15.4],"we":[36.0,26.5,37.1,31.9,43.7],"wp":[10,17,13,13,9],"dd":[["Jan 27",8.3,31.7,3],["Jan 28",27.6,73.7,1],["Jan 29",6.7,42.4,1],["Jan 30",15.3,40.4,2],["Feb 02",8.9,22.7,3],["Feb 03",10.6,38.2,2],["Feb 04",6.4,15.6,6],["Feb 05",9.0,33.6,2],["Feb 09",5.2,16.8,7],["Feb 10",21.6,56.3,2],["Feb 11",5.8,27.4,3],["Feb 12",13.9,45.6,3],["Feb 13",8.0,30.0,5],["Feb 17",7.4,48.0,2],["Feb 19",9.8,30.4,4],["Feb 20",13.3,39.3,2],["Feb 23",7.4,23.6,5],["Feb 24",15.7,42.5,2],["Feb 25",10.5,42.6,2],["Feb 26",8.1,37.2,3],["Mar 02",31.0,55.4,2]]},{"n":"CARTNEY, JONATHAN L, NP FNP C","s":"CARTNEY, JONATHAN","sp":"Primary Care","nt":18,"us":29.5,"np":0.9,"rd":46.0,"gt":0.93,"ad":19,"bD":10.54,"bE":37.8,"bA":19.1,"bP":33,"pD":6.2,"pE":20.6,"pP":61,"wd":[5.9,11.2,6.9,5.7,3.3],"we":[19.5,38.9,19.4,24.8,9.6],"wp":[14,9,12,10,16],"dd":[["Jan 27",4.0,16.8,6],["Jan 28",8.9,24.6,2],["Jan 29",7.7,15.5,3],["Feb 02",5.9,25.5,3],["Feb 03",13.2,32.5,1],["Feb 04",10.0,28.6,5],["Feb 05",20.4,76.8,1],["Feb 06",8.4,45.9,1],["Feb 09",9.2,52.1,1],["Feb 10",3.7,9.3,6],["Feb 11",8.0,21.5,4],["Feb 12",14.5,45.4,2],["Feb 17",7.7,30.2,1],["Feb 19",6.6,27.0,3],["Feb 20",6.7,19.1,3],["Feb 23",3.1,18.3,3],["Feb 24",2.8,6.6,11],["Feb 25",7.3,22.6,3],["Feb 26",0.1,6.1,2]]},{"n":"MIRZA, SHAZIA, MD","s":"MIRZA, SHAZIA","sp":"Primary Care","nt":18,"us":7.4,"np":0.8,"rd":26.0,"gt":0.8,"ad":24,"bD":1.71,"bE":22.44,"bA":17.9,"bP":112,"pD":1.1,"pE":12.7,"pP":241,"wd":[1.5,1.2,0.9,1.1,0.7],"we":[13.3,13.9,14.1,13.1,10.5],"wp":[47,42,33,58,61],"dd":[["Jan 27",2.4,12.5,11],["Jan 28",1.0,10.3,10],["Jan 29",1.0,16.5,8],["Jan 30",1.6,16.3,9],["Feb 02",1.1,11.5,9],["Feb 03",1.4,10.3,11],["Feb 04",0.9,14.5,9],["Feb 05",0.9,24.5,4],["Feb 06",2.5,27.2,5],["Feb 09",1.0,8.4,13],["Feb 10",1.0,15.8,14],["Feb 11",0.8,13.2,9],["Feb 12",0.8,12.1,9],["Feb 13",0.1,16.5,1],["Feb 17",1.0,15.5,11],["Feb 18",1.1,8.4,19],["Feb 19",1.2,13.9,9],["Feb 20",1.4,18.9,8],["Feb 23",1.1,13.8,11],["Feb 24",1.0,11.6,15],["Feb 25",1.1,17.2,9],["Feb 26",0.8,13.4,14],["Feb 27",0.8,12.1,7],["Mar 02",0.0,2.4,16]]},{"n":"Crane, Shelly R, ARNP","s":"Crane, Shelly","sp":"Primary Care","nt":17,"us":10.9,"np":0.8,"rd":43.0,"gt":0.93,"ad":21,"bD":6.3,"bE":19.42,"bA":12.0,"bP":160,"pD":4.9,"pE":18.5,"pP":152,"wd":[2.8,6.5,5.0,9.2,4.2],"we":[12.5,24.6,27.7,21.3,13.6],"wp":[47,31,22,18,34],"dd":[["Jan 27",1.7,8.0,17],["Jan 28",7.0,23.9,11],["Jan 29",1.5,25.8,4],["Feb 02",1.4,5.8,15],["Feb 03",4.1,10.2,11],["Feb 04",8.7,34.3,5],["Feb 05",7.6,21.8,8],["Feb 09",7.3,43.1,7],["Feb 10",1.3,18.1,12],["Feb 11",9.2,57.9,3],["Feb 12",21.5,59.0,2],["Feb 16",4.7,20.4,5],["Feb 17",3.7,11.4,13],["Feb 18",23.3,47.2,5],["Feb 24",0.8,8.3,12],["Feb 25",5.3,48.8,3],["Feb 26",1.5,11.2,3],["Feb 27",28.1,42.4,4],["Mar 02",0.1,1.1,12]]},{"n":"HARRIS, DAVID E, DO y","s":"HARRIS, DAVID","sp":"PM&R","nt":15,"us":93.8,"np":2.1,"rd":28.0,"gt":0.73,"ad":7,"bD":14.05,"bE":30.9,"bA":61.3,"bP":18,"pD":11.7,"pE":26.9,"pP":15,"wd":[12.2,15.5,8.2,11.7,null],"we":[34.4,31.6,19.8,23.1,null],"wp":[4,3,4,4,null],"dd":[["Jan 29",12.3,25.9,3],["Jan 30",10.3,57.7,1],["Feb 05",14.2,26.0,3],["Feb 11",3.8,6.1,1],["Feb 12",3.6,9.0,3],["Feb 20",9.7,15.1,4]]},{"n":"Schaller, Jenifer K, NP","s":"Schaller, Jenifer","sp":"Primary Care","nt":14,"us":48.3,"np":1.3,"rd":44.0,"gt":0.91,"ad":11,"bD":11.29,"bE":36.79,"bA":5.5,"bP":38,"pD":18.8,"pE":68.0,"pP":29,"wd":[16.2,14.0,null,34.7,21.1],"we":[49.3,48.7,null,144.7,81.9],"wp":[9,9,null,3,8],"dd":[["Jan 27",0.4,7.6,3],["Jan 28",12.8,44.4,2],["Jan 30",20.5,43.6,4],["Feb 03",8.3,22.2,3],["Feb 05",14.8,35.7,3],["Feb 06",11.5,55.7,3],["Feb 19",24.8,71.8,3],["Feb 24",0.7,39.6,1],["Feb 25",18.8,47.1,4],["Feb 27",28.0,140.5,2],["Mar 02",22.4,45.8,1]]},{"n":"BAKER, IRA JELLEN, MSN APRN FNPC","s":"BAKER, IRA","sp":"Primary Care","nt":12,"us":13.9,"np":1.2,"rd":24.0,"gt":0.72,"ad":10,"bD":10.67,"bE":32.2,"bA":6.2,"bP":135,"pD":9.6,"pE":25.9,"pP":84,"wd":[11.0,9.5,null,8.2,0.0],"we":[31.2,23.6,null,23.1,1.1],"wp":[41,34,null,4,5],"dd":[["Jan 27",10.4,36.8,8],["Jan 28",10.8,31.8,8],["Jan 29",12.6,34.0,7],["Jan 30",12.0,32.4,6],["Feb 02",10.1,24.8,12],["Feb 03",7.3,21.9,13],["Feb 04",11.9,26.0,12],["Feb 05",9.6,22.9,9],["Feb 23",8.2,23.1,4],["Mar 02",0.1,1.1,5]]},{"n":"Bolles, Autumn E, MSN ARNP","s":"Bolles, Autumn","sp":"Primary Care","nt":12,"us":14.5,"np":0.6,"rd":3.0,"gt":0.56,"ad":19,"bD":4.57,"bE":26.72,"bA":0.7,"bP":52,"pD":3.3,"pE":20.1,"pP":83,"wd":[4.0,4.0,2.8,2.9,2.8],"we":[24.1,22.7,16.6,21.9,16.6],"wp":[16,16,16,14,21],"dd":[["Jan 27",7.7,102.4,1],["Jan 28",2.5,35.7,2],["Jan 29",1.6,7.4,10],["Jan 30",11.8,45.8,3],["Feb 03",7.7,65.5,1],["Feb 04",5.8,26.1,4],["Feb 05",1.2,11.4,8],["Feb 06",7.6,33.8,3],["Feb 10",2.5,17.9,3],["Feb 11",2.0,8.2,9],["Feb 12",4.7,34.4,4],["Feb 17",5.7,70.9,1],["Feb 18",3.0,12.7,8],["Feb 19",3.2,17.8,3],["Feb 20",0.8,40.8,2],["Feb 24",2.7,29.2,2],["Feb 25",5.5,22.3,4],["Feb 26",6.3,30.5,4],["Feb 27",0.6,7.2,11]]},{"n":"EMERY, JEFFREY J, DO","s":"EMERY, JEFFREY","sp":"Primary Care","nt":9,"us":47.4,"np":1.0,"rd":25.0,"gt":0.68,"ad":9,"bD":3.14,"bE":41.7,"bA":null,"bP":9,"pD":5.9,"pE":36.6,"pP":18,"wd":[8.1,4.0,4.4,null,6.1],"we":[73.3,27.3,17.2,null,24.4],"wp":[2,6,5,null,5],"dd":[["Jan 27",1.8,16.9,2],["Feb 03",1.7,6.4,3],["Feb 04",3.0,17.6,2],["Feb 06",2.3,18.8,1],["Feb 10",1.0,10.6,2],["Feb 11",5.9,24.6,1],["Feb 13",5.6,12.6,2],["Feb 24",5.7,16.7,4],["Feb 27",0.1,4.5,1]]},{"n":"Champlin, Rosanne, CNP","s":"Champlin, Rosanne","sp":"Primary Care","nt":7,"us":10.3,"np":0.3,"rd":14.0,"gt":0.77,"ad":24,"bD":19.71,"bE":70.65,"bA":7.6,"bP":44,"pD":16.7,"pE":56.7,"pP":61,"wd":[20.7,16.5,14.5,17.4,15.6],"we":[65.3,55.6,51.0,69.5,50.5],"wp":[10,14,12,8,17],"dd":[["Jan 27",8.1,46.4,1],["Jan 28",22.8,64.0,2],["Jan 30",28.9,75.4,3],["Feb 02",10.6,37.9,4],["Feb 03",14.6,40.0,3],["Feb 04",16.9,83.8,1],["Feb 05",31.9,106.6,1],["Feb 06",16.3,48.9,6],["Feb 09",13.7,58.3,3],["Feb 10",15.8,80.7,1],["Feb 11",8.8,48.6,4],["Feb 12",8.8,16.4,4],["Feb 13",24.5,71.3,3],["Feb 17",1.3,19.5,3],["Feb 19",51.6,203.0,1],["Feb 20",15.3,51.5,2],["Feb 23",23.7,64.1,2],["Feb 24",15.4,68.1,2],["Feb 25",13.3,30.0,4],["Feb 26",14.8,85.2,2],["Feb 27",13.9,40.3,7],["Mar 02",27.3,75.2,2]]},{"n":"CONROY, RIZA T, MD","s":"CONROY, RIZA","sp":"Primary Care","nt":5,"us":100.0,"np":2.5,"rd":22.0,"gt":0.73,"ad":2,"bD":63.47,"bE":284.8,"bA":15.2,"bP":6,"pD":83.8,"pE":319.1,"pP":3,"wd":[null,null,7.1,117.1,null],"we":[null,null,36.1,267.2,null],"wp":[null,null,2,1,null],"dd":[["Feb 10",3.4,19.4,2],["Feb 23",55.8,88.8,1]]},{"n":"BLYKOWSKI-MAY, MONICA M, MD","s":"BLYKOWSKI-MAY, M.","sp":"Primary Care","nt":4,"us":80.0,"np":1.0,"rd":38.0,"gt":0.87,"ad":4,"bD":31.12,"bE":109.6,"bA":null,"bP":2,"pD":6.7,"pE":47.4,"pP":5,"wd":[6.5,17.3,0.0,null,2.6],"we":[43.4,45.9,29.2,null,38.7],"wp":[2,1,1,null,1],"dd":[["Jan 28",3.9,22.2,2],["Feb 04",10.4,26.3,1],["Feb 11",0.1,22.4,1],["Feb 25",2.6,38.7,1]]},{"n":"BUJOSA, PEDRO C, MD","s":"BUJOSA, PEDRO","sp":"Primary Care","nt":4,"us":1.8,"np":0.2,"rd":57.0,"gt":1.15,"ad":21,"bD":2.2,"bE":8.75,"bA":0.3,"bP":170,"pD":2.1,"pE":9.1,"pP":223,"wd":[2.8,2.0,2.3,2.2,1.5],"we":[11.6,8.1,9.8,8.9,7.6],"wp":[40,49,41,50,43],"dd":[["Jan 27",2.9,9.7,13],["Jan 28",1.9,8.9,10],["Jan 29",1.7,7.8,11],["Feb 02",3.8,18.6,6],["Feb 03",2.7,13.5,8],["Feb 04",1.4,6.0,16],["Feb 05",1.9,6.0,13],["Feb 09",2.4,9.4,12],["Feb 10",1.7,9.4,10],["Feb 11",2.2,8.6,15],["Feb 12",2.9,10.2,10],["Feb 13",2.5,13.0,6],["Feb 17",2.2,8.6,20],["Feb 18",2.0,9.3,10],["Feb 19",1.9,7.3,13],["Feb 23",3.2,12.3,7],["Feb 24",1.4,8.7,9],["Feb 25",1.9,8.5,15],["Feb 26",1.7,7.5,10],["Feb 27",4.8,41.7,1],["Mar 02",0.0,0.5,8]]},{"n":"ROBERTS, JOHN P, MD","s":"ROBERTS, JOHN","sp":"Primary Care","nt":4,"us":22.2,"np":0.3,"rd":39.0,"gt":0.83,"ad":14,"bD":3.5,"bE":27.23,"bA":0.4,"bP":37,"pD":6.1,"pE":49.9,"pP":18,"wd":[4.9,9.2,4.9,5.5,4.0],"we":[27.7,62.5,43.7,77.4,50.9],"wp":[4,5,5,2,2],"dd":[["Jan 28",3.3,26.7,2],["Jan 30",4.6,18.7,1],["Feb 02",8.1,35.3,1],["Feb 04",9.2,65.8,1],["Feb 05",20.6,97.0,1],["Feb 06",2.2,39.6,1],["Feb 09",5.4,39.8,2],["Feb 10",2.1,32.0,2],["Feb 11",7.0,53.6,1],["Feb 13",5.4,36.0,2],["Feb 18",5.3,25.2,1],["Feb 23",2.0,47.0,1],["Feb 24",0.2,33.7,1],["Mar 02",0.0,1.4,1]]},{"n":"LEE, NORMAN, MD","s":"LEE, NORMAN","sp":"Emergency Med","nt":2,"us":7.4,"np":0.2,"rd":23.0,"gt":0.67,"ad":12,"bD":1.23,"bE":5.74,"bA":1.5,"bP":42,"pD":1.1,"pE":16.4,"pP":26,"wd":[0.9,1.9,0.2,0.0,null],"we":[5.8,43.1,6.5,7.1,null],"wp":[12,6,7,1,null],"dd":[["Jan 27",1.2,4.8,4],["Jan 28",3.6,32.9,1],["Jan 29",0.4,2.8,6],["Jan 30",0.4,1.1,1],["Feb 03",0.5,1.3,3],["Feb 04",1.3,12.2,1],["Feb 06",4.0,66.5,2],["Feb 10",0.2,6.2,2],["Feb 11",0.2,1.3,3],["Feb 16",0.3,12.4,2],["Feb 19",0.0,3.3,1]]},{"n":"Brown, Tammy Lynn, APRN","s":"Brown, Tammy","sp":"Primary Care","nt":1,"us":4.0,"np":0.1,"rd":3.0,"gt":0.5,"ad":14,"bD":33.08,"bE":60.8,"bA":null,"bP":17,"pD":39.9,"pE":74.5,"pP":25,"wd":[26.0,43.6,12.9,253.8,37.5],"we":[94.3,69.5,41.7,377.8,59.0],"wp":[3,8,7,1,6],"dd":[["Jan 28",6.7,48.6,1],["Jan 29",18.6,61.3,1],["Feb 02",14.1,46.6,1],["Feb 04",72.4,145.9,1],["Feb 05",7.8,12.9,4],["Feb 06",40.8,56.2,3],["Feb 11",44.6,89.6,1],["Feb 12",6.4,22.7,5],["Feb 13",1.1,36.8,1],["Feb 20",13.5,51.2,1],["Feb 24",38.6,49.4,1],["Feb 25",2.0,42.2,1],["Feb 26",1.8,9.1,3],["Feb 27",178.7,225.8,1]]},{"n":"Sams, David C, MD","s":"Sams, David","sp":"Primary Care","nt":1,"us":16.7,"np":0.2,"rd":27.0,"gt":0.85,"ad":6,"bD":24.09,"bE":119.16,"bA":7.7,"bP":3,"pD":16.5,"pE":75.0,"pP":6,"wd":[0.3,29.1,14.9,14.7,25.1],"we":[38.8,110.3,91.1,55.2,99.4],"wp":[1,1,1,2,1],"dd":[["Jan 28",0.2,3.5,1],["Feb 04",28.4,94.4,1],["Feb 11",14.9,91.1,1],["Feb 18",19.8,79.6,1],["Feb 19",1.4,5.2,1],["Feb 25",25.1,99.4,1]]}];

const NV="#003366",GD="#C5A030",TL="#0891B2",GR="#10B981",RD="#EF4444",AM="#F59E0B",SL="#64748B",LN="#1A5276";
const tier=u=>u>=50?"high":u>=25?"mod":"low";
const tc=t=>t==="high"?GR:t==="mod"?AM:RD;
const pct=(b,p)=>b&&p?((p-b)/b*100).toFixed(1):null;

const Tip=({active,payload,label})=>{if(!active||!payload?.length)return null;const d=payload[0]?.payload;return(<div style={{background:"#fff",border:"1px solid #ddd",borderRadius:6,padding:"8px 12px",fontSize:11,boxShadow:"0 2px 8px rgba(0,0,0,.15)",maxWidth:260}}><div style={{fontWeight:700,color:NV,marginBottom:3}}>{label||d?.s||d?.name}</div>{payload.map((p,i)=><div key={i} style={{color:p.color||SL}}>{p.name}: <b>{typeof p.value==="number"?p.value.toFixed(1):p.value}</b></div>)}</div>)};

const TABS=[{id:"dive",l:"👤 Provider Deep Dive"},{id:"prepost",l:"📉 Pre/Post Change"},{id:"weekly",l:"📈 Weekly Trends"},{id:"heat",l:"🔥 Heat Map"},{id:"scatter",l:"🔬 Usage vs Impact"},{id:"overview",l:"📊 Overview"}];

export default function App(){
  // simple client-side password gate (code: VACAA)
  const [allowed, setAllowed] = useState(() => {
    try { return localStorage.getItem('allowed') === 'true'; } catch { return false; }
  });
  const [code, setCode] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (code === 'VACAA') {
      setAllowed(true);
      try { localStorage.setItem('allowed','true'); } catch {}
    } else {
      alert('Incorrect code');
    }
  };

  if (!allowed) {
    return (
      <div style={{fontFamily:'Segoe UI,system-ui,sans-serif',minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center',background:'#F8FAFC'}}>
        <form onSubmit={handleSubmit} style={{background:'#fff',padding:24,borderRadius:8,boxShadow:'0 2px 8px rgba(0,0,0,.1)'}}>
          <h2 style={{marginBottom:12,color:'#333'}}>Enter access code</h2>
          <input autoFocus value={code} onChange={e=>setCode(e.target.value)} style={{padding:8,fontSize:14,width:200,marginBottom:12}} />
          <div>
            <button type="submit" style={{padding:'8px 16px',fontSize:14}}>Go</button>
          </div>
        </form>
      </div>
    );
  }

  const [tab,setTab]=useState("dive");
  const [sel,setSel]=useState(P[0].n);
  const p=P.find(x=>x.n===sel)||P[0];
  const provs=P.filter(x=>x.nt>0);
  const matched=provs.filter(x=>x.bD!=null&&x.pD!=null).map(x=>({...x,chg:parseFloat(pct(x.bD,x.pD))})).sort((a,b)=>a.chg-b.chg);
  const improved=matched.filter(m=>m.chg<0);

  const wkAll=[{w:"Base",d:11.7,e:44.1,b:true},{w:"Wk1",d:5.5,e:21.5},{w:"Wk2",d:5.7,e:22.8},{w:"Wk3",d:5.4,e:22.6},{w:"Wk4",d:4.8,e:20.9},{w:"Wk5",d:4.6,e:19.2}];

  return(<div style={{fontFamily:"'Segoe UI',system-ui,sans-serif",background:"#F8FAFC",minHeight:"100vh"}}>
    <div style={{background:`linear-gradient(135deg,${NV},${LN})`,padding:"20px 24px 14px",color:"#fff"}}>
      <div style={{fontSize:9,letterSpacing:2,color:GD,textTransform:"uppercase"}}>VA Clinical AI Agent Pilot</div>
      <h1 style={{margin:"2px 0",fontSize:22,fontWeight:700}}>Complete Provider Analytics Dashboard</h1>
      <div style={{fontSize:11,color:"#8899BB"}}>37 Providers · 6 VAMCs · 2,028 AI Notes · 1,807 Daily Records · Jan 27 – Mar 4, 2026</div>
    </div>
    <div style={{display:"flex",gap:1,background:"#E2E8F0"}}>
      {[{v:"2,028",l:"Notes",c:NV},{v:"-61%",l:"Doc TPP ↓",c:GR},{v:"-56%",l:"EMR TPP ↓",c:TL},{v:"65%",l:"High Adopt",c:GD},{v:"45s",l:"Gen Time",c:LN}].map((k,i)=>
        <div key={i} style={{flex:1,background:k.c,padding:"8px 4px",textAlign:"center"}}><div style={{fontSize:18,fontWeight:800,color:"#fff"}}>{k.v}</div><div style={{fontSize:7,color:"rgba(255,255,255,.7)",textTransform:"uppercase",letterSpacing:.5}}>{k.l}</div></div>
      )}
    </div>
    <div style={{display:"flex",gap:0,padding:"0 16px",background:"#fff",borderBottom:"2px solid #E2E8F0",overflowX:"auto"}}>
      {TABS.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"10px 12px",fontSize:11,fontWeight:tab===t.id?700:500,color:tab===t.id?NV:SL,background:"none",border:"none",cursor:"pointer",borderBottom:tab===t.id?`3px solid ${GD}`:"3px solid transparent",whiteSpace:"nowrap"}}>{t.l}</button>)}
    </div>
    <div style={{padding:"16px 20px"}}>

    {tab==="dive"&&(<div>
      <select value={sel} onChange={e=>setSel(e.target.value)} style={{padding:"10px 14px",border:"1px solid #ddd",borderRadius:6,fontSize:13,background:"#fff",width:"100%",marginBottom:12}}>
        {provs.map(x=><option key={x.n} value={x.n}>{x.s} — {x.sp} — {x.nt} notes ({x.us}% usage)</option>)}
      </select>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:12}}>
        {[{l:"CAA Notes",v:p.nt,c:NV},{l:"Usage Rate",v:p.us+"%",c:GD},{l:"Notes/Day",v:p.np,c:TL},{l:"Active Days",v:p.ad,c:LN},{l:"Rec Duration",v:p.rd+"m",c:SL},{l:"Gen Time",v:p.gt+"m",c:SL}].map((k,i)=>
          <div key={i} style={{background:"#fff",borderRadius:6,padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,.05)",borderLeft:`3px solid ${k.c}`}}>
            <div style={{fontSize:9,color:SL,textTransform:"uppercase"}}>{k.l}</div><div style={{fontSize:20,fontWeight:800,color:k.c}}>{k.v}</div>
          </div>
        )}
      </div>
      {p.bD!=null&&(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
        <div style={{background:"#fff",borderRadius:6,padding:10,boxShadow:"0 1px 3px rgba(0,0,0,.05)",borderLeft:`3px solid ${p.pD<p.bD?GR:RD}`}}>
          <div style={{fontSize:9,color:SL}}>DOC TIME/PATIENT</div>
          <div style={{fontSize:18,fontWeight:800,color:p.pD<p.bD?GR:RD}}>{pct(p.bD,p.pD)}%</div>
          <div style={{fontSize:10,color:SL}}>{p.bD} → {p.pD} min</div>
        </div>
        <div style={{background:"#fff",borderRadius:6,padding:10,boxShadow:"0 1px 3px rgba(0,0,0,.05)",borderLeft:`3px solid ${p.pE<p.bE?GR:RD}`}}>
          <div style={{fontSize:9,color:SL}}>EMR TIME/PATIENT</div>
          <div style={{fontSize:18,fontWeight:800,color:p.pE<p.bE?GR:RD}}>{pct(p.bE,p.pE)}%</div>
          <div style={{fontSize:10,color:SL}}>{p.bE} → {p.pE} min</div>
        </div>
      </div>)}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:12,fontWeight:700,color:NV,marginBottom:8}}>Weekly Doc Time Per Patient</div>
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={p.wd.map((d,i)=>({w:`Wk${i+1}`,d,p:p.wp[i]})).filter(x=>x.d!=null)} margin={{left:0,right:5,top:5,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>
              <XAxis dataKey="w" tick={{fontSize:10,fill:SL}}/>
              <YAxis tick={{fontSize:10,fill:SL}} domain={[0,'auto']}/>
              <Tooltip content={<Tip/>}/>
              <Bar dataKey="d" name="Doc TPP" radius={[3,3,0,0]} barSize={28}>{p.wd.filter(d=>d!=null).map((d,i)=><Cell key={i} fill={d<(p.bD||999)?GR:AM}/>)}</Bar>
              {p.bD&&<ReferenceLine y={p.bD} stroke={RD} strokeDasharray="5 3" label={{value:`Base: ${p.bD}`,position:"right",style:{fontSize:8,fill:RD}}}/>}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:12,fontWeight:700,color:NV,marginBottom:8}}>Daily Time Series</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={p.dd.map(d=>({dt:d[0],doc:d[1],emr:d[2],pts:d[3]}))} margin={{left:0,right:5,top:5,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="dt" tick={{fontSize:8,fill:SL}} angle={-35} textAnchor="end" height={40}/>
              <YAxis tick={{fontSize:10,fill:SL}}/>
              <Tooltip content={<Tip/>}/>
              <Line dataKey="doc" name="Doc TPP" stroke={TL} strokeWidth={2} dot={{r:2.5,fill:TL}} connectNulls/>
              {p.bD&&<ReferenceLine y={p.bD} stroke={RD} strokeDasharray="5 3"/>}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{background:"#fff",borderRadius:8,padding:12,marginTop:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)",overflowX:"auto"}}>
        <div style={{fontSize:12,fontWeight:700,color:NV,marginBottom:8}}>Daily Detail Table</div>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
          <thead><tr style={{borderBottom:`2px solid ${NV}`}}>{["Date","Pts","DocTPP","EMRTPP"].map(h=><th key={h} style={{padding:"4px 6px",textAlign:"left",color:NV,fontSize:9,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
          <tbody>{p.dd.map((d,i)=><tr key={i} style={{borderBottom:"1px solid #f5f5f5",background:i%2===0?"#FAFBFC":"#fff"}}>
            <td style={{padding:"3px 6px",fontWeight:600}}>{d[0]}</td><td style={{padding:"3px 6px"}}>{d[3]}</td>
            <td style={{padding:"3px 6px",color:d[1]<(p.bD||999)?GR:RD,fontWeight:600}}>{d[1].toFixed(1)}</td>
            <td style={{padding:"3px 6px"}}>{d[2].toFixed(1)}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </div>)}

    {tab==="prepost"&&(<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:12}}>
        <div style={{background:"#fff",borderRadius:6,padding:10,borderLeft:`3px solid ${GR}`}}><div style={{fontSize:9,color:SL}}>IMPROVED</div><div style={{fontSize:22,fontWeight:800,color:GR}}>{improved.length}/{matched.length}</div></div>
        <div style={{background:"#fff",borderRadius:6,padding:10,borderLeft:`3px solid ${TL}`}}><div style={{fontSize:9,color:SL}}>AVG IMPROVEMENT</div><div style={{fontSize:22,fontWeight:800,color:TL}}>{(improved.reduce((s,m)=>s+m.chg,0)/improved.length).toFixed(0)}%</div></div>
        <div style={{background:"#fff",borderRadius:6,padding:10,borderLeft:`3px solid ${RD}`}}><div style={{fontSize:9,color:SL}}>WORSENED</div><div style={{fontSize:22,fontWeight:800,color:RD}}>{matched.length-improved.length}</div></div>
      </div>
      <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
        <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:4}}>Documentation Time % Change from Baseline</div>
        <div style={{fontSize:10,color:SL,marginBottom:8}}>Green = improved. Red = worsened. Gold line = pilot average.</div>
        <ResponsiveContainer width="100%" height={Math.max(matched.length*18,300)}>
          <BarChart data={matched} layout="vertical" margin={{left:120,right:30,top:5,bottom:5}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false}/>
            <XAxis type="number" tick={{fontSize:10,fill:SL}} unit="%"/>
            <YAxis type="category" dataKey="s" tick={{fontSize:9,fill:"#333"}} width={115}/>
            <Tooltip content={<Tip/>}/>
            <ReferenceLine x={0} stroke={NV} strokeWidth={1.5}/>
            <Bar dataKey="chg" name="% Change" radius={[0,3,3,0]} barSize={12}>{matched.map((m,i)=><Cell key={i} fill={m.chg<0?GR:m.chg<10?AM:RD}/>)}</Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>)}

    {tab==="weekly"&&(<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:8}}>Doc Time Per Patient: Weekly Trajectory</div>
          <ResponsiveContainer width="100%" height={260}>
            <ComposedChart data={wkAll} margin={{left:0,right:10,top:5,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>
              <XAxis dataKey="w" tick={{fontSize:10,fill:SL}}/>
              <YAxis tick={{fontSize:10,fill:SL}} domain={[0,14]}/>
              <Tooltip content={<Tip/>}/>
              <Bar dataKey="d" name="DocTPP" radius={[3,3,0,0]} barSize={36}>{wkAll.map((w,i)=><Cell key={i} fill={w.b?"#94A3B8":i===wkAll.length-1?GR:TL}/>)}</Bar>
              <ReferenceLine y={11.7} stroke={RD} strokeDasharray="5 3"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:8}}>EMR Time Per Patient: Weekly Trajectory</div>
          <ResponsiveContainer width="100%" height={260}>
            <ComposedChart data={wkAll} margin={{left:0,right:10,top:5,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>
              <XAxis dataKey="w" tick={{fontSize:10,fill:SL}}/>
              <YAxis tick={{fontSize:10,fill:SL}} domain={[0,50]}/>
              <Tooltip content={<Tip/>}/>
              <Bar dataKey="e" name="EMRTPP" radius={[3,3,0,0]} barSize={36}>{wkAll.map((w,i)=><Cell key={i} fill={w.b?"#94A3B8":i===wkAll.length-1?NV:LN}/>)}</Bar>
              <ReferenceLine y={44.1} stroke={RD} strokeDasharray="5 3"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
        <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:4}}>Individual Provider Weekly Trends</div>
        <select value={sel} onChange={e=>setSel(e.target.value)} style={{padding:"8px 10px",border:"1px solid #ddd",borderRadius:4,fontSize:11,marginBottom:8,width:"100%"}}>
          {provs.filter(x=>x.wd.some(w=>w!=null)).map(x=><option key={x.n} value={x.n}>{x.s} ({x.nt} notes)</option>)}
        </select>
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={p.wd.map((d,i)=>({w:`Wk${i+1}`,d,e:p.we[i],pts:p.wp[i]})).filter(x=>x.d!=null)} margin={{left:0,right:10,top:5,bottom:0}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>
            <XAxis dataKey="w" tick={{fontSize:10,fill:SL}}/>
            <YAxis tick={{fontSize:10,fill:SL}}/>
            <Tooltip content={<Tip/>}/>
            <Legend verticalAlign="top" height={24} iconType="square" formatter={v=><span style={{fontSize:10}}>{v}</span>}/>
            <Bar dataKey="d" name="Doc TPP" fill={TL} radius={[3,3,0,0]} barSize={24}/>
            <Line dataKey="e" name="EMR TPP" stroke={NV} strokeWidth={2} dot={{r:3}}/>
            {p.bD&&<ReferenceLine y={p.bD} stroke={RD} strokeDasharray="5 3" label={{value:"Baseline",style:{fontSize:8,fill:RD}}}/>}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>)}

    {tab==="heat"&&(<div>
      <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)",overflowX:"auto"}}>
        <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:8}}>Weekly Doc Time Heat Map (all providers with baseline)</div>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
          <thead><tr style={{borderBottom:`2px solid ${NV}`}}>
            {["Provider","Base","Wk1","Wk2","Wk3","Wk4","Wk5","Δ"].map(h=><th key={h} style={{padding:"4px 6px",textAlign:h==="Provider"?"left":"center",color:NV,fontSize:9,textTransform:"uppercase",whiteSpace:"nowrap"}}>{h}</th>)}
          </tr></thead>
          <tbody>{provs.filter(x=>x.bD!=null&&x.wd.some(w=>w!=null)).sort((a,b)=>b.us-a.us).map((x,i)=>{
            const last=x.wd.filter(w=>w!=null).pop();
            const chg=last!=null&&x.bD?((last-x.bD)/x.bD*100).toFixed(0):"?";
            return<tr key={i} style={{borderBottom:"1px solid #f5f5f5"}}>
              <td style={{padding:"4px 6px",fontWeight:600,whiteSpace:"nowrap",fontSize:10}}><span style={{display:"inline-block",width:7,height:7,borderRadius:4,background:tc(tier(x.us)),marginRight:4}}></span>{x.s}</td>
              <td style={{padding:"4px 6px",textAlign:"center",background:"#FEE2E2",fontWeight:600}}>{x.bD.toFixed(1)}</td>
              {x.wd.map((w,j)=>{
                if(w==null)return<td key={j} style={{textAlign:"center",color:"#ccc",padding:"4px 6px"}}>—</td>;
                const good=w<x.bD;
                const intensity=good?Math.min((x.bD-w)/x.bD,1):Math.min((w-x.bD)/x.bD,.5);
                const bg=good?`rgba(16,185,129,${.1+intensity*.4})`:`rgba(239,68,68,${.08+intensity*.3})`;
                return<td key={j} style={{padding:"4px 6px",textAlign:"center",background:bg,fontWeight:600,color:good?"#065F46":"#991B1B"}}>{w.toFixed(1)}</td>;
              })}
              <td style={{padding:"4px 6px",textAlign:"center",fontWeight:700,color:parseFloat(chg)<0?GR:RD}}>{chg}%</td>
            </tr>;
          })}</tbody>
        </table>
      </div>
    </div>)}

    {tab==="scatter"&&(<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:4}}>Usage Rate vs Doc Time Change</div>
          <div style={{fontSize:10,color:SL,marginBottom:8}}>Below zero = improved. Bubble size = notes.</div>
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{left:10,right:10,top:5,bottom:20}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis type="number" dataKey="x" name="Usage%" tick={{fontSize:9,fill:SL}} domain={[0,105]} label={{value:"Usage Rate %",position:"insideBottom",offset:-10,style:{fontSize:10,fill:SL}}}/>
              <YAxis type="number" dataKey="y" name="Change%" tick={{fontSize:9,fill:SL}} label={{value:"Doc Time Δ%",angle:-90,position:"insideLeft",style:{fontSize:10,fill:SL}}}/>
              <ZAxis type="number" dataKey="z" range={[30,300]}/>
              <Tooltip content={({active,payload})=>{if(!active||!payload?.length)return null;const d=payload[0]?.payload;return<div style={{background:"#fff",border:"1px solid #ddd",borderRadius:6,padding:8,fontSize:11,boxShadow:"0 2px 6px rgba(0,0,0,.12)"}}><b>{d.s}</b><br/>Usage: {d.x}%<br/>Change: {d.y}%<br/>Notes: {d.z}</div>}}/>
              <ReferenceLine y={0} stroke={NV} strokeWidth={1}/>
              <Scatter data={matched.map(m=>({x:m.us,y:m.chg,z:m.nt,s:m.s}))} fillOpacity={.6} stroke="#fff" strokeWidth={1}>
                {matched.map((m,i)=><Cell key={i} fill={m.chg<0?GR:RD}/>)}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:4}}>Before & After Paired Bars</div>
          <div style={{fontSize:10,color:SL,marginBottom:8}}>Providers with ≥10 notes, base &lt;30 min.</div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={matched.filter(m=>m.nt>=10&&m.bD<30).sort((a,b)=>(a.pD-a.bD)-(b.pD-b.bD))} layout="vertical" margin={{left:110,right:10,top:5,bottom:5}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false}/>
              <XAxis type="number" tick={{fontSize:9,fill:SL}} unit=" min"/>
              <YAxis type="category" dataKey="s" tick={{fontSize:9,fill:"#333"}} width={105}/>
              <Tooltip content={<Tip/>}/>
              <Legend verticalAlign="top" height={24} iconType="square" formatter={v=><span style={{fontSize:10}}>{v}</span>}/>
              <Bar dataKey="bD" name="Baseline" fill="#94A3B8" radius={[0,2,2,0]} barSize={8}/>
              <Bar dataKey="pD" name="Post-CAA" fill={TL} radius={[0,2,2,0]} barSize={8}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>)}

    {tab==="overview"&&(<div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:8}}>Notes Generated by Provider</div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={provs.slice(0,20)} layout="vertical" margin={{left:110,right:20,top:5,bottom:5}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false}/>
              <XAxis type="number" tick={{fontSize:10,fill:SL}}/>
              <YAxis type="category" dataKey="s" tick={{fontSize:9,fill:"#333"}} width={105}/>
              <Tooltip content={<Tip/>}/>
              <Bar dataKey="nt" name="Notes" radius={[0,3,3,0]} barSize={14}>{provs.slice(0,20).map((x,i)=><Cell key={i} fill={tc(tier(x.us))}/>)}</Bar>
            </BarChart>
          </ResponsiveContainer>
          <div style={{display:"flex",gap:12,justifyContent:"center",fontSize:10,marginTop:8}}>
            {[["High ≥50%",GR],["Mod 25-49%",AM],["Low <25%",RD]].map(([l,c])=><div key={l} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:10,height:10,borderRadius:2,background:c}}/><span style={{color:SL}}>{l}</span></div>)}
          </div>
        </div>
        <div style={{background:"#fff",borderRadius:8,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,.05)"}}>
          <div style={{fontSize:13,fontWeight:700,color:NV,marginBottom:8}}>All Providers Summary</div>
          <div style={{overflowY:"auto",maxHeight:440}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
              <thead><tr style={{borderBottom:`2px solid ${NV}`,position:"sticky",top:0,background:"#fff"}}>
                {["Provider","Spec","Notes","Usage","NPD","DocΔ%"].map(h=><th key={h} style={{padding:"4px 5px",textAlign:h==="Provider"||h==="Spec"?"left":"center",color:NV,fontSize:8,textTransform:"uppercase"}}>{h}</th>)}
              </tr></thead>
              <tbody>{provs.map((x,i)=>{const chg=pct(x.bD,x.pD);return<tr key={i} style={{borderBottom:"1px solid #f5f5f5",cursor:"pointer",background:x.n===sel?"#EFF6FF":"transparent"}} onClick={()=>{setSel(x.n);setTab("dive")}}>
                <td style={{padding:"3px 5px",fontWeight:600,whiteSpace:"nowrap"}}><span style={{display:"inline-block",width:6,height:6,borderRadius:3,background:tc(tier(x.us)),marginRight:3}}></span>{x.s}</td>
                <td style={{padding:"3px 5px",color:SL,fontSize:9}}>{x.sp}</td>
                <td style={{padding:"3px 5px",textAlign:"center"}}>{x.nt}</td>
                <td style={{padding:"3px 5px",textAlign:"center"}}>{x.us}%</td>
                <td style={{padding:"3px 5px",textAlign:"center"}}>{x.np}</td>
                <td style={{padding:"3px 5px",textAlign:"center",fontWeight:700,color:chg&&parseFloat(chg)<0?GR:chg?RD:SL}}>{chg?chg+"%":"—"}</td>
              </tr>})}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>)}

    </div>
    <div style={{padding:"10px 20px",borderTop:"1px solid #E2E8F0",fontSize:8,color:"#94A3B8",textAlign:"center"}}>
      VA CAA Pilot · OCMIO · Sources: Oracle Health Advance, LightsOn Network · Baseline: Dec 2025 · Post-CAA: Jan 27 – Mar 4, 2026
    </div>
  </div>);
}
