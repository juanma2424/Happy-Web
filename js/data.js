var Ppath ;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;

if(slider.value==="2015"){
    Ppath = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json'
}
if(slider.value==="2016"){
    Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/Data/JSData/M2019.json'
}


Highcharts.getJSON(Ppath, function (data) {

    Highcharts.mapChart('container', {
        chart: {
            borderWidth: 3,
            map: 'custom/world'
        },

        title: {
            text: 'World population 2013 by country'
        },

        subtitle: {
            text: 'Demo of Highcharts map with bubbles'
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Population 2016',
            joinBy: ['iso-a3', 'code3'],
            data: data,
            minSize: 4,
            maxSize: '7%',
            tooltip: {
                pointFormat: '{point.properties.hc-a2}: {point.z} Happy Score'
            }
        }]
    });
});




}
