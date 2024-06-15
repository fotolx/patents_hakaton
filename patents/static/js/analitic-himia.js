anychart.onDocumentReady(function () {

  // create a data set on our data
  var dataSet = anychart.data.set(getData2());


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
    .stroke('3 #52A240')
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
  chart.container('analitic-himia');

  // draw the line chart
  chart.draw();

});

function getData2() {
  return [
    ['2015', 16.9, 12.2, 10.2, 5.2],
    ['2016', 17, 17.8, 10, 4.8],
    ['2017', 26.5, 23.8, 16.8, 6.6],
    ['2018', 28.7, 22, 17.3, 29.1],
    ['2019', 35.7, 24, 22.6, 13.2],
    ['2020', 37.2, 25.6, 32.4, 31.2],
    ['2021', 36.5, 12.2, 23.7, 39.9],
    ['2022', 40, 33.4, 23.8, 26.4],
    ['2023', 43.3, 32.8, 43.5, 54.3],
  ];
}