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

    Highcharts.getJSON('https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/Data/JSData/2019MP.json', function (data) {

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
                min: 400,
                max: 800,
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


    // Highcharts.getJSON('https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/Data/JSData/2019PG.json', function (data) {

    //     Highcharts.chart('container1', {
    //         chart: {
    //             plotBackgroundColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false,
    //             type: 'pie'
    //         },
    //         title: {
    //             text: 'Browser market shares in January, 2018'
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
    //             data:data
    //         }]
    //     });
    // })

}


