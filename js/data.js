var Ppath;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function () {

    output.innerHTML = this.value;

    if (slider.value === "2015") {
        Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/2015M.json';
    }
    if (slider.value === "2016") {
        Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/2016M.json';
    }
    if (slider.value === "2017") {
        Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/2017M.json';
    }
    if (slider.value === "2018") {
        Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/2018M.json';
    }
    if (slider.value === "2019") {
        Ppath = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/2019M.json';
    }

    Highcharts.getJSON(Ppath, function (data) {

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
                text: 'Happiest countries in the world'
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
                name: 'Happiness',
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


