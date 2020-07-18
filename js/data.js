var pathMap;
var pathPie;
var pathSemiPie;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function () {

    output.innerHTML = this.value;

    if (slider.value === "2015") {
        pathMap = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONMAP/2015M.json';
        pathPie = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONPIE/2015P.json';
    }
    if (slider.value === "2016") {
        pathMap = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONMAP/2016M.json';
        pathPie = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONPIE/2016P.json';
    }
    if (slider.value === "2017") {
        pathMap = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONMAP/2017M.json';
        pathPie = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONPIE/2017P.json';
    }
    if (slider.value === "2018") {
        pathMap = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONMAP/2018M.json';
        pathPie = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONPIE/2018P.json';
    }
    if (slider.value === "2019") {
        pathMap = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONMAP/2019M.json';
        pathPie = 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/DATA/JSON/JSONPIE/2019P.json';
    }

    Highcharts.getJSON(pathMap, function (data) {

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


    Highcharts.getJSON(pathPie, function (data) {

        Highcharts.chart('piecontainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'health in countries'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: data
            }]
        });
    })


    Highcharts.getJSON(pathSemiPie, function (data) {
        Highcharts.chart('semipiecontainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Browser<br>shares<br>2017',
                align: 'center',
                verticalAlign: 'middle',
                y: 60
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: data
            }]
        });
    })

}


