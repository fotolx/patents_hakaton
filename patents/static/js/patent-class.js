
anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set(getData2());

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
    var thirdSeriesData2 = dataSet.mapAs({ x: 0, value: 4 });

    // create line chart
    var chart = anychart.line();

    // turn on chart animation
    chart.animation(true);

    // set chart padding
    chart.padding([10, 20, 5, 20]);

    // turn on the crosshair
    chart.crosshair().enabled(true).yLabel(false).yStroke(null);

    // set tooltip mode to point
    chart.tooltip().positionMode('point');




    // create first series with mapped data
    var firstSeries = chart.line(firstSeriesData);
    firstSeries.name('ЦФО');
    firstSeries.hovered().markers().enabled(true).type('circle').size(4);
    firstSeries
        .stroke('1 #0F2E44')
        .tooltip()
        .position('right')
        .anchor('left-center')
        .offsetX(5)
        .offsetY(5);

    // create second series with mapped data
    var secondSeries = chart.line(secondSeriesData);
    secondSeries.name('СЗФО');
    secondSeries.hovered().markers().enabled(true).type('circle').size(4);
    secondSeries
        .stroke('1 #5D98C3')
        .tooltip()
        .position('right')
        .anchor('left-center')
        .offsetX(5)
        .offsetY(5);

    // create third series with mapped data
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries.name('ЮФО');
    thirdSeries.hovered().markers().enabled(true).type('circle').size(4);
    thirdSeries
        .stroke('1 #3977A3')
        .tooltip()
        .position('right')
        .anchor('left-center')
        .offsetX(5)
        .offsetY(5);

    // create third series with mapped data
    var thirdSeries1 = chart.line(thirdSeriesData2);
    thirdSeries1.name('СКФО');
    thirdSeries1.hovered().markers().enabled(true).type('circle').size(4);
    thirdSeries1
        .stroke('1 #B9E2FF')
        .tooltip()
        .position('right')
        .anchor('left-center')
        .offsetX(5)
        .offsetY(5);

    // turn the legend on
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]);

    // set container id for the chart
    chart.container('patent_class');
    // initiate chart drawing
    chart.draw();

    // enable major grids
    chart.xGrid(true);
    chart.yGrid(true);


    chart.yScale().ticks().interval(5);

    // customize y-axis labels
    chart.yAxis().labels().format(function () {
        var labels = {
            0: "Прочие",
            10: "Промо",
            20: "Модель",
            30: "Заявка",
            40: "Патент",
            45: "...",
        };
        return labels[this.value] || this.value;
    });
});

function getData2() {
    return [
        ['ЦФО', 30.6, 30.3, 40.8, 11.5],
        ['СЗФО', 10.1, 20.0, 10.1, 14.1],
        ['ЮФО', 8.5, 6.2, 5.1, 17.5],
        ['СКФО', 9.2, 18.8, 16.5, 18.9],
        ['Май', 12.1, 13.0, 22.5, 15.8],
        ['ПФО', 11.6, 13.9, 18.0, 22.9],
        ['СФО', 16.4, 18.0, 21.0, 25.2],
        ['УрФО', 12.0, 23.3, 20.3, 27.0],
        ['ДФО', 13.2, 24.7, 19.2, 26.5],
    ];
}
