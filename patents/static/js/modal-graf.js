anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
      ['Январь', 225],
      ['Февраль', 200],
      ['Март', 205],
      ['Апрель', 190],
      ['Май', 180],
      ['Июнь', 185],
      ['Июль', 195],
      ['Август', 230],
      ['Сентябрь', 227],
      ['Октябрь', 232],
      ['Ноябрь', 228],
      ['Декабрь', 235]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData = dataSet.mapAs({ x: 0, value: 1 });

    // create area chart
    var chart = anychart.area();

    // adding dollar symbols to yAxis labels
    chart.yAxis().labels().format('{%Value}');

    // turn on chart animation
    chart.animation(true);

    // axes and scale settings
    chart.yScale().minimum(150).maximum(300);
    chart.xAxis().labels().padding([5, 5, 0, 5]);

    // chart grids
    chart.yGrid(true).xGrid(true);

    // turn on the crosshair
    var crosshair = chart.crosshair();
    crosshair.enabled(true).yStroke(null).xStroke('#fff').zIndex(99);
    crosshair.yLabel(false);
    crosshair.xLabel(false);

    // create first series with mapped data
    var series = chart.splineArea(seriesData);
    series.name('Патентов');
    series.color('#3977A3');
    series
      .markers()
      .enabled(true)
      .type('circle')
      .size(4)
      .stroke('1.5 #0F2E44')
      .zIndex(100);

    // set chart tooltip and interactivity settings
    chart
      .tooltip()
      .positionMode('chart')
      .anchor('right-top')
      .position('right-top')
      .offsetX(50)
      .offsetY(50);

    chart.interactivity().hoverMode('by-x');

    // set container id for the chart
    chart.container('modalgraf');

    // initiate chart drawing
    chart.draw();
  });
