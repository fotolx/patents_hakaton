anychart.onDocumentReady(function () {

    // create data
    var data = [
        ["ЦФО", 1400],
        ["СЗФО", 1000],
        ["ЮФО", 900],
        ["СКФО", 1000],
        ["ПФО", 270],
        ["СФО", 700],
        ["УрФО", 200],
        ["ДФО", 400],
    ];

    // create a chart
    var chart = anychart.column();

    // create a column series and set the data
    var series = chart.column(data);
    series.normal().fill("#3977A3", 1);
    series.normal().stroke("#0A3E63", 1);

    // enable major grids
    chart.xGrid(true);
    chart.yGrid(true);

    // enable minor grids 
    chart.xMinorGrid(true);
    chart.yMinorGrid(true);

    // set the container id
    chart.container("patent_region");

    // initiate drawing the chart
    chart.draw();
});