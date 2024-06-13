anychart.onDocumentReady(function () {
    // create pie chart with passed data
    var chart = anychart.pie([
        ['Москва', 105],
        ['Московская область', 55],
        ['Воронежская область', 2],
        ['Брянская область', 11],
        ['Тверская область', 20],
        ['Белгородская область', 10],
        ['Тульская область', 16],
        ['Владимирска область', 10],
        ['Ярославская область', 10],
        ['Ивановская область', 20],
        ['Калужская область', 30],
        ['Костромская область', 16],
        ['Курская область', 16],
        ['Липецкая область', 10],
        ['Тамбовская область', 10],
        ['Орловская область', 20],
        ['Рязанска область', 10],
        ['Смоленская область', 16],
    ]);

    var charts = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);
    var charts3 = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);


    var charts4 = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);

    var charts5 = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);

    var charts6 = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);

    var charts7 = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);

    var charts8 = anychart.pie([
        ['Rouge', 80540],
        ['Foundation', 94190],
        ['Mascara', 102610],
        ['Lip gloss', 110430],
        ['Lipstick', 128000],
        ['Nail polish', 143760]
    ]);

    // create range color palette with color ranged between light blue and dark blue
    var palette = anychart.palettes.rangeColors();
    palette.items([{ color: '#64b5f6' }, { color: '#455a64' }]);

    function configureChart(chart, containerId, palette) {
        chart.innerRadius("30%");
        chart.palette(palette);
        chart.legend(false);
        chart.container(containerId);
        chart.draw();
    }
    
    // Использование функции для настройки диаграмм
    configureChart(chart, 'region', palette);
    configureChart(charts, 'regions-2', palette);
    configureChart(charts3, 'regions-3', palette);
    configureChart(charts4, 'regions-4', palette);
    configureChart(charts5, 'regions-5', palette);
    configureChart(charts6, 'regions-6', palette);
    configureChart(charts7, 'regions-7', palette);
    configureChart(charts8, 'regions-8', palette);
});
