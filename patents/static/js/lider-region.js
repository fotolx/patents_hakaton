
anychart.onDocumentReady(function () {
    // create pie chart with passed data
    var chart = anychart.pie([
        ['ЦФО', 80540],
        ['СЗФО', 94190],
        ['ЮФО', 102610],
        ['СКФО', 110430],
        ['ПФО', 128000],
        ['СФО', 143760],
        ['УрФО', 143760],
        ['ДФО', 143760]
    ]);

    // create range color palette with color ranged between light blue and dark blue
    var palette = anychart.palettes.rangeColors();
    palette.items([{ color: '#64b5f6' }, { color: '#455a64' }]);

    

    // set chart title text settings
    chart.innerRadius('35%')
    chart.palette(palette);
    chart.legend(false);
    

    // set container id for the chart
    chart.container('lider_regions');
    // initiate chart drawing
    chart.draw();
});
