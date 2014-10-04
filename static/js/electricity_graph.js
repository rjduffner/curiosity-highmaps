$(function () { 
    $('#container-barchart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Rachel',
            data: [1, 0, 4]
        }, {
            name: 'RJ',
            data: [100, 100, 3]
        }]
    });
});
