Highcharts.getJSON( 'https://raw.githubusercontent.com/juanma2424/Happy-Web/juanma/JSData/test1.json',  function (data) {
    Highcharts.mapChart('container', {
        chart: {
            borderWidth: 1,
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
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
            }
        }]
    });
});
