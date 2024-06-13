anychart.onDocumentReady(function () {
    // create data
    var data = [  
        {x: "ЦФО", y: 400},
        {x: "СЗФО", y: 400},
        {x: "ЮФО", y: 200},
        {x: "СКФО", y: 600},
        {x: "ПФО", y: 400},
        {x: "СФО", y: 600},
        {x: "УрФО", y: 400},
        {x: "ДФО", y: 1400},
    ];
    var data2 = [  
        {x: "ЦФО", y: 200},
        {x: "СЗФО", y: 200},
        {x: "ЮФО", y: 400},
        {x: "СКФО", y: 400},
        {x: "ПФО", y: 200},
        {x: "СФО", y: 400},
        {x: "УрФО", y: 200},
        {x: "ДФО", y: 1200},
    ];

    var data3 = [  
        {x: "ЦФО", y: 600},
        {x: "СЗФО", y: 600},
        {x: "ЮФО", y: 600},
        {x: "СКФО", y: 200},
        {x: "ПФО", y: 600},
        {x: "СФО", y: 200},
        {x: "УрФО", y: 600},
        {x: "ДФО", y: 1000},
    ];

    var data4 = [  
        {x: "ЦФО", y: 800},
        {x: "СЗФО", y: 800},
        {x: "ЮФО", y: 800},
        {x: "СКФО", y: 800},
        {x: "ПФО", y: 800},
        {x: "СФО", y: 800},
        {x: "УрФО", y: 800},
        {x: "ДФО", y: 800},
    ];

    var data5 = [  
        {x: "ЦФО", y: 1000},
        {x: "СЗФО", y: 1000},
        {x: "ЮФО", y: 1000},
        {x: "СКФО", y: 1000},
        {x: "ПФО", y: 1000},
        {x: "СФО", y: 1000},
        {x: "УрФО", y: 1000},
        {x: "ДФО", y: 600},
    ];

    var data6 = [  
        {x: "ЦФО", y: 1200},
        {x: "СЗФО", y: 1200},
        {x: "ЮФО", y: 1200},
        {x: "СКФО", y: 1200},
        {x: "ПФО", y: 1200},
        {x: "СФО", y: 1200},
        {x: "УрФО", y: 1200},
        {x: "ДФО", y: 400},
    ];

    var data7 = [  
        {x: "ЦФО", y: 1400},
        {x: "СЗФО", y: 1400},
        {x: "ЮФО", y: 1400},
        {x: "СКФО", y: 1400},
        {x: "ПФО", y: 1400},
        {x: "СФО", y: 1400},
        {x: "УрФО", y: 1400},
        {x: "ДФО", y: 200},
    ];

    var data8 = [  
        {x: "ЦФО", y: 1600},
        {x: "СЗФО", y: 1600},
        {x: "ЮФО", y: 1600},
        {x: "СКФО", y: 1600},
        {x: "ПФО", y: 1600},
        {x: "СФО", y: 1600},
        {x: "УрФО", y: 1600},
        {x: "ДФО", y: 1600},
    ];
    
    // create a chart
    var chart = anychart.cartesian();
  
    // set the interactivity mode
    chart.interactivity().hoverMode("by-x");
  
    // create marker series and set the data
    var series = chart.marker(data);
    var series2 = chart.marker(data2);
    var series3 = chart.marker(data3);
    var series4 = chart.marker(data4);
    var series5 = chart.marker(data5);
    var series6 = chart.marker(data6);
    var series7 = chart.marker(data7);
    var series8 = chart.marker(data8);
  
    // set the type and size of markers
    [series, series2, series3, series4, series5, series6, series7, series8].forEach(function(s) {
        s.type("circle");
        s.normal().size(5);
        s.hovered().size(10);
        s.fill("rgba(1, 84, 166, 0.25)");
        s.stroke("#0154a6");
    });

    // enable major grids
    chart.xGrid(true);
    chart.yGrid(true);

    // enable minor grids 
    chart.xMinorGrid(true);
    chart.yMinorGrid(true);
  
    // set the titles of the axes 
    chart.xAxis().title("Федеральные округа РФ");
    chart.yAxis().title("МКП");

    chart.yScale().ticks().interval(200);

    // customize y-axis labels
    chart.yAxis().labels().format(function() {
        var labels = {
            0: "0",
            200: "A",
            400: "B",
            600: "C",
            800: "D",
            1000: "E",
            1200: "F",
            1400: "G",
            1600: "H",
            1800: "...",
        };
        return labels[this.value] || this.value;
    });
  
    series.tooltip().format("Патентов: {%y}");
    
    // set the container id
    chart.container("container");
  
    // initiate drawing the chart
    chart.draw();
});
