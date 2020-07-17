var PpathZ;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = true;

slider.oninput = function () {

    output.innerHTML = this.value;

    if (slider.value === "2015") {
        Ppath = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json';
    }
    if (slider.value === "2016") {
        Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/Data/JSData/M2019.json';
    }

    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json', function (data) {

        // Prevent logarithmic errors in color calulcation
        data.forEach(function (p) {
            p.value = (p.value < 1 ? 1 : p.value);
        });

        // Initiate the chart
        Highcharts.mapChart('container', {
            chart: {
                map: 'custom/world'
            },

            title: {
                text: 'Zoom in on country by double click'
            },

            mapNavigation: {
                enabled: true,
                enableDoubleClickZoomTo: true
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series: [{
                data: data,
                joinBy: ['iso-a3', 'code3'],
                name: 'Population density',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                tooltip: {
                    valueSuffix: '/km²'
                }
            }]
        });
    });





    // Highcharts.getJSON(Ppath, function (data) {

    //     // Prevent logarithmic errors in color calulcation
    //     data.forEach(function (p) {
    //         p.value = (p.value < 1 ? 3 : p.value);
    //     });

    //     Highcharts.mapChart('container', {
    //         chart: {
    //             borderWidth: 3,
    //             map: 'custom/world'
    //         },

    //         title: {
    //             text: 'World population 2013 by country'
    //         },

    //         subtitle: {
    //             text: 'Demo of Highcharts map with bubbles'
    //         },

    //         legend: {
    //             enabled: false
    //         },

    //         mapNavigation: {
    //             enabled: true,
    //             buttonOptions: {
    //                 verticalAlign: 'bottom'
    //             }
    //         },

    //         series: [{
    //             name: 'Countries',
    //             color: '#E0E0E0',
    //             enableMouseTracking: false
    //         }, {
    //             type: 'mapbubble',
    //             name: 'Population 2016',
    //             joinBy: ['iso-a3', 'code3'],
    //             data: data,
    //             minSize: 4,
    //             maxSize: '7%',
    //             tooltip: {
    //                 pointFormat: '{point.properties.hc-a2}: {point.z} Happy Score'
    //             }
    //         }]

    //     });

    //     if (countryData === "1") {
    //         countryData = "hola";
    //     } else {
    //         countryData = series.tooltip.pointFormat;
    //     }



    //     Highcharts.chart('container1', {



    //         chart: {
    //             plotBackgroundColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false,
    //             type: 'pie'
    //         },
    //         title: {
    //             text: countryData
    //         },
    //         tooltip: {
    //             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //         },
    //         accessibility: {
    //             point: {
    //                 valueSuffix: '%'
    //             }
    //         },
    //         plotOptions: {
    //             pie: {
    //                 allowPointSelect: true,
    //                 cursor: 'pointer',
    //                 dataLabels: {
    //                     enabled: true,
    //                     format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //                 }
    //             }
    //         },
    //         series: [{
    //             name: 'Brands',
    //             colorByPoint: true,
    //             data: [{
    //                 name: 'Chrome',
    //                 y: 61.41,
    //             }, {
    //                 name: 'Internet Explorer',
    //                 y: 11.84
    //             }, {
    //                 name: 'Firefox',
    //                 y: 10.85
    //             }, {
    //                 name: 'Edge',
    //                 y: 4.67
    //             }, {
    //                 name: 'Safari',
    //                 y: 4.18
    //             }, {
    //                 name: 'Sogou Explorer',
    //                 y: 1.64
    //             }, {
    //                 name: 'Opera',
    //                 y: 1.6
    //             }, {
    //                 name: 'QQ',
    //                 y: 1.2
    //             }, {
    //                 name: 'Other',
    //                 y: 2.61
    //             }]
    //         }]
    //     });


    // });






}


