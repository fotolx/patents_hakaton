anychart.onDocumentReady(function () {

    // create a data set
    var data = anychart.data.set([
        ["Россия", 1000],
        ["Китай", 1200],
        ["США", 1300],
        ["Европа", 1100],
        ["Прочие", 900]
    ]);

    // create a chart
    var chart = anychart.bar();

    // create a bar series and set the data
    var series = chart.bar(data);
    // series22.hovered().fill("#3977A3", 0.1);
    series.normal().fill("#3977A3", 1);
    series.normal().stroke("#0A3E63", 1);

    // enable major grids
    chart.xGrid(true);
    chart.yGrid(true);

    // enable minor grids 
    chart.xMinorGrid(true);
    chart.yMinorGrid(true);

    // set the container id
    chart.container("country_all");

    // initiate drawing the chart
    chart.draw();
});