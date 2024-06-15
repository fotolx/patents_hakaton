anychart.onDocumentReady(function () {

    // create a data set on our data
    var dataSet = anychart.data.set(getData9());
  
  
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
  
    // create a line chart
    var chart = anychart.line();
  
    // turn on the line chart animation
    chart.animation(true);
  
    // turn on the crosshair
    chart.crosshair().enabled(true).yLabel(false).yStroke(null);
  
    chart.yMinorGrid(true);
  
    // create the first series with the mapped data
    var firstSeries = chart.line(firstSeriesData);
    firstSeries
      .name('18-34')
      .stroke('1 #ACA9B6')
      .tooltip()
      .format('Age group 18-34 : {%value}%');
  
    // create the second series with the mapped data
    var secondSeries = chart.line(secondSeriesData);
    secondSeries
      .name('35-49')
      .stroke('1 #ACA9B6')
      .tooltip()
      .format('Age group 35-49 : {%value}%');
  
    // create the third series with the mapped data
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries
      .name('50-64')
      .stroke('3 #FD6D2B')
      .tooltip()
      .format('Age group 50-64 : {%value}%');
  
    // create the fourth series with the mapped data
    var fourthSeries = chart.line(fourthSeriesData);
    fourthSeries
      .name('65+')
      .stroke('1 #ACA9B6')
      .tooltip()
      .format('Age group 65+ : {%value}%');
  
  
    // turn the legend on
    chart.legend().enabled(false);
  
    // set the container id for the line chart
    chart.container('analitic-electrik');
  
    // draw the line chart
    chart.draw();
  
  });
  
  function getData9() {
    return [
      ['2015', 8.9, 1.2, 8.2, 5.2],
      ['2016', 2, 2, 2, 4],
      ['2017', 6.5, 11.8, 6.8, 6.6],
      ['2018', 18.7, 12, 7.3, 19.1],
      ['2019', 15.7, 14, 12.6, 19.2],
      ['2020', 17.2, 12.6, 12.4, 11.2],
      ['2021', 16, 16.2, 13.7, 19.9],
      ['2022', 14, 14.4, 12.8, 16.4],
      ['2023', 13.3, 8.8, 22.5, 14.3],
    ];
  }