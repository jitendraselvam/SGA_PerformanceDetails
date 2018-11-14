/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 21008.0, "minX": 0.0, "maxY": 131369.0, "series": [{"data": [[0.0, 21008.0], [0.1, 21009.0], [0.2, 21009.0], [0.3, 21009.0], [0.4, 21009.0], [0.5, 21010.0], [0.6, 21010.0], [0.7, 21010.0], [0.8, 21010.0], [0.9, 21010.0], [1.0, 21010.0], [1.1, 21010.0], [1.2, 21010.0], [1.3, 21011.0], [1.4, 21011.0], [1.5, 21011.0], [1.6, 21011.0], [1.7, 21011.0], [1.8, 21012.0], [1.9, 21012.0], [2.0, 21013.0], [2.1, 21013.0], [2.2, 21013.0], [2.3, 21013.0], [2.4, 21014.0], [2.5, 21014.0], [2.6, 21014.0], [2.7, 21015.0], [2.8, 21015.0], [2.9, 21016.0], [3.0, 21016.0], [3.1, 21017.0], [3.2, 21017.0], [3.3, 21017.0], [3.4, 21017.0], [3.5, 21017.0], [3.6, 21017.0], [3.7, 21018.0], [3.8, 21018.0], [3.9, 21018.0], [4.0, 21019.0], [4.1, 21019.0], [4.2, 21021.0], [4.3, 21021.0], [4.4, 21021.0], [4.5, 21022.0], [4.6, 21022.0], [4.7, 21023.0], [4.8, 21025.0], [4.9, 21031.0], [5.0, 30089.0], [5.1, 30089.0], [5.2, 30089.0], [5.3, 30089.0], [5.4, 30089.0], [5.5, 30089.0], [5.6, 30090.0], [5.7, 30090.0], [5.8, 30090.0], [5.9, 30090.0], [6.0, 30090.0], [6.1, 30090.0], [6.2, 30090.0], [6.3, 30090.0], [6.4, 30090.0], [6.5, 30090.0], [6.6, 30091.0], [6.7, 30091.0], [6.8, 30091.0], [6.9, 30091.0], [7.0, 30091.0], [7.1, 30091.0], [7.2, 30091.0], [7.3, 30091.0], [7.4, 30091.0], [7.5, 30091.0], [7.6, 30091.0], [7.7, 30091.0], [7.8, 30091.0], [7.9, 30091.0], [8.0, 30091.0], [8.1, 30091.0], [8.2, 30091.0], [8.3, 30091.0], [8.4, 30091.0], [8.5, 30091.0], [8.6, 30091.0], [8.7, 30091.0], [8.8, 30091.0], [8.9, 30091.0], [9.0, 30091.0], [9.1, 30091.0], [9.2, 30091.0], [9.3, 30091.0], [9.4, 30092.0], [9.5, 30092.0], [9.6, 30092.0], [9.7, 30092.0], [9.8, 30092.0], [9.9, 30092.0], [10.0, 30092.0], [10.1, 30092.0], [10.2, 30092.0], [10.3, 30092.0], [10.4, 30092.0], [10.5, 30092.0], [10.6, 30092.0], [10.7, 30092.0], [10.8, 30092.0], [10.9, 30092.0], [11.0, 30092.0], [11.1, 30092.0], [11.2, 30092.0], [11.3, 30092.0], [11.4, 30092.0], [11.5, 30092.0], [11.6, 30092.0], [11.7, 30092.0], [11.8, 30092.0], [11.9, 30092.0], [12.0, 30092.0], [12.1, 30092.0], [12.2, 30092.0], [12.3, 30092.0], [12.4, 30092.0], [12.5, 30092.0], [12.6, 30092.0], [12.7, 30092.0], [12.8, 30092.0], [12.9, 30092.0], [13.0, 30092.0], [13.1, 30092.0], [13.2, 30092.0], [13.3, 30092.0], [13.4, 30092.0], [13.5, 30092.0], [13.6, 30092.0], [13.7, 30092.0], [13.8, 30092.0], [13.9, 30092.0], [14.0, 30092.0], [14.1, 30093.0], [14.2, 30093.0], [14.3, 30093.0], [14.4, 30093.0], [14.5, 30093.0], [14.6, 30093.0], [14.7, 30093.0], [14.8, 30093.0], [14.9, 30093.0], [15.0, 30093.0], [15.1, 30093.0], [15.2, 30093.0], [15.3, 30093.0], [15.4, 30093.0], [15.5, 30093.0], [15.6, 30093.0], [15.7, 30093.0], [15.8, 30093.0], [15.9, 30093.0], [16.0, 30093.0], [16.1, 30093.0], [16.2, 30093.0], [16.3, 30093.0], [16.4, 30093.0], [16.5, 30093.0], [16.6, 30093.0], [16.7, 30093.0], [16.8, 30093.0], [16.9, 30093.0], [17.0, 30093.0], [17.1, 30093.0], [17.2, 30093.0], [17.3, 30093.0], [17.4, 30093.0], [17.5, 30093.0], [17.6, 30093.0], [17.7, 30093.0], [17.8, 30093.0], [17.9, 30093.0], [18.0, 30093.0], [18.1, 30093.0], [18.2, 30093.0], [18.3, 30093.0], [18.4, 30093.0], [18.5, 30093.0], [18.6, 30093.0], [18.7, 30093.0], [18.8, 30093.0], [18.9, 30093.0], [19.0, 30093.0], [19.1, 30093.0], [19.2, 30093.0], [19.3, 30093.0], [19.4, 30093.0], [19.5, 30093.0], [19.6, 30093.0], [19.7, 30093.0], [19.8, 30093.0], [19.9, 30093.0], [20.0, 30093.0], [20.1, 30093.0], [20.2, 30093.0], [20.3, 30093.0], [20.4, 30093.0], [20.5, 30093.0], [20.6, 30093.0], [20.7, 30093.0], [20.8, 30093.0], [20.9, 30093.0], [21.0, 30093.0], [21.1, 30093.0], [21.2, 30093.0], [21.3, 30093.0], [21.4, 30094.0], [21.5, 30094.0], [21.6, 30094.0], [21.7, 30094.0], [21.8, 30094.0], [21.9, 30094.0], [22.0, 30094.0], [22.1, 30094.0], [22.2, 30094.0], [22.3, 30094.0], [22.4, 30094.0], [22.5, 30094.0], [22.6, 30094.0], [22.7, 30094.0], [22.8, 30094.0], [22.9, 30094.0], [23.0, 30094.0], [23.1, 30094.0], [23.2, 30094.0], [23.3, 30094.0], [23.4, 30094.0], [23.5, 30094.0], [23.6, 30094.0], [23.7, 30094.0], [23.8, 30094.0], [23.9, 30094.0], [24.0, 30094.0], [24.1, 30094.0], [24.2, 30094.0], [24.3, 30094.0], [24.4, 30094.0], [24.5, 30094.0], [24.6, 30094.0], [24.7, 30094.0], [24.8, 30094.0], [24.9, 30094.0], [25.0, 30094.0], [25.1, 30094.0], [25.2, 30094.0], [25.3, 30094.0], [25.4, 30094.0], [25.5, 30094.0], [25.6, 30094.0], [25.7, 30094.0], [25.8, 30094.0], [25.9, 30094.0], [26.0, 30094.0], [26.1, 30094.0], [26.2, 30094.0], [26.3, 30094.0], [26.4, 30094.0], [26.5, 30094.0], [26.6, 30094.0], [26.7, 30094.0], [26.8, 30094.0], [26.9, 30094.0], [27.0, 30094.0], [27.1, 30094.0], [27.2, 30094.0], [27.3, 30094.0], [27.4, 30094.0], [27.5, 30094.0], [27.6, 30094.0], [27.7, 30094.0], [27.8, 30094.0], [27.9, 30094.0], [28.0, 30094.0], [28.1, 30094.0], [28.2, 30094.0], [28.3, 30094.0], [28.4, 30094.0], [28.5, 30094.0], [28.6, 30094.0], [28.7, 30094.0], [28.8, 30094.0], [28.9, 30094.0], [29.0, 30094.0], [29.1, 30094.0], [29.2, 30094.0], [29.3, 30094.0], [29.4, 30094.0], [29.5, 30094.0], [29.6, 30095.0], [29.7, 30095.0], [29.8, 30095.0], [29.9, 30095.0], [30.0, 30095.0], [30.1, 30095.0], [30.2, 30095.0], [30.3, 30095.0], [30.4, 30095.0], [30.5, 30095.0], [30.6, 30095.0], [30.7, 30095.0], [30.8, 30095.0], [30.9, 30095.0], [31.0, 30095.0], [31.1, 30095.0], [31.2, 30095.0], [31.3, 30095.0], [31.4, 30095.0], [31.5, 30095.0], [31.6, 30095.0], [31.7, 30095.0], [31.8, 30095.0], [31.9, 30095.0], [32.0, 30095.0], [32.1, 30095.0], [32.2, 30095.0], [32.3, 30095.0], [32.4, 30095.0], [32.5, 30095.0], [32.6, 30095.0], [32.7, 30095.0], [32.8, 30095.0], [32.9, 30095.0], [33.0, 30095.0], [33.1, 30095.0], [33.2, 30095.0], [33.3, 30095.0], [33.4, 30095.0], [33.5, 30095.0], [33.6, 30095.0], [33.7, 30095.0], [33.8, 30095.0], [33.9, 30095.0], [34.0, 30095.0], [34.1, 30095.0], [34.2, 30095.0], [34.3, 30095.0], [34.4, 30095.0], [34.5, 30095.0], [34.6, 30095.0], [34.7, 30095.0], [34.8, 30095.0], [34.9, 30095.0], [35.0, 30095.0], [35.1, 30095.0], [35.2, 30095.0], [35.3, 30095.0], [35.4, 30095.0], [35.5, 30095.0], [35.6, 30095.0], [35.7, 30095.0], [35.8, 30095.0], [35.9, 30095.0], [36.0, 30095.0], [36.1, 30095.0], [36.2, 30095.0], [36.3, 30095.0], [36.4, 30095.0], [36.5, 30095.0], [36.6, 30095.0], [36.7, 30095.0], [36.8, 30095.0], [36.9, 30095.0], [37.0, 30095.0], [37.1, 30095.0], [37.2, 30095.0], [37.3, 30095.0], [37.4, 30095.0], [37.5, 30095.0], [37.6, 30095.0], [37.7, 30095.0], [37.8, 30095.0], [37.9, 30095.0], [38.0, 30095.0], [38.1, 30095.0], [38.2, 30095.0], [38.3, 30095.0], [38.4, 30095.0], [38.5, 30095.0], [38.6, 30096.0], [38.7, 30096.0], [38.8, 30096.0], [38.9, 30096.0], [39.0, 30096.0], [39.1, 30096.0], [39.2, 30096.0], [39.3, 30096.0], [39.4, 30096.0], [39.5, 30096.0], [39.6, 30096.0], [39.7, 30096.0], [39.8, 30096.0], [39.9, 30096.0], [40.0, 30096.0], [40.1, 30096.0], [40.2, 30096.0], [40.3, 30096.0], [40.4, 30096.0], [40.5, 30096.0], [40.6, 30096.0], [40.7, 30096.0], [40.8, 30096.0], [40.9, 30096.0], [41.0, 30096.0], [41.1, 30096.0], [41.2, 30096.0], [41.3, 30096.0], [41.4, 30096.0], [41.5, 30096.0], [41.6, 30096.0], [41.7, 30096.0], [41.8, 30096.0], [41.9, 30096.0], [42.0, 30096.0], [42.1, 30096.0], [42.2, 30096.0], [42.3, 30096.0], [42.4, 30096.0], [42.5, 30096.0], [42.6, 30096.0], [42.7, 30096.0], [42.8, 30096.0], [42.9, 30096.0], [43.0, 30096.0], [43.1, 30096.0], [43.2, 30096.0], [43.3, 30096.0], [43.4, 30096.0], [43.5, 30096.0], [43.6, 30096.0], [43.7, 30096.0], [43.8, 30096.0], [43.9, 30096.0], [44.0, 30096.0], [44.1, 30096.0], [44.2, 30096.0], [44.3, 30096.0], [44.4, 30096.0], [44.5, 30096.0], [44.6, 30096.0], [44.7, 30096.0], [44.8, 30097.0], [44.9, 30097.0], [45.0, 30097.0], [45.1, 30097.0], [45.2, 30097.0], [45.3, 30097.0], [45.4, 30097.0], [45.5, 30097.0], [45.6, 30097.0], [45.7, 30097.0], [45.8, 30097.0], [45.9, 30097.0], [46.0, 30097.0], [46.1, 30097.0], [46.2, 30097.0], [46.3, 30097.0], [46.4, 30097.0], [46.5, 30097.0], [46.6, 30097.0], [46.7, 30097.0], [46.8, 30097.0], [46.9, 30097.0], [47.0, 30097.0], [47.1, 30097.0], [47.2, 30097.0], [47.3, 30097.0], [47.4, 30097.0], [47.5, 30097.0], [47.6, 30097.0], [47.7, 30097.0], [47.8, 30097.0], [47.9, 30097.0], [48.0, 30097.0], [48.1, 30097.0], [48.2, 30097.0], [48.3, 30097.0], [48.4, 30097.0], [48.5, 30097.0], [48.6, 30097.0], [48.7, 30097.0], [48.8, 30097.0], [48.9, 30097.0], [49.0, 30097.0], [49.1, 30097.0], [49.2, 30097.0], [49.3, 30097.0], [49.4, 30097.0], [49.5, 30097.0], [49.6, 30097.0], [49.7, 30097.0], [49.8, 30097.0], [49.9, 30097.0], [50.0, 30098.0], [50.1, 30098.0], [50.2, 30098.0], [50.3, 30098.0], [50.4, 30098.0], [50.5, 30098.0], [50.6, 30098.0], [50.7, 30098.0], [50.8, 30098.0], [50.9, 30098.0], [51.0, 30098.0], [51.1, 30098.0], [51.2, 30098.0], [51.3, 30098.0], [51.4, 30098.0], [51.5, 30098.0], [51.6, 30098.0], [51.7, 30098.0], [51.8, 30098.0], [51.9, 30098.0], [52.0, 30098.0], [52.1, 30098.0], [52.2, 30098.0], [52.3, 30098.0], [52.4, 30098.0], [52.5, 30098.0], [52.6, 30098.0], [52.7, 30098.0], [52.8, 30098.0], [52.9, 30098.0], [53.0, 30098.0], [53.1, 30098.0], [53.2, 30098.0], [53.3, 30098.0], [53.4, 30098.0], [53.5, 30098.0], [53.6, 30098.0], [53.7, 30098.0], [53.8, 30098.0], [53.9, 30098.0], [54.0, 30098.0], [54.1, 30098.0], [54.2, 30098.0], [54.3, 30098.0], [54.4, 30098.0], [54.5, 30098.0], [54.6, 30098.0], [54.7, 30098.0], [54.8, 30098.0], [54.9, 30098.0], [55.0, 30098.0], [55.1, 30098.0], [55.2, 30098.0], [55.3, 30098.0], [55.4, 30098.0], [55.5, 30098.0], [55.6, 30099.0], [55.7, 30099.0], [55.8, 30099.0], [55.9, 30099.0], [56.0, 30099.0], [56.1, 30099.0], [56.2, 30099.0], [56.3, 30099.0], [56.4, 30099.0], [56.5, 30099.0], [56.6, 30099.0], [56.7, 30099.0], [56.8, 30099.0], [56.9, 30099.0], [57.0, 30099.0], [57.1, 30099.0], [57.2, 30099.0], [57.3, 30099.0], [57.4, 30099.0], [57.5, 30099.0], [57.6, 30099.0], [57.7, 30099.0], [57.8, 30099.0], [57.9, 30099.0], [58.0, 30099.0], [58.1, 30099.0], [58.2, 30099.0], [58.3, 30099.0], [58.4, 30099.0], [58.5, 30099.0], [58.6, 30099.0], [58.7, 30099.0], [58.8, 30099.0], [58.9, 30099.0], [59.0, 30099.0], [59.1, 30099.0], [59.2, 30099.0], [59.3, 30099.0], [59.4, 30099.0], [59.5, 30099.0], [59.6, 30099.0], [59.7, 30099.0], [59.8, 30099.0], [59.9, 30099.0], [60.0, 30099.0], [60.1, 30099.0], [60.2, 30099.0], [60.3, 30099.0], [60.4, 30099.0], [60.5, 30099.0], [60.6, 30100.0], [60.7, 30100.0], [60.8, 30100.0], [60.9, 30100.0], [61.0, 30100.0], [61.1, 30100.0], [61.2, 30100.0], [61.3, 30100.0], [61.4, 30100.0], [61.5, 30100.0], [61.6, 30100.0], [61.7, 30100.0], [61.8, 30100.0], [61.9, 30100.0], [62.0, 30100.0], [62.1, 30100.0], [62.2, 30100.0], [62.3, 30100.0], [62.4, 30100.0], [62.5, 30100.0], [62.6, 30100.0], [62.7, 30100.0], [62.8, 30100.0], [62.9, 30100.0], [63.0, 30100.0], [63.1, 30100.0], [63.2, 30100.0], [63.3, 30100.0], [63.4, 30101.0], [63.5, 30101.0], [63.6, 30101.0], [63.7, 30101.0], [63.8, 30101.0], [63.9, 30101.0], [64.0, 30101.0], [64.1, 30101.0], [64.2, 30101.0], [64.3, 30101.0], [64.4, 30101.0], [64.5, 30101.0], [64.6, 30101.0], [64.7, 30101.0], [64.8, 30101.0], [64.9, 30101.0], [65.0, 30101.0], [65.1, 30101.0], [65.2, 30101.0], [65.3, 30101.0], [65.4, 30101.0], [65.5, 30101.0], [65.6, 30101.0], [65.7, 30101.0], [65.8, 30102.0], [65.9, 30102.0], [66.0, 30102.0], [66.1, 30102.0], [66.2, 30102.0], [66.3, 30102.0], [66.4, 30102.0], [66.5, 30102.0], [66.6, 30102.0], [66.7, 30102.0], [66.8, 30102.0], [66.9, 30102.0], [67.0, 30102.0], [67.1, 30102.0], [67.2, 30102.0], [67.3, 30102.0], [67.4, 30102.0], [67.5, 30102.0], [67.6, 30102.0], [67.7, 30102.0], [67.8, 30102.0], [67.9, 30102.0], [68.0, 30102.0], [68.1, 30102.0], [68.2, 30102.0], [68.3, 30102.0], [68.4, 30102.0], [68.5, 30103.0], [68.6, 30103.0], [68.7, 30103.0], [68.8, 30103.0], [68.9, 30103.0], [69.0, 30103.0], [69.1, 30103.0], [69.2, 30103.0], [69.3, 30103.0], [69.4, 30103.0], [69.5, 30103.0], [69.6, 30103.0], [69.7, 30103.0], [69.8, 30103.0], [69.9, 30103.0], [70.0, 30103.0], [70.1, 30103.0], [70.2, 30104.0], [70.3, 30104.0], [70.4, 30104.0], [70.5, 30104.0], [70.6, 30104.0], [70.7, 30104.0], [70.8, 30104.0], [70.9, 30104.0], [71.0, 30104.0], [71.1, 30104.0], [71.2, 30104.0], [71.3, 30104.0], [71.4, 30104.0], [71.5, 30104.0], [71.6, 30104.0], [71.7, 30104.0], [71.8, 30104.0], [71.9, 30104.0], [72.0, 30104.0], [72.1, 30104.0], [72.2, 30104.0], [72.3, 30105.0], [72.4, 30105.0], [72.5, 30105.0], [72.6, 30105.0], [72.7, 30105.0], [72.8, 30105.0], [72.9, 30105.0], [73.0, 30105.0], [73.1, 30105.0], [73.2, 30105.0], [73.3, 30105.0], [73.4, 30105.0], [73.5, 30105.0], [73.6, 30105.0], [73.7, 30105.0], [73.8, 30105.0], [73.9, 30105.0], [74.0, 30105.0], [74.1, 30106.0], [74.2, 30106.0], [74.3, 30106.0], [74.4, 30106.0], [74.5, 30106.0], [74.6, 30106.0], [74.7, 30106.0], [74.8, 30106.0], [74.9, 30106.0], [75.0, 30107.0], [75.1, 30107.0], [75.2, 30107.0], [75.3, 30107.0], [75.4, 30107.0], [75.5, 30107.0], [75.6, 30107.0], [75.7, 30107.0], [75.8, 30107.0], [75.9, 30107.0], [76.0, 30107.0], [76.1, 30107.0], [76.2, 30107.0], [76.3, 30107.0], [76.4, 30107.0], [76.5, 30108.0], [76.6, 30108.0], [76.7, 30108.0], [76.8, 30108.0], [76.9, 30108.0], [77.0, 30108.0], [77.1, 30108.0], [77.2, 30108.0], [77.3, 30108.0], [77.4, 30109.0], [77.5, 30109.0], [77.6, 30109.0], [77.7, 30109.0], [77.8, 30109.0], [77.9, 30109.0], [78.0, 30109.0], [78.1, 30109.0], [78.2, 30109.0], [78.3, 30109.0], [78.4, 30109.0], [78.5, 30110.0], [78.6, 30110.0], [78.7, 30110.0], [78.8, 30110.0], [78.9, 30110.0], [79.0, 30110.0], [79.1, 30110.0], [79.2, 30110.0], [79.3, 30110.0], [79.4, 30111.0], [79.5, 30111.0], [79.6, 30111.0], [79.7, 30111.0], [79.8, 30111.0], [79.9, 30111.0], [80.0, 30111.0], [80.1, 30111.0], [80.2, 30112.0], [80.3, 30112.0], [80.4, 30112.0], [80.5, 30112.0], [80.6, 30112.0], [80.7, 30112.0], [80.8, 30112.0], [80.9, 30113.0], [81.0, 30113.0], [81.1, 30113.0], [81.2, 30113.0], [81.3, 30113.0], [81.4, 30113.0], [81.5, 30113.0], [81.6, 30113.0], [81.7, 30114.0], [81.8, 30114.0], [81.9, 30114.0], [82.0, 30114.0], [82.1, 30114.0], [82.2, 30114.0], [82.3, 30114.0], [82.4, 30115.0], [82.5, 30115.0], [82.6, 30115.0], [82.7, 30115.0], [82.8, 30116.0], [82.9, 30116.0], [83.0, 30116.0], [83.1, 30116.0], [83.2, 30116.0], [83.3, 30116.0], [83.4, 30116.0], [83.5, 30117.0], [83.6, 30117.0], [83.7, 30117.0], [83.8, 30117.0], [83.9, 30117.0], [84.0, 30117.0], [84.1, 30117.0], [84.2, 30118.0], [84.3, 30118.0], [84.4, 30118.0], [84.5, 30118.0], [84.6, 30118.0], [84.7, 30118.0], [84.8, 30119.0], [84.9, 30119.0], [85.0, 30119.0], [85.1, 30119.0], [85.2, 30119.0], [85.3, 30119.0], [85.4, 30120.0], [85.5, 30120.0], [85.6, 30120.0], [85.7, 30120.0], [85.8, 30120.0], [85.9, 30121.0], [86.0, 30122.0], [86.1, 30122.0], [86.2, 30122.0], [86.3, 30122.0], [86.4, 30123.0], [86.5, 30123.0], [86.6, 30123.0], [86.7, 30123.0], [86.8, 30123.0], [86.9, 30123.0], [87.0, 30124.0], [87.1, 30124.0], [87.2, 30125.0], [87.3, 30125.0], [87.4, 30125.0], [87.5, 30125.0], [87.6, 30125.0], [87.7, 30127.0], [87.8, 30127.0], [87.9, 30127.0], [88.0, 30127.0], [88.1, 30127.0], [88.2, 30128.0], [88.3, 30128.0], [88.4, 30129.0], [88.5, 30131.0], [88.6, 30133.0], [88.7, 30133.0], [88.8, 30133.0], [88.9, 30134.0], [89.0, 30136.0], [89.1, 30136.0], [89.2, 30137.0], [89.3, 30137.0], [89.4, 30137.0], [89.5, 30138.0], [89.6, 30138.0], [89.7, 30139.0], [89.8, 30139.0], [89.9, 30140.0], [90.0, 30140.0], [90.1, 30141.0], [90.2, 30141.0], [90.3, 30142.0], [90.4, 30142.0], [90.5, 30142.0], [90.6, 30142.0], [90.7, 30142.0], [90.8, 30142.0], [90.9, 30143.0], [91.0, 30144.0], [91.1, 30144.0], [91.2, 30145.0], [91.3, 30145.0], [91.4, 30146.0], [91.5, 30147.0], [91.6, 30147.0], [91.7, 30148.0], [91.8, 30153.0], [91.9, 30154.0], [92.0, 30156.0], [92.1, 30157.0], [92.2, 30157.0], [92.3, 30158.0], [92.4, 30158.0], [92.5, 30159.0], [92.6, 30160.0], [92.7, 30162.0], [92.8, 30163.0], [92.9, 30165.0], [93.0, 30165.0], [93.1, 30166.0], [93.2, 30166.0], [93.3, 30168.0], [93.4, 30170.0], [93.5, 30173.0], [93.6, 30175.0], [93.7, 30176.0], [93.8, 30179.0], [93.9, 30180.0], [94.0, 30180.0], [94.1, 30181.0], [94.2, 30183.0], [94.3, 30183.0], [94.4, 30187.0], [94.5, 30187.0], [94.6, 30188.0], [94.7, 30194.0], [94.8, 30196.0], [94.9, 30197.0], [95.0, 30198.0], [95.1, 30209.0], [95.2, 30214.0], [95.3, 30216.0], [95.4, 30217.0], [95.5, 30223.0], [95.6, 30226.0], [95.7, 30226.0], [95.8, 30229.0], [95.9, 30230.0], [96.0, 30232.0], [96.1, 30233.0], [96.2, 30246.0], [96.3, 30248.0], [96.4, 30253.0], [96.5, 30264.0], [96.6, 30268.0], [96.7, 30269.0], [96.8, 30285.0], [96.9, 30290.0], [97.0, 30405.0], [97.1, 30426.0], [97.2, 30516.0], [97.3, 30617.0], [97.4, 30703.0], [97.5, 129320.0], [97.6, 129393.0], [97.7, 129410.0], [97.8, 129467.0], [97.9, 129691.0], [98.0, 129705.0], [98.1, 129775.0], [98.2, 129852.0], [98.3, 130190.0], [98.4, 130205.0], [98.5, 130250.0], [98.6, 130321.0], [98.7, 130323.0], [98.8, 130409.0], [98.9, 130527.0], [99.0, 130572.0], [99.1, 130576.0], [99.2, 130586.0], [99.3, 130713.0], [99.4, 130910.0], [99.5, 130965.0], [99.6, 131050.0], [99.7, 131059.0], [99.8, 131324.0], [99.9, 131369.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 21000.0, "maxY": 556.0, "series": [{"data": [[21000.0, 50.0], [30100.0, 345.0], [30000.0, 556.0], [30400.0, 2.0], [30200.0, 19.0], [30700.0, 1.0], [30600.0, 1.0], [30500.0, 1.0], [131300.0, 2.0], [129300.0, 2.0], [130500.0, 4.0], [129700.0, 2.0], [129800.0, 1.0], [130300.0, 2.0], [130400.0, 1.0], [130900.0, 2.0], [130200.0, 2.0], [130100.0, 1.0], [129600.0, 1.0], [131000.0, 2.0], [129400.0, 2.0], [130700.0, 1.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 131300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1000.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1000.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 13.0, "minX": 1.54222908E12, "maxY": 100.0, "series": [{"data": [[1.54222932E12, 90.0689655172414], [1.54222914E12, 100.0], [1.54222944E12, 13.0], [1.54222926E12, 100.0], [1.54222908E12, 100.0], [1.54222938E12, 31.0], [1.5422292E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54222944E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 21008.0, "minX": 1.0, "maxY": 131369.0, "series": [{"data": [[2.0, 130910.0], [3.0, 130190.0], [4.0, 129410.0], [5.0, 130409.0], [6.0, 129852.0], [7.0, 129393.0], [8.0, 130205.0], [9.0, 131324.0], [10.0, 130713.0], [11.0, 130527.0], [12.0, 130576.0], [13.0, 130323.0], [14.0, 129775.0], [15.0, 131059.0], [16.0, 129467.0], [17.0, 131050.0], [18.0, 129691.0], [19.0, 130250.0], [20.0, 130586.0], [21.0, 129320.0], [22.0, 130965.0], [23.0, 130572.0], [24.0, 130321.0], [25.0, 129705.0], [26.0, 30157.0], [27.0, 30197.0], [28.0, 30114.0], [29.0, 30093.0], [30.0, 30092.0], [31.0, 30095.0], [33.0, 30096.0], [32.0, 30111.0], [35.0, 30091.0], [34.0, 30095.0], [37.0, 30094.0], [36.0, 30230.0], [39.0, 30096.0], [38.0, 30096.0], [41.0, 30093.0], [40.0, 30089.0], [43.0, 30093.0], [42.0, 30094.0], [45.0, 30111.0], [44.0, 30098.0], [47.0, 30092.0], [46.0, 30146.0], [49.0, 30093.0], [48.0, 21015.0], [51.0, 21010.0], [50.0, 21009.0], [53.0, 21008.0], [52.0, 21009.0], [55.0, 30102.0], [54.0, 30091.0], [57.0, 21012.0], [56.0, 21014.0], [59.0, 21013.0], [58.0, 21015.0], [61.0, 21021.0], [60.0, 21011.0], [63.0, 21009.0], [62.0, 21012.0], [67.0, 21022.0], [66.0, 21017.0], [65.0, 21011.0], [64.0, 21016.0], [71.0, 21010.0], [70.0, 21018.0], [69.0, 21021.0], [68.0, 21013.0], [75.0, 21010.0], [74.0, 21020.0], [73.0, 21019.0], [72.0, 21017.0], [79.0, 21010.0], [78.0, 21031.0], [77.0, 21023.0], [76.0, 21010.0], [83.0, 21011.0], [82.0, 21014.0], [81.0, 21025.0], [80.0, 21014.0], [87.0, 21010.0], [86.0, 21018.0], [85.0, 21010.0], [84.0, 21019.0], [91.0, 21021.0], [90.0, 21017.0], [89.0, 21009.0], [88.0, 21016.0], [95.0, 21013.0], [94.0, 21017.0], [93.0, 21011.0], [92.0, 21022.0], [99.0, 21013.0], [98.0, 21011.0], [97.0, 21010.0], [96.0, 21017.0], [100.0, 30098.630410654805], [1.0, 131369.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}, {"data": [[95.05, 32159.310999999983]], "isOverall": false, "label": "BeanShell Sampler-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.54222908E12, "maxY": 4.9E-324, "series": [{"data": [[1.54222932E12, 0.0], [1.54222914E12, 0.0], [1.54222944E12, 0.0], [1.54222926E12, 0.0], [1.54222908E12, 0.0], [1.54222938E12, 0.0], [1.5422292E12, 0.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.54222932E12, 0.0], [1.54222914E12, 0.0], [1.54222944E12, 0.0], [1.54222926E12, 0.0], [1.54222908E12, 0.0], [1.54222938E12, 0.0], [1.5422292E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54222944E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 27875.349753694583, "minX": 1.54222908E12, "maxY": 130318.48000000001, "series": [{"data": [[1.54222932E12, 27875.349753694583], [1.54222914E12, 30106.964646464632], [1.54222944E12, 130318.48000000001], [1.54222926E12, 30107.62], [1.54222908E12, 30104.880239520953], [1.54222938E12, 30124.63636363636], [1.5422292E12, 30107.469387755085]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54222944E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.54222908E12, "maxY": 4.9E-324, "series": [{"data": [[1.54222932E12, 0.0], [1.54222914E12, 0.0], [1.54222944E12, 0.0], [1.54222926E12, 0.0], [1.54222908E12, 0.0], [1.54222938E12, 0.0], [1.5422292E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54222944E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.54222908E12, "maxY": 4.9E-324, "series": [{"data": [[1.54222932E12, 0.0], [1.54222914E12, 0.0], [1.54222944E12, 0.0], [1.54222926E12, 0.0], [1.54222908E12, 0.0], [1.54222938E12, 0.0], [1.5422292E12, 0.0]], "isOverall": false, "label": "BeanShell Sampler", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54222944E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 21008.0, "minX": 1.54222908E12, "maxY": 131369.0, "series": [{"data": [[1.54222932E12, 30703.0], [1.54222914E12, 30248.0], [1.54222944E12, 131369.0], [1.54222926E12, 30285.0], [1.54222908E12, 30405.0], [1.54222938E12, 30230.0], [1.5422292E12, 30269.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.54222932E12, 21008.0], [1.54222914E12, 30091.0], [1.54222944E12, 129320.0], [1.54222926E12, 30089.0], [1.54222908E12, 30089.0], [1.54222938E12, 30091.0], [1.5422292E12, 30090.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.54222932E12, 30125.5], [1.54222914E12, 30123.0], [1.54222944E12, 30140.0], [1.54222926E12, 30125.8], [1.54222908E12, 30117.0], [1.54222938E12, 30127.0], [1.5422292E12, 30125.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.54222932E12, 30265.4], [1.54222914E12, 30237.42], [1.54222944E12, 130571.55], [1.54222926E12, 30246.76], [1.54222908E12, 30296.879999999997], [1.54222938E12, 30264.96], [1.5422292E12, 30232.38]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.54222932E12, 30158.75], [1.54222914E12, 30152.2], [1.54222944E12, 30197.95], [1.54222926E12, 30158.0], [1.54222908E12, 30140.8], [1.54222938E12, 30160.4], [1.5422292E12, 30156.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54222944E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 30097.5, "minX": 1000.0, "maxY": 30097.5, "series": [{"data": [[1000.0, 30097.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1000.0, "maxY": 4.9E-324, "series": [{"data": [[1000.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.15, "minX": 1.54222902E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.54222902E12, 1.15], [1.54222932E12, 2.316666666666667], [1.54222914E12, 3.3], [1.54222926E12, 3.3333333333333335], [1.54222908E12, 3.3], [1.5422292E12, 3.2666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54222932E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.54222908E12, "maxY": 3.3833333333333333, "series": [{"data": [[1.54222932E12, 3.3833333333333333], [1.54222914E12, 3.3], [1.54222944E12, 0.4166666666666667], [1.54222926E12, 3.3333333333333335], [1.54222908E12, 2.783333333333333], [1.54222938E12, 0.18333333333333332], [1.5422292E12, 3.2666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54222944E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.54222908E12, "maxY": 3.3833333333333333, "series": [{"data": [[1.54222932E12, 3.3833333333333333], [1.54222914E12, 3.3], [1.54222944E12, 0.4166666666666667], [1.54222926E12, 3.3333333333333335], [1.54222908E12, 2.783333333333333], [1.54222938E12, 0.18333333333333332], [1.5422292E12, 3.2666666666666666]], "isOverall": false, "label": "BeanShell Sampler-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54222944E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.54222908E12, "maxY": 3.3833333333333333, "series": [{"data": [[1.54222932E12, 3.3833333333333333], [1.54222914E12, 3.3], [1.54222944E12, 0.4166666666666667], [1.54222926E12, 3.3333333333333335], [1.54222908E12, 2.783333333333333], [1.54222938E12, 0.18333333333333332], [1.5422292E12, 3.2666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54222944E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

